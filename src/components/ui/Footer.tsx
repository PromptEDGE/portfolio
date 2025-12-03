import Oval from '../../assets/footer/oval.svg';
import FBIcon from '../../assets/footer/fb-icon.svg';
import IGIcon from '../../assets/footer/ig-icon.svg';
import XIcon from '../../assets/footer/x-icon.svg';

const FooterDataBlock = () => {
    return (
        /// footer column section container
        <section className="flex flex-col justify-center items-center pb-8 md:pb-[60px] px-[38px] md:mx-[135px]">

            {/* agency links row container */}
            <div className="flex flex-row justify-between items-start gap-6 md:gap-24 w-full">

                {/* agency text link */}
                <div className="flex flex-col justify-start items-start">

                    <a href="#hero">

                        <h4 className="font-['Epilogue'] font-bold text-[16px] md:text-[24px] leading-6 md:leading-8 tracking-[0px] text-[#391400]">Agency</h4>
                    </a>
                </div>

                {/* menu column container */}
                <div className="flex flex-col justify-start items-start gap-1">

                    <h5 className="font-['Epilogue'] font-normal text-[10px] md:text-[16px] leading-5 md:leading-8 tracking-[2px] md:tracking-[3px] text-[#EF6D58] uppercase mb-1">menu</h5>

                    <a href="#about" className="font-['Epilogue'] font-normal text-[11px] md:text-[16px] leading-5 md:leading-8 tracking-[0px] text-black hover:text-[#EA5C15]">About</a>

                    <a href="#service" className="font-['Epilogue'] font-normal text-[11px] md:text-[16px] leading-5 md:leading-8 tracking-[0px] text-black hover:text-[#EA5C15]">Services</a>

                    <a href="#blog" className="font-['Epilogue'] font-normal text-[11px] md:text-[16px] leading-5 md:leading-8 tracking-[0px] text-black hover:text-[#EA5C15]">Blog</a>

                    <a href="#contact" className="font-['Epilogue'] font-normal text-[11px] md:text-[16px] leading-5 md:leading-8 tracking-[0px] text-black hover:text-[#EA5C15]">Contact</a>
                </div>


                {/* service  column container */}
                <div className="flex flex-col justify-start items-start gap-1">

                    <h5 className="font-['Epilogue'] font-normal text-[10px] md:text-[16px] leading-5 md:leading-8 tracking-[2px] md:tracking-[3px] text-[#EF6D58] uppercase mb-1">Service</h5>

                    <a href="#design" className="font-['Epilogue'] font-normal text-[11px] md:text-[16px] leading-5 md:leading-8 tracking-[0px] text-black  hover:text-[#EA5C15]">Design</a>

                    <a href="#development" className="font-['Epilogue'] font-normal text-[11px] md:text-[16px] leading-5 md:leading-8 tracking-[0px] text-black hover:text-[#EA5C15]">Development</a>

                    <a href="#marketing" className="font-['Epilogue'] font-normal text-[11px] md:text-[16px] leading-5 md:leading-8 tracking-[0px] text-black hover:text-[#EA5C15]">Marketing</a>

                    <a href="#more" className="font-['Epilogue'] font-normal text-[11px] md:text-[16px] leading-5 md:leading-8 tracking-[0px] text-black hover:text-[#EA5C15]">See More</a>
                </div>

                {/* social media row container */}
                <div className="flex justify-center items-end gap-2 md:gap-4">
                
                {/* facebook link */}
                <div className="relative w-10 h-10 md:w-auto md:h-auto">

                    <a href="facebook.com">

                        <img src={Oval} alt="oval" className="object-cover w-full h-full" />

                        <img src={FBIcon} alt="facebook icon" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-auto md:h-auto" />
                    </a>
                </div>

                {/* x link */}
                <div className="relative w-10 h-10 md:w-auto md:h-auto">

                    <a href="facebook.com">

                        <img src={Oval} alt="oval" className="object-cover w-full h-full" />

                        <img src={XIcon} alt="twitter icon" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-auto md:h-auto" />
                    </a>
                </div>

                {/* instagram link */}
                <div className="relative w-10 h-10 md:w-auto md:h-auto">

                    <a href="facebook.com">

                        <img src={Oval} alt="oval" className="object-cover w-full h-full" />

                        <img src={IGIcon} alt="instagram icon" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-auto md:h-auto" />
                    </a>
                </div>
                </div>
            </div>

            {/* horizontal  rule */}
            <hr className="w-full md:w-full md:mx-[135px] mx-[38px] h-px border-0 mt-6 md:mt-20 bg-[#F3D1BF]" />

            {/* copyright texts row container */}
            <div className="flex flex-row justify-between md:justify-evenly items-center gap-2 md:gap-62 mt-4 md:mt-20 w-full">

                <a>
                    <p className="flex justify-start items-center font-['Epilogue'] font-normal text-[9px] md:text-[16px] leading-4 md:leading-8 tracking-[0px] text-[#391400A3] whitespace-nowrap">Copyright © 2022 Laaqiq. All Rights Reserved.</p>
                </a>

                <a>
                    <p className="flex justify-center items-center font-['Epilogue'] font-normal text-[9px] md:text-[16px] leading-4 md:leading-8 tracking-[0px] text-left md:text-right text-[#391400]  hover:text-[#EA5C15]">Terms of Use</p>
                </a>

                <a>
                    <p className="flex justify-end items-center font-['Epilogue'] font-normal text-[9px] md:text-[16px] leading-4 md:leading-8 tracking-[0px] text-left md:text-right text-[#391400] hover:text-[#EA5C15]">Privacy Policy</p>
                </a>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <FooterDataBlock />       
    );
};

export default Footer;