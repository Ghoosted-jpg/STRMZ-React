import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import { Headphones, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-black p-4 flex justify-between items-center md:p-4 max-w-7xl mx-auto w-full z-50 relative">
            {/* Logo */}
            <img src={Logo} className="w-32 h-16" alt="Logo" />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2 items-center ">
                <Link to="/" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl rounded-xl transition duration-500">Home</Link>
                <Link to="/About" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl rounded-xl transition duration-500">About</Link>
                <Link to="/Services" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl rounded-xl transition duration-500">Service</Link>
                <Link to="/#faq" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl rounded-xl transition duration-500">FAQs</Link>
                <Link to="/ContactUs" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl rounded-xl transition duration-500">Contact Us</Link>

                {/* Call Button */}
                <div className="flex items-center space-x-2 inline-flex bg-black text-white w-[204px] py-2 rounded-full group hover:bg-[#CBE26B] cursor-pointer">
                    <div className="inline-flex items-center justify-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-black transition duration-500 ml-2">
                        <Headphones className="w-[22px] h-[22px] text-black group-hover:text-white transition duration-500" />
                    </div>
                    <Link to="/login" className="pl-0 font-aileron font-semibold group-hover:text-black transition duration-500">
                        Schedule A Call
                    </Link>
                </div>
            </div>

            {/* 🔥 Mobile Menu Button (NOW VISIBLE) */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* 🔥 Mobile Menu with Animation */}
            <ul className={`absolute top-16 left-0 w-full bg-white border-t border-gray-200 space-y-4 px-4 py-3 mt-2 md:hidden flex flex-col items-center 
                transition-all duration-300 ease-in-out transform
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
            >
                <li><Link to="/" className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl">Home</Link></li>
                <li><Link to="/About" className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl">About</Link></li>
                <li><Link to="/Services" className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl">Service</Link></li>
                <li><Link to="/#faq" className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl">FAQs</Link></li>
                <li><Link to="/ContactUs" className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-xl">Contact</Link></li>

                {/* Call Button in Mobile */}
                <div className="flex items-center space-x-4 inline-flex bg-black text-white px-3 py-1 rounded-full group hover:bg-[#CBE26B] cursor-pointer transition duration-300">
                    <div className="inline-flex items-center justify-center p-1 bg-[#CBE26B] rounded-full group-hover:bg-black transition duration-500">
                        <Headphones className="w-6 h-6 text-black group-hover:text-white transition duration-500" />
                    </div>
                    <Link to="/login" className="pl-0 font-semibold group-hover:text-black transition duration-500">
                        Schedule A Call
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
