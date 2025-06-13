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

    const clientDistPath = resolve('dist/client')
    console.log('Resolved dist/client path:', clientDistPath)

    try {
      const files = await fs.readdir(clientDistPath)
      console.log('Contents of dist/client:')
      files.forEach((file) => console.log(' -', file))
    } catch (err) {
      console.error('Failed to read dist/client:', err)
    }

    app.use(compression())
    app.use(serveStatic(clientDistPath, { index: false }))
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
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    })

    app.use(vite.middlewares)
  }

  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl

      // Skip static files and Vite client paths
      const hasExtension = path.extname(url)
      if (hasExtension || url.startsWith('/@vite')) {
        console.log('Skipping non-app route:', url)
        return next()
      }

      let viteHead = ''
      if (!isProd) {
        viteHead = await vite.transformIndexHtml(
          url,
          `<html><head></head><body></body></html>`
        )
        viteHead = viteHead.substring(
          viteHead.indexOf('<head>') + 6,
          viteHead.indexOf('</head>')
        )
      }

      const entry = isProd
        ? await import('./dist/server/entry-server.js')
        : await vite.ssrLoadModule('/src/entry-server.tsx')

      console.info('Rendering SSR route:', url)
      entry.render({ req, res, head: viteHead })
    } catch (e) {
      if (!isProd) vite.ssrFixStacktrace(e)
      console.error(e.stack)
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

