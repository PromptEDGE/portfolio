import Hero from './components/sections/Hero.tsx';
import About from './components/sections/About.tsx';
import Features from './components/sections/Features.tsx';
import Service from './components/sections/Service.tsx';
import Work from './components/sections/Work.tsx';
import GetStarted from './components/sections/GetStarted.tsx';
import Events from './components/sections/Events.tsx';
import OurTeam from './components/sections/OurTeam.tsx';
import Testimonial from './components/sections/Testimonial.tsx';
import Pricing from './components/sections/Pricing.tsx';
import FAQ from './components/sections/FAQ.tsx';
import OurAwards from './components/sections/OurAwards.tsx';
import OurBlog from './components/sections/OurBlog.tsx';
import NewsLetter from './components/sections/NewsLetter.tsx';
import GetInTouch from './components/sections/GetInTouch.tsx';
import ContactUs from './components/sections/ContactUs.tsx';
import Footer from './components/ui/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <About />
      <Features />
      <Service />
      <Work />
      <GetStarted />
      <Events />
      <OurTeam />
      <Testimonial />
      <Pricing />
      <FAQ />
      <OurAwards />
      <OurBlog />
      <NewsLetter />
      <GetInTouch />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;