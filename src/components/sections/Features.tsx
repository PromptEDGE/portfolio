import FeaturePic from '../../assets/features/feature-pic.svg';
import Check from '../../assets/features/check.svg';
import Oval from '../../assets/features/oval.svg';
import Shape from '../../assets/features/shape.svg';

const NewLook = () => (
    // new look  + feature pic row container
    <div className="w-full flex justify-center">
        {/* new look heading column */}
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 md:mx-[135px] mx-[38px] my-1">

            {/* left: text */}
            <div className="flex flex-col md:items-start items-center gap-4 pt-12 md:pt-[105px] flex-1">

                <h2 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58] md:text-left text-center">
                    features
                </h2>

                <h3 className="font-['Epilogue'] font-extrabold text-[32px] md:text-[40px] lg:text-[56px] text-[#391400] leading-tight tracking-[-1px]">
                    Give Your Site <br />A New Look
                </h3>

                <p className="font-['Epilogue'] font-normal text-[16px] md:text-[20px] text-[#391400] leading-8 max-w-[90vw] md:max-w-[470px]">
                    Service range including technical skills, design, business understanding.
                </p>

                <div className="flex flex-row gap-2 w-full">
                    <img src={Check} alt="check icon" className="w-5 h-5 md:w-8 md:h-8" />
                    <p className="font-['Epilogue'] text-[16px] text-[#391400A3] leading-8">
                        Range including technical skills
                    </p>
                </div>

                <div className="flex flex-row gap-2 w-full">
                    <img src={Check} alt="check icon" className="w-5 h-5 md:w-8 md:h-8" />
                    <p className="font-['Epilogue'] text-[16px] text-[#391400A3] leading-8">
                        Business understanding
                    </p>
                </div>

                <div className="flex flex-row gap-2 w-full">
                    <img src={Check} alt="check icon" className="w-5 h-5 md:w-8 md:h-8" />
                    <p className="font-['Epilogue'] text-[16px] text-[#391400A3] leading-8">
                        Partner on the long run
                    </p>
                </div>
            </div>
            {/* right: image hidden on mobile */}
            <div className="flex justify-center items-center w-full md:w-auto">
                <img
                    src={FeaturePic}
                    alt="Feature Photo"
                    className="hidden md:block w-[200px] h-[200px] md:w-[528.7px] md:h-[550.27px] mt-10 md:mt-5 rounded-md mx-auto md:mx-0"
                />
            </div>
        </div>
    </div>
);


const MoreFeatures = () => (
    // feature row - text + image (column on mobile)
    <div className="flex flex-col lg:flex-row lg:justify-start gap-8 md:mx-[135px] mx-[38px]">

        {/* left side heading */}
        <div className="flex flex-col justify-center md:items-start items-center gap-4 pt-20 md:pt-[200px] md:w-full mx-[38px]">

            <h2 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase w-[62px] h-8 text-[#EF6D58]">features</h2>

            <h3 className="font-['Epilogue'] font-normal text-[20px] md:text-[24px] text-[#391400] leading-8 tracking-[0px] max-w-[90vw] md:max-w-[370px] text-center md:text-left">Long run, and work as an extension of the merchant's team.</h3>

            <a href="#read more" className="w-[84px] h-8 font-['Epilogue'] font-normal text-[16px] text-[#391400] leading-8 tracking-[0px] hover:text-gray-400">Read More</a>
        </div>

        {/* right image feature cards column (mobile) / row (desktop) container*/}
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-[190px] md:mx-0 mx-[38px] md:w-full w-auto">

            {/* first card column containers */}
            <div className="flex flex-col items-start gap-4 border border-solid border-[#F3D1BF] md:rounded-tl-md md:rounded-tr-none md:rounded-br-none md:rounded-bl-md rounded-md w-full md:w-[336px] h-[336px] bg-white shadow-md">

                {/* relative image container*/}
                <div className="relative top-8 left-10">

                    <img src={Oval} alt="Oval Image" className="w-20 h-20 object-cover" />

                    <img src={Shape} alt="Chart icon" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8" />
                </div>

                <p className="w-[154px] md:h-8 font-['Epilogue'] font-bold text-[24px] leading-8 mt-8 ml-10">Professional</p>

                <p className="w-60 h-[70px] font-['Epilogue'] font-normal text-[16px] leading-8 ml-10">Full service range including technical skills, design.</p>
            </div>

            {/* second card column containers */}
            <div className="flex flex-col items-start gap-4 border border-solid md:border-l-0  border-[#F3D1BF] md:rounded-br-md md:rounded-tl-none md:rounded-bl-none rounded-md w-full md:w-[336px] h-[272px] mt-8 md:mt-[63px] bg-white shadow-md">

                {/* relative image container*/}
                <div className="relative top-8 left-10">

                    <img src={Oval} alt="Oval Image" className="w-20 h-20 object-cover" />

                    <img src={Shape} alt="Chart icon" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8" />
                </div>
                
                <p className="w-[156px] h-8 font-['Epilogue'] font-bold text-[24px] leading-8 mt-8 ml-10">Accessibility</p>

                <p className="w-60 h-[70px] font-['Epilogue'] font-normal text-[16px] leading-8 ml-10">Business understanding, ability to put themselves.</p>
            </div>
        </div>
    </div>
);


const Features = () => (
    <section className="bg-white flex flex-col w-full py-8">
        <NewLook />
        <MoreFeatures />
    </section>
);

export default Features;