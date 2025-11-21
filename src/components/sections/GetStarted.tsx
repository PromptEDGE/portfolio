import Cloud from '../../assets/get-started/cloud.svg';
import GetStartedBlock from '../../assets/get-started/get-started-block.svg';
import GetStartedPic from '../../assets/get-started/get-started-pic.svg';
import GiftIcon from '../../assets/get-started/gift-icon.svg';

const GetStartedBlockData = () => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-start bg-[#FDF0E9] md:w-[1170px] md:h-[336px] w-[550px] rounded-md ml-[90px] mr-[90px] gap-4">
            <div className="flex flex-col items-start justify-start gap-6">
                <div className="relative w-[148px] h-[148px]">
                    <img src={GiftIcon} alt="gift icon" className="absolute -top-20 left-20" />
                </div>
                <div className="flex flex-col items-start gap-2 ml-20">
                    <h2 className="w-[[126px] h-8 font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58] -mt-20">Get Started</h2>
                    <h3 className="w-[248px] h-16 font-['Epilogue'] font-bold tet-[24px] leading-8 tracking-[0px] text-[#391400]">We Help Companies<br /> Move Faster</h3>
                    <button className="w-[154px] h-12 bg-[#EF6D58] font-['Epilogue'] font-black leading-8 tracking-[0px] text-center text-white rounded-md hover:text-gray-400 hover:bg-[#EF8E69] uppercase mt-5">Contact Us</button>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img src={GetStartedBlock} alt="get started block" className="object-cover md:mt-[50px]" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="relative">
                    <img src={Cloud} alt="cloud" className="mt-10" />
                    <img src={GetStartedPic} alt="get started pic" className="absolute md:top-[-61px] top-[-115px] -right-2.5 w-[239px] h-[396px]" />
                </div>
            </div>
        </div>
    );
}




const GetStarted = () => {
    return (
        <section className="min-h-screen w-full bg-[#28293E] flex flex-col items-center justify-center py-5 px-[135px]">
            <GetStartedBlockData />
        </section>
    );
}

export default GetStarted;