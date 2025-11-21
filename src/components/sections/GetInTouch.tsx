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
        <section className="flex flex-col justify-center items-center gap-8 mb-60">
            
            {/* map + form relative container */}
            <div className="relative w-full">
                <img src={Map} alt="map" className="object-cover w-full h-auto" />  

                {/* absolute form + pin row container  */}
                <div className="absolute top-35 left-40 flex justify-center items-center">

                    {/* form */}
                    <div className="flex flex-col justify-center items-center gap-6 w-[470px] h-[464px] bg-white rounded-md">
                        <h4 className="font-['Epilogue'] font-bold text-[24px] leading-8 tracking-[0px] text-[#391400] mr-55">Get In Touch</h4>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-start">
                            <input onChange={handleChange} name="email" value={formData.email} type="text" placeholder="your email" className="w-[374px] h-12 outline-none border border-solid border-[#F3D1BF] rounded-md p-4" />
                            <input onChange={handleChange} name="subject" value={formData.subject} type="text" placeholder="Subject" className="w-[374px] h-12 outline-none border border-solid border-[#F3D1BF] rounded-md p-4" />
                            <textarea onChange={handleChange} name="message" value={formData.message} placeholder="Message" className="w-[374px] h-[96px] p-4 outline-none rounded-md border border-solid border-[#F3D1BF]" />

                            <button type="submit" className="w-[154px] h-12 bg-[#EF6D58] rounded-md font-['Epilogue'] font-black text-[14px] leading-[100%] tracking-[0px] text-center uppercase text-white mt-4 ml-54">Submit Now</button>
                        </form>
                    </div>

                    {/* location pin */}
                    <div className="relative ml-118 mt-30">
                        <img src={Oval} alt="oval" className="w-full" />
                        <img src={LocationPin} alt="location pin" className="absolute top-5 right-6" />
                    </div>
                </div>          
            </div>

            {/* phone + email + address contact row container */}
                <div className="flex justify-center items-center gap-0 mt-20">
                  
                    {/* phone contact column container */}
                    <div className="flex flex-col justify-start items-start gap-6 p-8 w-[391px] h-[192px] border border-solid border-[#F3D1BF] border-r-0 rounded-tr-none rounded-br-none rounded-md">
                        {/* phone icon + text row container */}
                        <div className="flex justify-start items-center gap-4">
                            <div className="relative">
                                <img src={Oval} alt="oval" className="w-full" />
                                <img src={PhoneIcon} alt="phone icon" className="absolute top-6 left-6" />
                            </div>
                            <h5 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">Phone</h5>
                        </div>

                        {/* phone number */}
                        <p className="font-['Epilogue'] font-normal text-[20px] leading-8 tracking-[0px] text-[#391400]">+1 (234) 567-89-00</p>
                    </div>

                    {/* email contact column container */}
                    <div className="bg-[#F3D1BF] flex flex-col justify-start items-start gap-6 p-8 w-[391px] h-[192px] border border-solid border-[#F3D1BF]">
                        {/* email icon + text row container */}
                        <div className="flex justify-start items-center gap-4">
                            <div className="relative">
                                <img src={Oval} alt="oval" className="w-full" />
                                <img src={EmailIcon} alt="phone icon" className="absolute top-6 left-6" />
                            </div>
                            <h5 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">Email</h5>
                        </div>

                        {/* email address */}
                        <p className="font-['Epilogue'] font-normal text-[20px] leading-8 tracking-[0px] text-[#391400]">info@agency.com</p>
                    </div>

                    {/* address contact column container */}
                    <div className="flex flex-col justify-start items-start gap-6 p-8 w-[391px] h-[192px] border border-solid border-[#F3D1BF] border-l-0 rounded-tl-none rounded-bl-none  rounded-md">
                        {/* address icon + text row container */}
                        <div className="flex justify-start items-center gap-4">
                            <div className="relative">
                                <img src={Oval} alt="oval" className="w-full" />
                                <img src={AddressIcon} alt="address icon" className="absolute top-6 left-6" />
                            </div>
                            <h5 className="font-['Epilogue'] font-normal text-[16px] leading-8 tracking-[3px] uppercase text-[#EF6D58]">address</h5>
                        </div>

                        {/* address */}
                        <p className="font-['Epilogue'] font-normal text-[20px] leading-8 tracking-[0px] text-[#391400]">2247 Lunetta Street, TX 76301</p>
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