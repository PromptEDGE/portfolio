import Logo from './Logo.tsx';
import NavBar from './NavBar.tsx';

import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="w-full bg-[#05226E] fixed top-0 left-0 z-40">
            <div className="mx-auto w-full max-w-[1440px] flex items-center justify-between py-6 px-4">
                <div className="flex items-center">
                    <Logo />
                </div>

                {/* Desktop NavBar */}
                <div className="hidden md:flex flex-1 justify-center">
                    <NavBar />
                </div>

                {/* mobile hamburger menu */}
                <div className="md:hidden flex items-center">
                    <button
                        aria-label="Open menu"
                        className="text-white p-2 cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu drawer */}
                {menuOpen && (
                    <div className="fixed inset-0 z-50 flex">
                        {/* Overlay: transparent */}
                            <div className="absolute inset-0" onClick={() => setMenuOpen(false)}></div>
                                {/* Slide-in menu */}
                                <div className="relative w-64 h-full bg-[#05226E] bg-opacity-0 backdrop-blur-lg p-6 flex flex-col transform transition-transform duration-30000 ease-in-out right-0 translate-x-0">
                                    <button aria-label="Close menu" className="self-end mb-8 text-white cursor-pointer" onClick={() => setMenuOpen(false)}>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"     stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    {/* nav links here for mobile */}
                                    <nav className="flex flex-col items-center gap-6 mt-8">
                                        <a href="#about" className="text-white text-lg hover:text-gray-500" onClick={() => setMenuOpen(false)}>About</a>
                                        <a href="#work" className="text-white text-lg hover:text-gray-500" onClick={() => setMenuOpen(false)}>Work</a>
                                        <a href="#service" className="text-white text-lg hover:text-gray-500" onClick={() => setMenuOpen(false)}>Service</a>
                                        <a href="#contact" className="bg-white text-[#05226E] text-center w-1/2 px-4 py-2 rounded-full font-semibold mt-3 shadow-md hover:bg-[#EA5C15] hover:text-white transition-colors duration-200" onClick={() =>    setMenuOpen(false)}>Contact</a>
                                    </nav>
                                </div>
                            </div>
                )}
            </div>
        </header>
    );
}

export default Header;