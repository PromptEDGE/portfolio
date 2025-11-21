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
        <section className="flex flex-col justify-center items-center bg-white min-h-screen py-12 md:mx-[75px] lg:px-20 gap-60">

            {/* heading + discover all row container */}
            <div className="w-full flex justify-start items-center mb-12 md:mb-20">

                {/* left heading column container */}
                <div className="flex flex-col justify-end items-start gap-6">
                    <h5 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">
                        Our Blog
                    </h5>

                    <h2 className="font-['Epilogue'] font-extrabold text-[56px] leading-16 tracking-[-1px] text-[#391400]">Latest Blog<br /> Articles</h2>
                </div>

                {/* discover button container */}
                <div className="flex flex-1 justify-end items-center">
                    <button className="font-['Epilogue'] font-extrabold text-[14px] leading-[100%] tracking-[0px] text-[#391400] text-center hover:text-gray-400 uppercase shadow-md mt-30 w-[170px] h-12">Discover All</button>
                </div>
            </div>

            {/* blog cards container */}
            <div className="w-full flex flex-row justify-center items-center gap-12">
                {blogs.map((blog) => (
                    <div key={blog.id} className="w-[970px] h-[224px] flex flex-col items-start justify-end items-center gap-8">
                        <img src={blog.image} alt="blog image" />
                        <p className="font-['Epilogue'] font-normal text-[20px] leading-8 tracking-[0px] text-[#391400]">{blog.title}</p>

                        <h4 className="font-['Epilogue'] font-bold text-[24px] leading-8 tracking-[0px] text-[#391400]">{blog.description}</h4>

                        <p className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-[#391400]">{blog.date}</p>
                    </div>
                ))}
            </div>

            <hr className="w-[full] w-[1380px] h-[1px] bg-[#F3D1BF] border-0 -mt-32" />
        </section>
    );
}

export default OurBlog;