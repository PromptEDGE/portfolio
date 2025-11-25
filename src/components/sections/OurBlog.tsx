import DesignPhoto from '../../assets/our-blog/design-photo.svg';
import MarketingPhoto from '../../assets/our-blog/marketing-photo.svg';
import StoryPhoto from '../../assets/our-blog/story-photo.svg';

type Blogs = {
    id: number,
    image: string;
    title: string;
    description: string;
    date: string;
};

const blogs: Blogs[] = [
    {id: 1, image: StoryPhoto, title: "Stories", description: "Agency is a business you hire to outsource", date: "5 Nov, 2021"},
    {id: 2, image: DesignPhoto, title: "Design", description: "Outsource your digital marketing efforts", date: "29 Oct, 2021"},
    {id: 3, image: MarketingPhoto, title: "Marketing", description: "Your business with a variety of digital", date: "21 Oct, 2021"},
];

const OurBlog = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-white py-16 md:py-20 px-[38px] md:px-[75px] lg:px-20 gap-12 md:gap-16">
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-0">
                <div className="flex flex-col justify-end items-center md:items-start gap-4 md:gap-6">
                    <h5 className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">
                        Our Blog
                    </h5>
                    <h2 className="font-['Epilogue'] font-extrabold text-[32px] md:text-[56px] leading-tight md:leading-16 tracking-[-1px] text-[#391400] text-center md:text-left">Latest Blog<br /> Articles</h2>
                </div>
                <div className="flex justify-start md:justify-end items-center">
                    <button className="font-['Epilogue'] font-extrabold text-[12px] md:text-[14px] leading-[100%] tracking-[0px] text-[#391400] text-center hover:text-gray-400 uppercase shadow-md w-[140px] md:w-[170px] h-12">Discover All</button>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                {blogs.map((blog) => (
                    <div key={blog.id} className="w-full md:w-[370px] flex flex-col items-start gap-4 md:gap-6">
                        <img src={blog.image} alt="blog image" className="w-full h-auto rounded-lg" />
                        <p className="font-['Epilogue'] font-normal text-[16px] md:text-[20px] leading-8 tracking-[0px] text-[#391400]">{blog.title}</p>
                        <h4 className="font-['Epilogue'] font-bold text-[18px] md:text-[24px] leading-7 md:leading-8 tracking-[0px] text-[#391400]">{blog.description}</h4>
                        <p className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-8 tracking-[0px] text-[#391400]">{blog.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurBlog;