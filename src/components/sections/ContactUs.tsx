import Pic from '../../assets/contact-us/pic.svg';

const ContactUsDataBlock = () => {
    return(
        <section id="contact" className="w-full min-h-screen mx-40">
            
            {/*  contact us section row container */}
            <div className="flex justify-between items-center p-6 rounded-md bg-[#EF6D58] w-[1370px] h-[542px] px-24">

                {/* left part column container */}
                <div className="flex flex-col justify-center items-start gap-10">
                    <h2 className="font-['Epilogue'] font-extrabold text-[56px] leading-16 tracking-[-1px] text-white">We're Here To<br /> Help You Build<br /> Your Dream Project</h2>
                    <p className="w-[470px] h-[66px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[0px] text-gray-50">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <button className="w-[154px] h-12 rounded-md font-['Epilogue'] font-black leading-[100%] tracking-[0px] text-center uppercase text-[#391400] bg-white pt-2 hover:bg-gray-200 outline-none ">Contact Us</button>
                </div>

                {/* right part image container */}
                <img src={Pic} alt="pic" className="flex justify-end items-center object-cover" />
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