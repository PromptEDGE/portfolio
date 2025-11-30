import HeroProfile from '../../assets/hero/hero-profile.svg';
import Header from '../ui/Header';

const HeroDataBlock = () => {
  return  (
    <section id="hero" className="bg-[#05226E] w-full min-h-screen overflow-hidden pb-0">
      <Header />

      {/* desktop content */}
      <div className="max-w-[1440px] w-full h-auto lg:h-[800px] mx-auto py-12 lg:py-20 pb-20 lg:pb-0 relative flex items-center justify-center">
        
        {/* Desktop Image */}
        <div className="hidden lg:block absolute left-[-95px] top-[-110px] w-1/2 h-1/2 pointer-events-none">
          <img
            src={HeroProfile}
            alt="hero profile"
            className="absolute object-contain top-32 translate-x-12"
          />
        </div>

        {/* desktop heading */}
        <div className="w-full gap-16 md:gap-16 flex flex-col items-center justify-center md:mt-0 mt-40 text-center relative z-10">
          <h1
            className="font-['Epilogue'] font-black text-white leading-tight lg:leading-[1.2] text-center mx-auto 
                       text-[32px] sm:text-[40px] md:text-[50px] lg:text-[72px] 
                       w-full lg:w-[1203px] px-2"
          >
            We're Here To Help You Build<br /> Your Dream{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 m-auto w-32 h-2.5 sm:w-[200px] sm:h-3.5 lg:w-[285px] lg:h-[18px] bg-[#EA5C15] top-[22px] sm:top-7 lg:top-[38px] -left-1"></span>
              <span className="relative z-10">Project</span>
            </span>
          </h1>

          <p
            className="text-[16px] sm:text-[18px] lg:text-[20px] leading-7 lg:leading-8 text-gray-200 
                        max-w-[90%] sm:max-w-[600px] lg:max-w-[920px] mx-auto"
          >
            Agency provides a full service range including technical skills,{" "}
            <br className="hidden lg:block" />
            design, business understanding.
          </p>
            <a
              href="#how"
              className="inline-block text-[#0B1226] uppercase font-['Epilogue'] font-black 
                         text-[12px] sm:text-[13px] lg:text-[14px] text-center mx-auto bg-[#FF6A00] hover:bg-[#BE3300] rounded-full p-4 w-[140px] lg:w-[154px] h-12"
            >
              how we work
            </a>
        </div>
      </div>
    </section>

  );
};

const Hero = () => {
  return (
    <HeroDataBlock />
      );
};

export default Hero;
