import ServicePic from '../../assets/service/service-pic.svg';
import ServiceSmallPic from '../../assets/service/service-small-pic.svg';
import Oval from '../../assets/service/oval.svg';
import DesignIcon from '../../assets/service/design-icon.svg';
import DevIcon from '../../assets/service/dev-icon.svg';
import MarketingIcon from '../../assets/service/marketing-icon.svg';

const OurService = () => {
    return (
        <div className="flex justify-start items-center gap-4 my-[400px] w-full mt-[200px]">
            <div className="flex flex-row justify-start items-center">
                <img src={ServicePic} alt="Service Picture" className="w-[570.76px] h-[570px]" />
            </div>
            <div className="flex flex-col items-start justify-start gap-8 ml-[235px] mt-[-50px]">
                <h2 className="w-[78px] h-8 font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] uppercase text-[#EF6D58] ">service</h2>

                <h3 className="w-[563px] h-32 font-['Epilogue'] font-extrabold text-[56px] leading-16 tracking-[-1px] text-[#391400]">Making Complex Digital Products</h3>
                <h4 className="w-[470px] h-[63px] font-['Epilogue'] font-normal text-[20px] leading-8 tracking-[0px] text-[#391400]">Agency provides a full service range including technical skills, design, business.</h4>

                <div className="flex justify-start items-center gap-4">
                    <div className="flex justify-start">
                        <img src={ServiceSmallPic} alt="Service Small Picture" className="w-16 h-16" />
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2">
                        <p className="w-[386px] h-12 font-['Epilogue'] font-normal text-[14px] leading-6 tracking-[0px] text-[#391400A3]">
                            "Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."
                        </p>
                        <p className="w-[126px] 32px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-[#391400]">Jenny Murtaugh</p>
                    </div>
                </div>
                <button className="bg-white w-[138px] h-12 text-[14px] leading-[100%] font-['Epilogue'] font-extrabold uppercase text-[#391400] text-center shadow-[1px_1px_1px_1px_rgba(0,0,1,0.3)] rounded-md hover:translate-x-[-3px] hover:translate-y-[-3px]">explore</button>
            </div>
            
        </div>
    );
};


const MoreService = () => {
    return (
        <div className="flex flex-col justify-start items-start gap-4 mx-[135px] my-[135px]">
            <div className="flex flex-col justify-start items-start gap-4">
                <h2 className="w-[78px] h-8 font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] uppercase text-[#EF6D58]">Service</h2>
                <h3 className="w-[336] h-[96] font-['Epilogue'] font-extrabold text-[40px] leading-[48px] tracking-[-1px] text-[#391400]">How Our Agency<br /> Can Help</h3>
            </div> 

            <div className="flex justify-start items-center">

                <div className="flex flex-col items-start justify-start gap-8 border border-solid border-[#F3D1BF] rounded-tl-md border rounded-bl-md w-[391px] h-[400px]">
                    <div className="relative top-[40px] left-10">
                        <img src={Oval} alt="Oval Icon" className="w-20 h-20" />
                        <img src={DesignIcon} alt="Design Icon" className="absolute h-8 w-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h2 className="w-[83px] h-8 font-['Epilogue'] font-bold font-bold text-[24px] leading-8 tracking-[0px] ml-10 mt-10">Design</h2>
                    <p className="w-[294px] h-[70px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] ml-10 text-[#391400A3]">Agency provides a full service range including technical skills, design.</p>

                    <a href="#learn more" className="w-[89px] h-8 font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-[#391400] hover:text-gray-400 ml-10">Learn More</a>
                </div>

                <div className="flex flex-col items-start justify-start gap-8 border border-solid border-[#F3D1BF] rounded-tl-md border rounded-bl-md w-[391px] h-[400px]">
                    <div className="relative top-[40px] left-10">
                        <img src={Oval} alt="Oval Icon" className="w-20 h-20" />
                        <img src={DevIcon} alt="Development Icon" className="absolute h-8 w-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h2 className="w-[83px] h-8 font-['Epilogue'] font-bold font-bold text-[24px] leading-8 tracking-[0px] ml-10 mt-10">Development</h2>
                    <p className="w-[294px] h-[70px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] ml-10 text-[#391400A3]">Full service range including technical skills, design, business.</p>

                    <a href="#learn more" className="w-[89px] h-8 font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-[#391400] hover:text-gray-400 ml-10 w-full">Discover More</a>
                </div>

                <div className="flex flex-col items-start justify-start gap-8 border border-solid border-[#F3D1BF] rounded-tl-md border rounded-bl-md w-[391px] h-[400px]">
                    <div className="relative top-[40px] left-10">
                        <img src={Oval} alt="Oval Icon" className="w-20 h-20" />
                        <img src={MarketingIcon} alt="Marketing Icon" className="absolute h-8 w-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h2 className="w-[83px] h-8 font-['Epilogue'] font-bold font-bold text-[24px] leading-8 tracking-[0px] ml-10 mt-10">Marketing</h2>
                    <p className="w-[294px] h-[70px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] ml-10 text-[#391400A3]">Technical skills, design, business understanding, ability.</p>

                    <a href="#learn more" className="w-[89px] h-8 w-full font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-[#391400] hover:text-gray-400 ml-10">Explore Now</a>
                </div>
            </div>
        </div>
    );
};


const Service = () => {
return (
    <section id="service" className="bg-white w-full min-h-screen overflow-hidden flex flex-col gap-12">
        <OurService />
        <MoreService />
    </section>
)
}

export default Service;