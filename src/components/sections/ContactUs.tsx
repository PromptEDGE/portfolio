import Pic from '../../assets/contact-us/pic.svg';

const ContactUsDataBlock = () => {
    return(
        // contact us section
        <section id="contact" className="p-0 pb-10">

            {/* section content row container (column on mobile) */}
            <div className="flex flex-col md:flex-row justify-between items-center md:mx-[85px] mx-[38px] p-6 px-10 rounded-md bg-[#EF6D58] md:h-[542px] gap-8 md:gap-0">

                {/* left: text column container */}
                <div className="flex flex-col justify-center items-start gap-6 md:gap-10">

                    <h2 className="font-['Epilogue'] font-extrabold text-[28px] md:text-[56px] leading-tight md:leading-16 tracking-[-1px] text-white">We're Here To<br /> Help You Build<br /> Your Dream Project</h2>

                    <p className="max-w-full md:w-[470px] font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-7 md:leading-8 tracking-[0px] text-gray-50">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>

                    <button className="w-[154px] h-12 rounded-md font-['Epilogue'] font-black leading-[100%] tracking-[0px] text-center uppercase text-[#391400] bg-white pt-2 hover:bg-[#FF6A00] outline-none">Contact Us</button>
                </div>

                <img src={Pic} alt="pic" className="hidden md:flex justify-end items-center object-cover" />
            </div>
        </section>
    )
}

const ContactUs = () => {
    return(
        <ContactUsDataBlock />
    );
};

export default ContactUs;