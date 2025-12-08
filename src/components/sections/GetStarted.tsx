import Cloud from '../../assets/get-started/cloud.svg';
import GetStartedBlock from '../../assets/get-started/get-started-block.svg';
import GetStartedPic from '../../assets/get-started/get-started-pic.svg';
import GiftIcon from '../../assets/get-started/gift-icon.svg';

const GetStartedBlockData = () => {
    return (
        // row container
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center bg-[#FDF0E9] w-full mx-[38px] max-w-[1070px] md:mx-[335px] rounded-md px-6 py-8 md:px-12 md:py-0 gap-6 md:gap-4">

            {/* gift icon + heading column container */}
            <div className="flex flex-col items-center md:items-start justify-start md:gap-6 w-full md:w-auto">

                {/* gift icon relative container */}
                <div className="hidden md:block relative w-[148px] h-[148px]">

                    <img src={GiftIcon} alt="gift icon" className="absolute -top-20 left-20" />

                </div>

                {/* heading column container */}
                <div className="flex flex-col items-center md:items-start md:ml-20">

                    <h2 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58] md:-mt-20">Get Started</h2>

                    <h3 className="font-['Epilogue'] font-bold text-[20px] md:text-[24px] leading-8 tracking-[0px] text-center md:text-left text-[#391400] max-w-[280px]">We Help Companies Move Faster</h3>

                    <button className="w-[154px] h-12 bg-[#EF6D58] font-['Epilogue'] font-black text-[14px] leading-8 tracking-[0px] text-center text-white rounded-md hover:bg-[#FF6A00] uppercase mt-2">Contact Us</button>
                </div>
            </div>

            {/* center image container */}
            <div className="hidden md:flex flex-col justify-center items-center">
                <img src={GetStartedBlock} alt="get started block" className="object-cover mt-[50px]" />
            </div>

            {/* cloud + image relative container */}
            <div className="hidden md:flex flex-col justify-center items-center">

                <div className="relative">

                    <img src={Cloud} alt="cloud" className="mt-10" />

                    <img src={GetStartedPic} alt="get started photo" className="absolute top-[-22px] -right-2.5 w-[236px] h-[324px]" />
                </div>
            </div>
        </div>
    );
}




const GetStarted = () => {
    return (
        <section className="w-full bg-[#28293E] flex flex-col items-center justify-center py-20 md:py-24 px-4 md:px-8">
            <GetStartedBlockData />
        </section>
    );
}

export default GetStarted;