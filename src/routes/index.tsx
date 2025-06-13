import { createFileRoute } from "@tanstack/react-router";
import heading from "../assets/images/heading.jpg";
import scrollSawMan from "../assets/images/main-working-with-a-sroll-saw.png";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: IndexComponent,
});

function IndexComponent() {
	return (
		<div className="">
			<header
				className="h-[100vh] w-full bg-cover"
				style={{ backgroundImage: `url(${heading})` }}
			>
				<div className="w-full h-full bg-black/80">
					<div className="flex flex-col items-center pt-[10%] gap-14 md:gap-8">
						<h1 className="text-2xl md:text-6xl font-heading tracking-wider text-gray-300 w-[90%] md:w-[60%] text-center">
							Where Faith Meets Craft: Beautiful Hand-Drawn Scroll Saw Patterns
							for the World
						</h1>
						<p className="text-xl md:text-xl text-gray-300 w-[90%] md:w-[60%] tracking-wider text-center">
							Explore Rare, Hand-Drawn Word Art Patterns for Scroll Sawyers,
							Stay-at-Home Crafters, and DIY Enthusiasts in Nigeria, the USA,
							Canada, Australia, UK, and Beyond
						</p>
						<div className="flex flex-col md:flex-row gap-4 md:gap-10">
							<button
								className="bg-primary-500 font-semibold text-black px-6 py-2 rounded-md"
								type="button"
							>
								Join our Scroll Family
							</button>
							<button
								className="border-2 border-secondary-500 font-semibold px-6 py-2 rounded-md hover:bg-secondary-500 text-white"
								type="button"
							>
							  Download a free pattern	
							</button>
              <button
								className="border-2 border-primary-500 font-semibold px-6 py-2 rounded-md hover:bg-primary-500 text-white"
								type="button"
							>
							  Explore gallery	
							</button>
						</div>
					</div>
				</div>
			</header>
			<div className="grid grid-cols-2 mx-auto container mt-40 gap-10 mb-30">
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
        <Link to="/about" className="self-center px-6 py-2 w-[30%] bg-secondary-400 mt-8 rounded-md flex items-center gap-2 justify-center"type="button">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>
      <img src={scrollSawMan} className="h-[90%] w-full"alt='a man using a scroll saw' />
    </div>
		<section className="container mx-auto mt-40 mb-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="group p-16 rounded-lg transition-all duration-300 hover:bg-primary-500 hover:border-0 border-2 border-primary-200">
            <div className="flex items-center justify-center mb-8">
              {/* Eye/Vision Icon */}
                <svg 
                  className="w-12 h-12 text-primary-700" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="visionIconTitle"
                >
                  <title id="visionIconTitle">Vision Icon</title>
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Vision</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              To be the global home of faith-inspired, hand-drawn scroll saw patterns—reviving traditional craftsmanship and spreading messages of hope through art.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group p-8 rounded-lg transition-all duration-300 hover:bg-primary-500 hover:border-0 border-2 border-primary-200">
            <div className="flex items-center justify-center mb-8">
              {/* Target/Mission Icon */}
                <svg 
                  className="w-12 h-12 text-primary-700" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="missionIconTitle"
                >
                  <title id="missionIconTitle">Mission Icon</title>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              To provide scroll saw enthusiasts and multi-crafting communities around the world with inspirational, high-quality hand-drawn word art patterns, tutorials, and resources that empower creativity, encourage faith, and foster connection.
            </p>
          </div>
        </div>
      </section>
      <section className="container px-4 py-24 mx-auto">
        <h2 className="text-6xl font-heading text-center mb-20">Who do we serve</h2>      
        <ul className="grid grid-cols-3 list-disc">
          <li className="mb-4">Scroll Saw Artists</li>
          <li className="mb-4">CNC and Laser Cut Operators</li>
          <li className="mb-4">DIY Hobbyists</li>
          <li className="mb-4">Christian Crafters</li>
          <li className="mb-4">Stay-at-Home Mothers &amp; Fathers</li>
          <li className="mb-4">Stay-at-Home Grandmas &amp; Grandpas</li>
          <li className="mb-4">Coin Cutters</li>
          <li className="mb-4">Leatherworkers</li>
          <li className="mb-4">Paper Crafters</li>
          <li className="mb-4">Youth Craft Clubs</li>
          <li>Global Craft Lovers (Nigeria, USA, Canada, UK, Australia, etc.)</li>
        </ul>
      </section>
      
      <section className="container px-4 py-24 mx-auto" >
        <h2 className="text-6xl text-center font-heading mb-8">Craft with Faith. Create with Love.</h2>
        <div className="grid grid-cols-2 items-center py-10">
          <p className="text-lg self-center">Get free scroll saw patterns, global crafting inspiration, and helpful tutorials sent to your inbox once in  a month. Join crafters from Nigeria, the USA, Canada, UK, and Australia</p>
          <form>
            <div className="flex flex-col mb-8">
              <label htmlFor="name" className="mb-4">Name</label>
              <input type="text" className="py-2 px-4  bg-gray-300 rounded-md" id="name" /> 
            </div> 
            <div className="flex flex-col mb-10">
              <label htmlFor="name" className="mb-4">Email Address</label>
              <input type="text" className="py-2 px-4 bg-gray-300 rounded-md" id="name" /> 
            </div>
            <button className="p-2 bg-secondary-300 rounded-md cursor-pointer" type="button">Send Email</button>
          </form>
        </div>
      </section>
       
      
		</div>
	);
}
