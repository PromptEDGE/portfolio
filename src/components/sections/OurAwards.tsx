import AwAward from '../../assets/our-awards/aw-award.svg';
import CSSAward from '../../assets/our-awards/css-awards.svg';
import FWA from '../../assets/our-awards/fwa-awards.svg';
import KeyBoard from '../../assets/our-awards/keyboard.svg';
import SOFA from '../../assets/our-awards/sofa.svg';
import WorkMedia from '../../assets/our-awards/work-media.svg';

type Awards = {
    id: number;
    image: string;
    title: string;
    date: string;
    awardText: string;
    awardImage: string;
};

const awards: Awards[] = [
    {id: 1, image: SOFA, title: "SOFA", date: "25 Oct, 2021", awardText: "Awwwards", awardImage: AwAward},
    {id: 2, image: KeyBoard, title: "keyboard", date: "19 Oct, 2021", awardText: "CSS Design Awards", awardImage: CSSAward},
    {id: 3, image: WorkMedia, title: "Work Media", date: "07 Oct, 2021", awardText: "The FWA", awardImage: FWA}
];

const OurAwardsDataBlock = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-white py-12 px-6 md:px-16 lg:px-32 md:my-50 gap-0">
            <h3 className="font-['Epilogue'] font-extrabold text-[32px] md:text-[40px] leading-10 md:leading-12 text-center text-[#391400] mb-12 md:mb-16">
                Our Awards
            </h3>
            
            {awards.map((award, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 py-6 w-full border-t border-solid border-[#F3D1BF] ${index === awards.length - 1 ? 'border-b' : ''}`}>
                
                    {/* Project image + title */}
                        <div className="flex items-center gap-4 md:gap-6 md:flex-1">
                            <img src={award.image} alt={award.title} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                            <p className="font-['Epilogue'] font-normal text-[16px] md:text-[20px] text-[#391400]">{award.title}</p>
                        </div>

                        {/* Date */}
                        <div className="flex justify-center md:flex-1">
                            <p className="text-[14px] md:text-[16px] text-center text-[#391400]">{award.date}</p>
                        </div>

                        {/* Award text + logo */}
                        <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-0 md:flex-1 justify-end md:ml-0 ml-10">
                            <p className="text-[16px] md:text-[20px] text-[#391400]">{award.awardText}</p>
                            <img src={award.awardImage} alt="award logo" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                        </div>
                </div>
            ))}

            <div className="w-full flex justify-center items-center mt-8">
                <p className="font-['Epilogue'] font-normal text-[16px] text-[#391400] leading-8 tracking-[0px]">Want more awards?</p>

                <button className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-[#391400] ml-2 hover:text-[#FF6A00]">Explore now</button>
            </div>

        </section>
    );
};




const OurAwards = () => {
    return (
        <OurAwardsDataBlock />
    );
};

export default OurAwards;