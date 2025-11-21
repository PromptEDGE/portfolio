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
        // newsletter section - row container
        <section className="flex flex-col md:flex-row justify-center items-center bg-white mx-[135px] -my-4 mb-24 md:p-12 ">
            
            {/* newsletter heading */}
            <h3 className="flex justify-start items-center font-['Epilogue'] font-extrabold md:text-[40px] text-[20px] leading-12 tracking-0 text-[#391400]">Newsletter</h3>

            {/* newsletter subscribe input form */}
            <form onSubmit={handleSubmit} className="flex justify-end items-center w-full md:gap-8 gap-4">
                <input onChange={handleChange} value={formData.email} name="email" type="email" placeholder="Your email" className="p-4 w-[370px] h-12 outline-none border border-solid border-[#F3D1BF] rounded-md font-['Epilogue'] font-normal text-[12px] md:text-[16px] leading-8 tracking-[0px] text-[#391400A3]" />

                <button type="submit" name="subscribe" className="outline-none w-[170px] h-12 font-['Epilogue'] font-black text-[14px] leading-[100%] tracking-[0px] text-center text-[#391400] shadow-md uppercase pt-4 mb-2 hover:-translate-x-2 hover:-translate-y-1 hover:bg-gray-100">subscribe</button>

            </form>
        </section>
    );
};

const NewsLetter = () => {
    return (
        <NewsLetterDataBlock />
    );
};

export default NewsLetter;