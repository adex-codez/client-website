import { createFileRoute } from '@tanstack/react-router';
import scrollSawMan from "../assets/images/main-working-with-a-sroll-saw.png";

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <div className="grid grid-cols-2 mx-auto container px-4 py-24 gap-10">
      <div className='self-center'>
        <h2 className='font-heading text-6xl text-center mb-10'>
                    About Us
              </h2>
              <div>
                <p>
                  Ashola-Jesu Scroll Patterns is more than a pattern shop—it’s a quiet refuge for those who craft with faith and purpose. With over 30 years of experience in scroll sawing by hand, we provide rare, hand-drawn word art patterns crafted with love and accuracy.
                </p>
                
                <p>
                  Whether you're a beginner, seasoned crafter, stay-at-home mother, retired grandfather, or artistic teen—this space is for you. Our patterns have inspired creatives from Nigeria to the USA, Canada, the UK, Australia, and more.
                </p>
                
                <p>
                  Every line, curve, and word is drawn by hand—with stories of encouragement, faith, creativity, and craftsmanship flowing through each design.
                </p>
              </div>
      </div>
      
      <img src={scrollSawMan} className="h-[90%] w-full"alt='a man using a scroll saw' />
    </div>
    <section className="container mx-auto mb-10 px-4 py-24">
            <h1 className="font-heading text-6xl text-center mb-20">Core Values</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-col bg-primary-300 px-8 py-10 gap-4 rounded-lg">
                <p className="text-center font-bold text-lg">Faith-Driven Creativity</p>
                <p className="text-center">We believe craftsmanship can glorify God and bless others.</p>
              </div>
              <div className="flex flex-col bg-primary-300 px-8 py-10 gap-4 rounded-lg">
                <p className="text-center font-bold text-lg">Authenticity</p>
                <p className="text-center"> All our patterns are hand-drawn, never AI or auto-generated.</p>
              </div>
              <div className="flex flex-col bg-primary-300 px-8 py-10 gap-4 rounded-lg">
                <p className="text-center font-bold text-lg">Community</p>
                <p className="text-center">We serve families, stay-at-home creatives, and global DIYers</p>
              </div>
              <div className="flex flex-col bg-primary-300 px-8 py-10 gap-4 rounded-lg md:justify-self-center lg:justify-self-center">
                <p className="text-center font-bold text-lg">Legacy & Learning</p>
                <p className="text-center">We preserve traditional scroll sawing and share wisdom through how-to content.</p>
              </div>
              <div className="flex flex-col bg-primary-300 px-8 py-10 gap-4 rounded-lg lg:justify-self-center">
                <p className="text-center font-bold text-lg">Accessibility</p>
                <p className="text-center">Patterns are affordable, inclusive, and made for all skill levels.</p>
              </div>
            </div> 
          </section>
          <section className="container px-4 pt-24 pb-40 mx-auto">
                  <div>
                    <h2 className="text-6xl font-heading text-center mb-20">
                      Business Goals  
                    </h2>
                  </div>
                        
                  <ul className="grid grid-cols-2 gap-x-10 list-disc">
                    <li className="mb-4">Build a library of 100+ rare, downloadable word art patterns by 2026.</li>
                    <li className="mb-4">Grow an engaged email list of 10,000+ crafters worldwide.</li>
                    <li className="mb-4">Create monthly video tutorials and “how-to” articles to educate and uplift visitors.</li>
                    <li className="mb-4">Form a global scroll saw community with active members from Nigeria, USA, Canada, UK, and Australia and more.</li>
                    <li>Host quarterly pattern challenges and community showcases.</li>
                  </ul>
                </section>
  </div>
}
