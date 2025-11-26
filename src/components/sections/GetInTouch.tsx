import { useState } from 'react';
import Map from '../../assets/get-in-touch/map.svg';
import Oval from '../../assets/get-in-touch/oval.svg';
import LocationPin from '../../assets/get-in-touch/location-pin.svg';
import PhoneIcon from '../../assets/get-in-touch/phone-icon.svg';
import EmailIcon from '../../assets/get-in-touch/email-icon.svg';
import AddressIcon from '../../assets/get-in-touch/address-icon.svg';


const GetInTouchDataBlock = () => {
    const [formData, setformData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange =(e: React.ChangeEvent<HTMLInputElement |  HTMLTextAreaElement>) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // handle form submission logic
        console.log('Form submitted: ', formData);
        setformData({
            email: '',
            subject: '',
            message: '',
        })
    };

    return (
        <section className="flex flex-col justify-center items-center gap-8 px-[38px] md:px-0 py-12 md:mb-60">
            <div className="relative w-full">
                <img src={Map} alt="map" className="hidden md:block object-cover w-full h-auto" />  
                <div className="md:absolute md:top-35 md:left-40 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
                    <div className="flex flex-col justify-center items-center gap-6 w-full md:w-[470px] bg-white rounded-md p-6 md:p-0 md:h-[464px] shadow-lg md:shadow-none">
                        <h4 className="font-['Epilogue'] font-bold text-[20px] md:text-[24px] leading-8 tracking-[0px] text-[#391400]">Get In Touch</h4>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-start w-full md:p-10">
                            <input onChange={handleChange} name="email" value={formData.email} type="text" placeholder="your email" className="w-full md:w-[374px] h-12 outline-none border border-solid border-[#F3D1BF] rounded-md p-4" />
                            <input onChange={handleChange} name="subject" value={formData.subject} type="text" placeholder="Subject" className="w-full md:w-[374px] h-12 outline-none border border-solid border-[#F3D1BF] rounded-md p-4" />
                            <textarea onChange={handleChange} name="message" value={formData.message} placeholder="Message" className="w-full md:w-[374px] h-24 p-4 outline-none rounded-md border border-solid border-[#1F2030]" />
                            <button type="submit" className="w-[154px] h-12 bg-[#EF6D58] rounded-md font-['Epilogue'] font-black text-[14px] leading-[100%] tracking-[0px] text-center uppercase text-white mt-4">Submit Now</button>
                        </form>
                    </div>
                    <div className="hidden md:block relative ml-118 mt-30">
                        <img src={Oval} alt="oval" className="w-full max-w-20 md:max-w-none" />
                        <img src={LocationPin} alt="location pin" className="absolute top-5 right-6 w-8 h-8 md:w-auto md:h-auto" />
                    </div>
                </div>          
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 mt-8 md:mt-20 w-full">
                <div className="flex flex-col md:flex-row justify-start items-start gap-6 p-6 md:p-8 w-full md:w-[391px] border border-solid border-[#F3D1BF] md:border-r-0 rounded-md md:rounded-tr-none md:rounded-br-none">
                    <div className="flex justify-start items-center gap-4">
                        <div className="relative">
                            <img src={Oval} alt="oval" className="w-full" />
                            <img src={PhoneIcon} alt="phone icon" className="absolute top-6 left-6" />
                        </div>
                        <h5 className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">Phone</h5>
                    </div>
                    <p className="font-['Epilogue'] font-normal text-[18px] md:text-[20px] leading-8 tracking-[0px] text-[#391400]">+1 (234) 567-89-00</p>
                </div>
                <div className="bg-[#F3D1BF] flex flex-col md:flex-row justify-start items-start gap-6 p-6 md:p-8 w-full md:w-[391px] border border-solid border-[#F3D1BF] rounded-md">
                    <div className="flex justify-start items-center gap-4">
                        <div className="relative">
                            <img src={Oval} alt="oval" className="w-full" />
                            <img src={EmailIcon} alt="email icon" className="absolute top-6 left-6" />
                        </div>
                        <h5 className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">Email</h5>
                    </div>
                    <p className="font-['Epilogue'] font-normal text-[18px] md:text-[20px] leading-8 tracking-[0px] text-[#391400]">info@agency.com</p>
                </div>
                <div className="flex flex-col md:flex-row justify-start items-start gap-6 p-6 md:p-8 w-full md:w-[391px] border border-solid border-[#F3D1BF] md:border-l-0 rounded-md md:rounded-tl-none md:rounded-bl-none">
                    <div className="flex justify-start items-center gap-4">
                        <div className="relative">
                            <img src={Oval} alt="oval" className="w-full" />
                            <img src={AddressIcon} alt="address icon" className="absolute top-6 left-6" />
                        </div>
                        <h5 className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">address</h5>
                    </div>
                    <p className="font-['Epilogue'] font-normal text-[18px] md:text-[20px] leading-8 tracking-[0px] text-[#391400]">2247 Lunetta Street, TX 76301</p>
                </div>
            </div>
        </section>
    )
}


const GetInTouch = () => {
    return(
        <GetInTouchDataBlock />
    );
};

export default GetInTouch;