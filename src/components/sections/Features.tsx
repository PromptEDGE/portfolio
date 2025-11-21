import FeaturePic from '../../assets/features/feature-pic.svg';
import Check from '../../assets/features/check.svg';
import Oval from '../../assets/features/oval.svg';
import Shape from '../../assets/features/shape.svg';

const NewLook = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-row items-start gap-6 md:gap-12 mx-[38px] md:mx-[135px] my-1">

                {/* left: text */}
                <div className="flex flex-col items-start gap-4 pt-[105px] flex-1">
                    <h2 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">
                        features
                    </h2>

                    <h3 className="font-['Epilogue'] font-extrabold text-[40px] lg:text-[56px] text-[#391400] leading-16 tracking-[-1px]">
                        Give Your Site <br />A New Look
                    </h3>

                    <p className="font-['Epilogue'] font-normal text-[20px] text-[#391400] leading-8 w-[470px]">
                        Service range including technical skills, design, business understanding.
                    </p>

                    <div className="flex flex-row gap-2 w-full">
                        <img src={Check} alt="check icon" className="w-5 h-5 lg:w-8 lg:h-8" />
                        <p className="font-['Epilogue'] text-[16px] text-[#391400A3] leading-8">
                            Range including technical skills
                        </p>
                    </div>

                    <div className="flex flex-row gap-2 w-full">
                        <img src={Check} alt="check icon" className="w-5 h-5 lg:w-8 lg:h-8" />
                        <p className="font-['Epilogue'] text-[16px] text-[#391400A3] leading-8">
                            Business understanding
                        </p>
                    </div>

                    <div className="flex flex-row gap-2 w-full">
                        <img src={Check} alt="check icon" className="w-5 h-5 lg:w-8 lg:h-8" />
                        <p className="font-['Epilogue'] text-[16px] text-[#391400A3] leading-8">
                            Partner on the long run
                        </p>
                    </div>
                </div>

                {/* right: image */}
                <img
                    src={FeaturePic}
                    alt="Feature Photo"
                    className="md:w-[528.7px] md:h-[550.27px] w-[200px] h-[200px] mt-[70px] md:mt-[105px]"
                />
            </div>
        </div>
    );
};

const MoreFeatures = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-start gap-4 mx-[90px] md:mx-[135px]">

            <div className="flex flex-col items-start gap-4 pt-[290px] w-full">
                <h2 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase w-[62px] h-8 text-[#EF6D58]">features</h2>
                <h3 className="font-['Epilogue'] font-normal text-[20px] text-[#391400] leading-8 tracking-[0px] w-[370px] h-[70]">Long run, and work as an extension of the merchant's team.</h3>
                <a href="#read more" className="w-[84px] h-8 font-['Epilogue'] font-normal text-[16px] text-[#391400] leading-8 tracking-[0px] hover:text-gray-400">Read More</a>
            </div>

            <div className="flex justify-center mt-[190px]">
                <div className="flex flex-col items-start gap-4 border border-solid border-[#F3D1BF] rounded-tl-md border-tr-[6px] rounded-bl-md w-[336px] h-[336px]">
                    <div className="relative top-[30px] left-10">
                        <img src={Oval} alt="Oval Image" className="w-20 h-20 object-cover" />
                        <img src={Shape} alt="Chart icon" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8" />
                    </div>
                    <p className="w-[154px] md:h-8 font-['Epilogue'] font-bold text-[24px] leading-8 tracking-[opx] mt-[30px] ml-10">Professional</p>
                    <p className="w-60 h-[70px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] ml-10">Full service range including technical skills, design.</p>
                </div>

                <div className="flex flex-col items-start gap-4 border border-solid border-[#F3D1BF] border-tr-[6px] border-br-[6px] w-[336px] h-[272px] mt-[65px]">
                    <p className="w-[156px] h-8 font-['Epilogue'] font-bold text-[24px] leading-8 tracking-[0px] mt-[60px] ml-10">Accessibility</p>
                    <p className="w-60 h-[70px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] ml-10">Business understanding, ability to put themselves.</p>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section className="bg-white flex-col w-full py-32 lg:py-10">
            <NewLook />
            <MoreFeatures />
        </section>
    );
};

export default Features;