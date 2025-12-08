import AboutPic from '../../assets/about/about-pic.svg';
import AiLogo from '../../assets/about/ai-logo.svg';
import MentorLogo from '../../assets/about/mentor-logo.svg';
import ResearchLogo from '../../assets/about/research-logo.svg';
import VideoCover from '../../assets/about/video-reel.svg';
import PlayButton from '../../assets/about/play-button.svg';

const AboutMe = () => {
    return(
        // about me row container - image + text (column on mobile)
        <div className="flex flex-col md:flex-row items-center md:items-center md:gap-20 gap-6 mx-[38px] md:mx-[135px] my-12 md:my-[69px]">

            {/* about image */}
            <img src={AboutPic} alt="About Photo" className="w-full max-w-[640px] md:w-[550px] md:h-[770px] h-auto object-cover rounded-lg"/>

            {/* right text (bottom on mobile) column container */}
            <div className="flex flex-col justify-start md:justify-start items-center md:items-start gap-3 md:gap-4 md:pt-[210px] w-full">

                <h2 className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58] text-center md:text-left">about</h2>

                <h3 className="font-['Epilogue'] font-extrabold text-[24px] md:text-[44px] leading-tight md:leading-16 tracking-[-1px] max-w-full md:max-w-[800px] md:mr-7 text-center md:text-left">I'm Michael <span className="whitespace-nowrap">Edekin</span></h3>

                <h4 className="font-['Epilogue'] font-normal text-[16px] md:text-[20px] leading-7 md:leading-8 tracking-[0px] text-center md:text-left">AI/ML Engineer</h4>

                <p className="font-['Epilogue'] font-normal text-[14px] md:text-[18px] leading-6 md:leading-8 tracking-[0px] max-w-full md:max-w-[470px] md:mr-7 text-center md:text-left">
                    Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
                </p>

                {/* how we work button */}
                <div className="flex justify-center md:justify-center bg-[#FF6A00] rounded-[40px] px-6 py-3 md:p-[19.5px] md:w-[154px] md:h-12 hover:bg-[#BE3300] mt-4 md:mt-0 md:mr-80">
                    <a href="#how" className="inline-block text-[#0B1226] uppercase font-['Epilogue'] font-extrabold text-[12px] md:text-[14px] leading-[100%] tracking-[0px] whitespace-nowrap text-center">how we work</a>
                </div>
            </div>
        </div>
    );
};

const MoreAboutMe = () => {
    return (
        // more about me table row container
        <div className="flex items-center gap-0 md:h-[744px] h-auto mx-[38px] md:mx-[135px] md:my-0"> 

            {/* first item column container */}
            <div className="flex flex-col items-center md:items-center gap-4 md:w-[800px] h-[280px] md:h-[744px] flex-1 border border-[#1F2030] border-solid rounded-tl-md rounded-bl-md pt-[60px] pb-[60px]">

                <img src={AiLogo} alt="AI/ML Logo" className="w-[50px] h-[50px] md:w-[85px] md:h-[85px]" />

                <h2 className="font-['Epilogue'] font-extrabold text-[16px] md:text-[36px] leading-tight md:leading-12 tracking-[0px] text-center md:text-left px-4">AI/ML Engineer</h2>

                <h3 className="max-w-[180px] font-['Epilogue'] font-normal text-[12px] md:text-[20px] text-center leading-5 md:leading-8 tracking-[0px]">Years of experience</h3>
            </div>

            {/* second item column container */}
            <div className="flex flex-col items-center gap-4 md:w-[800px] h-[280px] md:h-[744px] flex-1 border border-[#1F2030] border-solid border-x-0 pt-[60px] pb-[60px]">

                <img src={ResearchLogo} alt="Research Logo" className="w-[50px] h-[50px] md:w-[85px] md:h-[85px]" />

                <h2 className="font-['Epilogue'] font-extrabold text-[16px] md:text-[36px] leading-tight md:leading-1 tracking-[0px] mt-0 md:mt-6 text-center">Researcher</h2>

                <h3 className="max-w-[150px] font-['Epilogue'] font-normal text-[12px] md:text-[20px] text-center leading-5 md:leading-8 tracking-[0px]">Agency members</h3>
            </div>

            {/* third item column container */}
            <div className="flex flex-col items-center gap-2 md:gap-4 md:w-[800px] h-[280px] md:h-[744px] flex-1 border border-[#1F2030] border-solid rounded-tr-md rounded-br-md pt-10 md:pt-[60px] pb-10 md:pb-[60px]">

                <img src={MentorLogo} alt="Mentor Logo" className="w-[50px] h-[50px] md:w-[85px] md:h-[85px]" />

                <h2 className="font-['Epilogue'] font-extrabold text-[16px] md:text-[36px] text-center max-w-[120px] md:max-w-[139px] leading-tight md:leading-12 tracking-[0px]">Mentor</h2>

                <h3 className="max-w-40 md:max-w-[180px] font-['Epilogue'] font-normal text-[10px] md:text-[16px] leading-4 md:leading-[25px] text-center tracking-[0px] px-2">I genuinely care about people, and enjoy helping them work on their craft.</h3>

                <h2 className="font-['Epilogue'] font-normal text-[11px] md:text-[20px] leading-5 md:leading-[25px] text-center tracking-[0px]">Experiences I draw from:</h2>

                <h3 className="max-w-40 md:max-w-[180px] font-['Epilogue'] font-normal text-[10px] md:text-[16px] leading-4 md:leading-[25px] text-center tracking-[0px]">UX/UI, Product design, Freelancing</h3>
            </div>
        </div>
    );
};

const VideoReel = () => {
    return (
        // video reel row container (column on mobile)
        <div className="w-full flex flex-col md:flex-row items-start gap-8 md:gap-22 md:mx-[135px] py-12 md:pt-[110px] md:pb-[100px]">

            {/* video cover relative container */}
            <div className="flex flex-col items-center relative w-full md:w-auto md:basis-[40%]">
                <img
                    src={VideoCover}
                    alt="video reel cover"
                    className="w-full max-w-[320px] md:max-w-[680px] h-auto object-cover rounded-md"
                />
                <img
                    src={PlayButton}
                    alt="play button"
                    className="w-[60px] h-[60px] md:w-[148px] md:h-[148px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
            </div>

            {/* video reel text column container */}
            <div className="flex flex-col justify-center items-center md:items-start gap-4 flex-1 md:pt-26 mx-[38px] md:mx-0">
                <h2 className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] tracking-[3px] uppercase text-[#EF6D58]">
                    video reel
                </h2>
                <h3 className="font-['Epilogue'] font-extrabold text-[24px] md:text-[40px] leading-tight md:leading-12 md:w-[600px]">
                    Unlock The Greatest Value Possible
                </h3>
                <p className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-7 md:leading-8 max-w-full md:max-w-[470px] text-center md:text-left">
                    Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.
                </p>
            </div>
        </div>
    );
};


const About = () => {
    return (
        <section id="about" className="bg-white w-full overflow-hidden flex flex-col py-16 md:py-20 gap-12 md:gap-0">
            <AboutMe />
            <div className="mt-12 md:mt-0">
                <MoreAboutMe />
            </div>
            <div className="h-px bg-[#F3D1BF] md:mx-[135px] mx-[38px] mt-[75px] md:mt-[100px]"></div>
            <VideoReel />
        </section>
    );
};

export default About;