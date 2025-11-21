import Oval from '../../assets/footer/oval.svg';
import FBIcon from '../../assets/footer/fb-icon.svg';
import IGIcon from '../../assets/footer/ig-icon.svg';
import XIcon from '../../assets/footer/x-icon.svg';

const FooterDataBlock = () => {
    return (
        <section className="flex flex-col justify-center items-center pb-[60px] mx-[135px]">

            {/* footer first part row container */}
            <div className="flex justify-between items-start gap-[305px]">
            {/* first column container */}
            <div className="flex flex-col justify-start items-start">
                <h4 className="font-['Epilogue'] font-bold text-[24px] leading-8 tracking-[0px] text-[#391400]">Agency</h4>
            </div>

            {/* second column container */}
            <div className="flex flex-col justify-start items-start">
                <h5 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] text-[#EF6D58] uppercase">menu</h5>
                <a href="#about" className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-black">About</a>
                <a href="#service" className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-black">Services</a>
                <a href="#blog" className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-black">Blog</a>
                <a href="#contact" className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-black">Contact</a>
            </div>

            {/* third column container */}
            <div className="flex flex-col justify-start items-start">
                <h5 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] text-[#EF6D58] uppercase">Service</h5>

                <a href="#design" className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-black">Design</a>
                <a href="#development" className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-black">Development</a>
                <a href="#marketing" className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-black">Marketing</a>
                <a href="#more" className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-black">See More</a>
            </div>

            {/* last part row container */}
            <div className="flex justify-center items-end gap-4">
               {/* facebook link */}
                <div className="relative">
                    <a href="facebook.com">
                        <img src={Oval} alt="oval" className="object-cover" />
                        <img src={FBIcon} alt="facebook icon" className="absolute top-[15px] left-5" />
                    </a>
                </div>

                {/* x link */}
                <div className="relative">
                    <a href="facebook.com">
                        <img src={Oval} alt="oval" className="object-cover" />
                        <img src={XIcon} alt="twitter icon" className="absolute top-[17px] left-[15px]" />
                    </a>
                </div>

                {/* instagram link */}
                <div className="relative">
                    <a href="facebook.com">
                        <img src={Oval} alt="oval" className="object-cover" />
                        <img src={IGIcon} alt="instagram icon" className="absolute top-[15px] left-[17px]" />
                    </a>
                </div>
            </div> 
            </div>

            <hr className="w-[1370px] h-px border-0 mt-20 bg-[#F3D1BF]" />

            {/* bottom footer content row container */}
            <div className="flex justify-evenly items-center gap-[400px] mt-20">
                <p className="flex justify-start items-center font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-[#391400A3]">Copyright © 2022 Laaqiq. All Rights Reserved.</p>

                <p className="flex justify-center items-center font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-right text-[#391400">Terms of Use</p> 

                <p className="flex justify-end items-center font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-right text-[#391400">Privacy Policy</p> 
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