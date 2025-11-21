import AboutPic from '../../assets/about/about-pic.svg';
import AiLogo from '../../assets/about/ai-logo.svg';
import MentorLogo from '../../assets/about/mentor-logo.svg';
import ResearchLogo from '../../assets/about/research-logo.svg';
import VideoCover from '../../assets/about/video-reel.svg';
import PlayButton from '../../assets/about/play-button.svg';

const AboutMe = () => {
    return(
        // photo + text about row section
        <div className="flex flex-row items-center md:gap-0 gap-22 md:mx-[135px] md:my-[69px] mx-[38px] mt-15">

            {/* image - left part */}
            <img src={AboutPic} alt="About Photo" className="md:w-[550px] md:h-[770px] w-[220px] h-[440px] object-cover"/>

            {/* right part about container */}
            <div className="flex flex-col justify-end md:items-end items-start md:gap-4 gap-2 md:pt-[210px] w-full">

                <h2 className="font-['Epilogue'] font-normal md:text-[16px] text-[12px] leading-8 tracking-[3px] uppercase w-[62px] h-8 text-[#EF6D58] mr-100">about</h2>

                <h3 className="font-['Epilogue'] font-extrabold md:text-[44px] text-[24px] leading-16 tracking-[-1px] max-w-[800px] md:mr-7 w-full md:w-1/2 -mr-3">I'm Michael <span className="whitespace nowrap">Edekin</span></h3>

                <h4 className="w-36 h-8 font-['Epilogue'] font-normal md:text-[20px] text-[15px] leading-8 tracking-[0px] mr-80">AI/ML Engineer</h4>

                <p className="font-['Epilogue'] font-normal md:text-[18px] text-[10px] w-1/2 md:leading-8 -tracking-[0px] md:mr-7 mr-57">
                    Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
                </p>

                <div className="flex justify-center bg-[#FF6A00] md:rounded-[40px] md:p-[19.5px] p-3.5 md:w-[154px] md:pb-0 pb-[18px] md:h-12 w-[100px] mt-5 md:mt-0 rounded-[20px] h-4 hover:bg-[#BE3300] mr-80">
                        <a href="#how" className="inline-block text-[#0B1226] w-[155px] h-3.5 uppercase font-['Epilogue'] font-extrabold md:text-[14px] text-[10px] leading-[100%] tracking-[0px] whitespace-nowrap text-center mx-auto ">how we work</a>
                </div>
            </div>
        </div>
    );
};

const MoreAboutMe = () => {
    return (
        // more about me table row container
        <div className="flex  items-center gap-0 md:h-[744px] h-[480px] md:mx-[135px] mx-[38px]"> 

            {/* first table item column container */}   
            <div className="flex flex-col items-center gap-4 md:w-[800px] h-[744px] w-[180px] border border-[#1F2030] border-solid rounded-tl-md rounded-bl-md pt-[60px]">
                <img src={AiLogo} alt="AI/ML Logo" className="md:w-[85px] md:h-[85px] w-[45px] h-[45px]" />
                <h2 className="font-['Epilogue'] font-extrabold md:text-[36px] text-[18px] h-12 leading-12 tracking-[0px]">AI/ML Engineer</h2>
                <h3 className="w-[198px] h-8 font-['Epilogue'] font-normal md:text-[20px] text-[14px] text-center leading-8 tracking-[0px] ">Years of experience</h3>
            </div>

            {/* second table item column container */}
            <div className="flex flex-col items-center gap-4 md:w-[800px] h-[744px] w-[180px] border border-[#1F2030] border-solid border-x-0 pt-[60px]">
                <img src={ResearchLogo} alt="Research Logo" className="md:w-[85px] md:h-[85px] w-[45px] h-[45px]" />
                <h2 className="font-['Epilogue'] font-extrabold md:text-[36px] text-[18px] h-8 leading-1 tracking-[0px] mt-6">Researcher</h2>
                <h3 className="w-[170px] h-8 font-['Epilogue'] font-normal md:text-[20px] text-[14px] text-center leading-8 tracking-[0px]">Agency members</h3>
            </div>

            <div className="flex flex-col items-center gap-4 md:w-[800px] h-[744px] w-[180px] border border-[#1F2030] border-solid rounded-tr-md rounded-br-md pt-[60px]">
                <img src={MentorLogo} alt="Mentor Logo" className="md:w-[85px] md:h-[85px] w-[45px] h-[45px]" />
                <h2 className="font-['Epilogue'] font-extrabold md:text-[36px] text-[18px] text-center w-[139px] h-12 leading-12 tracking-[0px]">Mentor</h2>
                <h3 className="w-[198px] font-['Epilogue'] font-normal md:text-[16px] text-[14px] leading-[25px] text-center tracking-[0px] ">I genuinely care about people, and enjoy helping them work on their craft.</h3>
                <h2 className="h-[25px] font-['Epilogue'] font-normal md:text-[20px] text-[15px] leading-[25px] text-center tracking-[0px] ">Experiences I draw from:</h2>
                <h3 className="w-[198px] h-8 font-['Epilogue'] font-normal md:text-[16px] text-[14px] leading-[25px] text-center tracking-[0px] ">UX/UI, Product design, Freelancing</h3>
            </div>
        </div>
    );
};

const VideoReel = () => {
    return (
        // video reel row container
        <div className="w-full flex items-start gap-6 md:gap-24 md:mx-[135px] mx-[38px] md:pt-[110px] md:pb-[100px]">
            {/* video cover + play button positioning container */}
            <div className="flex flex-col justify-start items-center relative">
                <img src={VideoCover} alt="video reel cover" className="md:w-[1680px] md:h-[368px] w-[200px] h-[100px] object-cover md:rounded-md rounded-md" />
                <img
                    src={PlayButton}
                    alt="play button"
                    className="max-w-[300px] md:w-[148px] md:h-[148px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
            </div>

            {/* right content column container */}
            <div className="w-full flex flex-col justify-center items-start gap-4 md:pt-18">

                <h2 className="font-['Epilogue'] font-normal text-[12px] md:text-[16px] leading-8 tracking-[3px] uppercase h-8 text-[#EF6D58]">video reel</h2>
                <h3 className="font-['Epilogue'] font-extrabold text-[20px] md:text-[40px] md:leading-12 tracking-[-0px] md:w-[469px]">Unlock The Greatest <br />Value Possible</h3>
                <p className="font-['Epilogue'] font-normal text-[12px] md:text-[16px] leading-8 -tracking-[0px] md:w-[470px] h-[70px]">
                    Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.
                </p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="bg-white w-full min-h-screen overflow-hidden flex flex-col md:gap-0 gap-[180px]">
            <AboutMe />
            <MoreAboutMe />
            <div className="md:w-[1425px] h-px bg-[#F3D1BF] md:mx-auto mx-[38px] mt-[75px] md:mt-[100px]"></div>
            <VideoReel />
        </section>
    );
};

export default About;