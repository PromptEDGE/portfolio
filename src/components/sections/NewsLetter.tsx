import { useState } from 'react';

const NewsLetterDataBlock = () => {
    const [formData, setformData] = useState({
        email: '',
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // handle form submission logic
        console.log('Form submitted:', formData);
        setformData({ email: ''});
    };


    return (
        <>
            <hr className="h-px bg-[#F3D1BF] border-0 mx-[38px] md:mx-[75px] mb-12" />

            <section className="flex flex-col md:flex-row justify-center items-center md:items-start bg-white px-[38px] md:mx-10 py-16 md:py-20 gap-6 md:gap-0">

            <h3 className="flex justify-start items-center font-['Epilogue'] font-extrabold text-[24px] md:text-[40px] leading-tight md:leading-12 tracking-0 text-[#391400]">Newsletter</h3>


            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-end items-center w-full gap-4 md:gap-8">

                <input onChange={handleChange} value={formData.email} name="email" type="email" placeholder="Your email" className="p-4 w-full md:w-[370px] h-12 outline-none border border-solid border-[#F3D1BF] rounded-md font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-8 tracking-[0px] text-[#391400A3]" />

                {/* subscribe button */}
                <button type="submit" name="subscribe" className="outline-none w-full md:w-[170px] h-12 font-['Epilogue'] font-black text-[14px] leading-[100%] tracking-[0px] text-center text-[#391400] rounded-md shadow-md uppercase hover:bg-[#FF6A00]">subscribe</button>
            </form>
        </section>
        </>
    );
};

const NewsLetter = () => {
    return (
        <NewsLetterDataBlock />
    );
};

export default NewsLetter;