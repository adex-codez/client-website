import path from 'node:path'
import express from 'express'
import getPort, { portNumbers } from 'get-port'
import { fileURLToPath } from 'node:url'

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export async function createServer(
  hmrPort,
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
) {
  
  const app = express()
  if (isProd) {
      const fs = await import('node:fs/promises') 
      const compression = (await import('compression')).default
      const serveStatic = (await import('serve-static')).default
      const resolve = (p) => path.resolve(__dirname, p)
      console.log(resolve("dist/client"))
      
      const clientDistPath = resolve('dist')
        console.log('Resolved dist/client path:', clientDistPath)
      
        try {
          const files = await fs.readdir(clientDistPath)
          console.log('Contents of dist/client:')
          files.forEach((file) => console.log(' -', file))
        } catch (err) {
          console.error('Failed to read dist/client:', err)
     }
  
      app.use(compression())
      app.use(serveStatic(resolve('dist/client'), { index: false }))
  }

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    })
    // use vite's connect instance as middleware
    app.use(vite.middlewares)
  } 

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      if (path.extname(url) !== '') {
        console.warn(`${url} is not valid router path`)
        res.status(404)
        res.end(`${url} is not valid router path`)
        return
      }

      // Best effort extraction of the head from vite's index transformation hook
      let viteHead = !isProd
        ? await vite.transformIndexHtml(
            url,
            "<html><head></head><body></body></html>",
          )
        : ''

      viteHead = viteHead.substring(
        viteHead.indexOf('<head>') + 6,
        viteHead.indexOf('</head>'),
      )

      const entry = await (async () => {
        if (!isProd) {
          print("isProd")
          return vite.ssrLoadModule('/src/entry-server.tsx')
        }
        
        return import('./dist/server/entry-server.js')
      })()

      console.info('Rendering: ', url, '...')
      entry.render({ req, res, head: viteHead })
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      console.info(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

if (!isTest) {
  createServer().then(async ({ app }) =>
    app.listen(await getPort({ port: portNumbers(3000, 3100) }), () => {
      console.info('Client Server: http://localhost:3000')
    }),
  )
}
