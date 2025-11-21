const NavBar = () => {
    return (
        // navbar container
        <div className="w-full">
            <div className="flex items-center justify-center md:justify-center">

                {/* mobile nav bar */}
                <div className="hidden md:block relative w-[1440px] text-white opacity-10 bg-transparent bg-opacity-0 md:opacity-100">
                    <a
                        href="#about"
                        className="absolute left-[765px] -top-2 w-12 h-6 font-['Font 1'] font-bold text-[15.88px] leading-6 text-center text-white hover:text-gray-500"
                    >
                        About
                    </a>

                    <a
                        href="#work"
                        className="absolute left-[869px] w-[41px] -top-2 h-6 font-['Font 1'] font-bold text-[15.88px] leading-6 text-center text-white hover:text-gray-500"
                    >
                        Work
                    </a>

                    <a
                        href="#service"
                        className="absolute left-[959px] w-[60px] -top-2 h-6 font-['Font 1'] font-bold text-[15.88px] leading-6 text-center text-white hover:text-gray-500"
                    >
                        Service
                    </a>
                    <a
                        href="#contact"
                        className="absolute left-[1177px] md:w-[138px] -top-5 h-12 bg-white flex items-center justify-center hover:bg-[#FF6A00] transition-colors duration-200 pl-[5px] pt-[4.67px] rounded-[40px] font-['Epilogue'] font-black text-[18px] leading-3.5 uppercase text-center text-black"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;