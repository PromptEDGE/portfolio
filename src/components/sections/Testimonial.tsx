import { useState } from 'react';
import Star from '../../assets/testimonials/star.svg';
import Photo1 from '../../assets/testimonials/photo-1.svg';
import Photo2 from '../../assets/testimonials/photo-2.svg';
import Photo3 from '../../assets/testimonials/photo-3.svg';
import Photo4 from '../../assets/testimonials/photo-4.svg';

type Testimonials = {
    id: number;
    star: string;
    text: string;
    image: string;
    name: string;
    company: string;
};

const testimonials: Testimonials[] = [
    {
        id: 1,
        star: Star,
        text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
        image: Photo1,
        name: "Alan Marti",
        company: "Meta Inc."
    },
    {
        id: 2,
        star: Star,
        text: "Provide your business with a variety of digital solutions to promote your product or service online.",
        image: Photo2,
        name: "Richardo Kann",
        company: "Photogram"
    },
    {
        id: 3,
        star: Star,
        text: "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
        image: Photo3,
        name: "Graham Griffiths",
        company: "Twitor"
    },
    {
        id: 4,
        star: Star,
        text: "Promote your product or service online and help you hit your marketing goals and grow your business.",
        image: Photo4,
        name: "Maria Trofimova",
        company: "Whochat"
    }
];

const cardStyles: Record<number, string> = {
    1: "flex flex-col justify-center items-start gap-10 px-20 w-[586px] h-[400px] bg-white border border-solid border-[#F3D1BF] rounded-tl-md p-8",
    2: "flex flex-col justify-center items-start gap-10 px-20 w-[586px] h-[336px] bg-white border border-solid border-[#F3D1BF] border-l-0 rounded-tr-[6px] p-8",
    3: "flex flex-col justify-center items-start gap-10 px-20 w-[586px] h-[336px] bg-white border border-solid border-[#F3D18F] rounded-bl-md p-8",
    4: "flex flex-col justify-center items-start gap-10 px-20 w-[586px] h-[336px] bg-white border border-solid border-[#F3D18F] border-l-0 rounded-br-[6px] p-8 mt-[-64px]"
};

const TestimonialBlockData = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <section className="flex flex-col justify-center items-center bg-white px-6 py-16 md:py-20">
            
            {/* Desktop */}
            <h5 className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-8 tracking-[3px] text-center uppercase text-[#EF6D58]">
                Testimonials
            </h5>

            <h2 className="font-['Epilogue'] font-extrabold text-[32px] md:text-[56px] leading-tight md:leading-16 tracking-[-1px] text-center text-[#391400] mb-8 md:mb-12 w-full mt-6 md:mt-8">
                What Our Clients<br /> Are Saying
            </h2>

            <div className="hidden md:flex flex-wrap justify-center items-start gap-0">
                {testimonials.map((t) => (
                    <div key={t.id} className={cardStyles[t.id]}>
                        <div className="flex items-center gap-2 mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <img key={i} src={t.star} alt="Star" className="w-6 h-6" />
                            ))}
                        </div>

                        <p className="mb-4">{t.text}</p>

                        <div className="flex items-center gap-4">
                            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full" />
                            <div>
                                <h4 className="font-['Epilogue'] font-bold text-[24px] leading-8 text-[#391400]">
                                    {t.name}
                                </h4>
                                <p className="text-[16px]">{t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden flex flex-col w-full gap-6 mt-10">
                {(showAll ? testimonials : testimonials.slice(0, 2)).map((t) => (
                    <div
                        key={t.id}
                        className="bg-white border border-[#F3D1BF] rounded-xl p-5 w-full shadow-sm"
                    >
                        <div className="flex items-center gap-1 mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <img key={i} src={t.star} alt="Star" className="w-5 h-5" />
                            ))}
                        </div>

                        <p className="text-sm leading-5 mb-3">{t.text}</p>

                        <div className="flex items-center gap-3">
                            <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-bold text-sm">{t.name}</p>
                                <p className="text-xs text-gray-500">{t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Toggle button */}
                <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="
                        w-[138px] h-12
                        uppercase font-black text-[14px] text-[#391400] text-center mx-auto leading-[100%] tracking-[0px]
                        bg-white border border-[#F3D1BF]
                        rounded-xl shadow-sm px-4 py-3 mt-2
                        active:scale-[0.97]
                        transition-all duration-150
                        hover:bg-[#FF6A00]
                    "
                >
                    {showAll ? "See less" : "See all"}
                </button>
            </div>

        </section>
    );
};

const Testimonial = () => <TestimonialBlockData />;

export default Testimonial;
