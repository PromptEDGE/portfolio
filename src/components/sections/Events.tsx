import ClockIcon from '../../assets/events/clock-icon.svg';

const EventsDataBlock = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full">

            <h2 className="font-['Epilogue'] font-normal text-[14px] md:text-[16px] tracking-[3px] uppercase text-center text-[#EF6D58]">
                Events
            </h2>

            <h3 className="text-center font-['Epilogue'] font-extrabold text-[32px] leading-[38px] md:text-[56px] md:leading-16 tracking-[-1px] text-white">
                Explore Future<br /> Conferences
            </h3>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">

                <div className="flex flex-col justify-center items-start gap-4 border border-[#3A3C56] w-full md:w-[370px] h-auto rounded-md px-6 py-8">
                    <div className="flex flex-row justify-start items-start gap-2">
                        <h2 className="font-['Epilogue'] font-extrabold text-[56px] md:text-[72px] leading-16 md:leading-20 tracking-[-2px] text-white">3</h2>
                        <h3 className="font-['Epilogue'] font-bold text-[20px] md:text-[24px] leading-7 md:leading-8 text-white">November 2021</h3>
                    </div>

                    <div className="flex flex-row items-center gap-3">
                        <img src={ClockIcon} alt="clock icon" className="w-4 h-4" />
                        <p className="font-['Epilogue'] text-[14px] md:text-[16px] text-white">9:00 am - 3:00 pm</p>
                    </div>

                    <hr className="w-full h-px bg-[#3A3C56] border-0" />

                    <div className="flex flex-col items-start gap-3 w-full">
                        <h2 className="font-['Epilogue'] font-bold text-[18px] md:text-[20px] text-white">Design Works</h2>
                        <p className="font-['Epilogue'] text-[14px] md:text-[16px] text-gray-400">
                            Digital Agency is a business you hire to outsource your digital.
                        </p>
                        <a href="explore now" className="font-['Epilogue'] text-[14px] md:text-[16px] text-gray-400 hover:text-gray-600 mt-4">
                            Explore Now
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-4 border border-[#3A3C56] w-full md:w-[370px] h-auto rounded-md px-6 py-8">
                    <div className="flex flex-row justify-start items-start gap-6">
                        <h2 className="font-['Epilogue'] font-extrabold text-[56px] md:text-[72px] leading-16 md:leading-20 tracking-[-2px] text-white">15</h2>
                        <h3 className="font-['Epilogue'] font-bold text-[20px] md:text-[24px] leading-7 md:leading-8 text-white">November 2021</h3>
                    </div>

                    <div className="flex flex-row items-center gap-3">
                        <img src={ClockIcon} alt="clock icon" className="w-4 h-4" />
                        <p className="font-['Epilogue'] text-[14px] md:text-[16px] text-white">1:00 pm - 8:00 pm</p>
                    </div>

                    <hr className="w-full h-px bg-[#3A3C56] border-0" />

                    <div className="flex flex-col items-start gap-3 w-full">
                        <h2 className="font-['Epilogue'] font-bold text-[18px] md:text-[20px] text-white">Interior Design</h2>
                        <p className="font-['Epilogue'] text-[14px] md:text-[16px] text-gray-400">
                            Marketing efforts, instead of handling in-house.
                        </p>
                        <a href="explore now" className="font-['Epilogue'] text-[14px] md:text-[16px] text-gray-400 hover:text-gray-600 mt-4">
                            Explore Now
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-4 border border-[#3A3C56] w-full md:w-[370px] h-auto rounded-md px-6 py-8">
                    <div className="flex flex-row justify-start items-start gap-2">
                        <h2 className="font-['Epilogue'] font-extrabold text-[56px] md:text-[72px] leading-16 md:leading-20 tracking-[-2px] text-white">2</h2>
                        <h3 className="font-['Epilogue'] font-bold text-[20px] md:text-[24px] leading-7 md:leading-8 text-white">December 2021</h3>
                    </div>

                    <div className="flex flex-row items-center gap-3">
                        <img src={ClockIcon} alt="clock icon" className="w-4 h-4" />
                        <p className="font-['Epilogue'] text-[14px] md:text-[16px] text-white">10:00 am - 2:00 pm</p>
                    </div>

                    <hr className="w-full h-px bg-[#3A3C56] border-0" />

                    <div className="flex flex-col items-start gap-3 w-full">
                        <h2 className="font-['Epilogue'] font-bold text-[18px] md:text-[20px] text-white w-full">The F design events</h2>
                        <p className="font-['Epilogue'] text-[14px] md:text-[16px] text-gray-400">
                            Provide your business with a variety of digital solutions to promote.
                        </p>
                        <a href="explore now" className="font-['Epilogue'] text-[14px] md:text-[16px] text-gray-400 hover:text-gray-600 mt-4">
                            Explore Now
                        </a>
                    </div>
                </div>

            </div>

            <div className="flex justify-center mt-10">
                <button className="px-6 py-3 text-white font-['Epilogue'] font-black text-[14px] uppercase hover:text-gray-400 border border-gray-600">
                    Explore More
                </button>
            </div>
        </div>
    );
};

const Events = () => {
    return (
        <section id="events-section" className="w-full bg-[#28293E] flex flex-col items-center justify-center py-16 md:py-20 px-6 md:px-12">
            <EventsDataBlock />
        </section>
    );
};

export default Events;
