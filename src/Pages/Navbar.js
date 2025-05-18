import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import { Headphones, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (isOpen) return;  // don't add listener if menu closed

        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);



    return (
        <nav className="text-black p-4 flex justify-between items-center md:p-4 max-w-7xl mx-auto w-full z-50 relative">
            {/* Logo */}
            <img src={Logo} className="w-32 h-16" alt="Logo" />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2 items-center ">
                <Link to="/" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full rounded-full transition duration-500">Home</Link>
                <Link to="/About" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full rounded-full transition duration-500">About</Link>
                <Link to="/Services" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full rounded-full transition duration-500">Service</Link>
                <Link to="/#faq" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full rounded-full transition duration-500">FAQs</Link>
                <Link to="/ContactUs" className="px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full rounded-full transition duration-500">Contact Us</Link>

                {/* Call Button */}
                <div className="relative flex items-center space-x-2 inline-flex bg-black text-white w-[204px] py-2 rounded-full group hover:bg-black cursor-pointer overflow-hidden">
                    {/* Expanding background animation */}
                    <span className="absolute top-1/2 left-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 bg-[#CBE26B] rounded-full transition-all duration-500 ease-out group-hover:w-64 group-hover:h-64 z-0"></span>

                    {/* Content */}
                    <div className="relative z-10 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-black transition duration-500 ml-2">
                        <Headphones className="w-[22px] h-[22px] text-black group-hover:text-white transition duration-500" />
                    </div>
                    <Link
                        to="#"
                        className="relative z-10 pl-0 font-aileron text-lg group-hover:text-black transition duration-500"
                    >
                        Schedule A Call
                    </Link>
                </div>
            </div>

            {/* 🔥 Mobile Menu Button (NOW VISIBLE) */}
            <button className="md:hidden relative w-8 h-8" onClick={() => { setIsOpen(!isOpen); console.log("Toggle clicked, isOpen:", isOpen); }}>
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="x-icon"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0"
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu-icon"
                            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0"
                        >
                            <Menu className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            {/* 🔥 Mobile Menu with Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        ref={menuRef}  // <-- attach ref here
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="overflow-hidden absolute top-16 left-0 w-full bg-white border-t border-gray-200 space-y-4 px-4 py-3 mt-2 md:hidden flex flex-col items-center z-50"
                    >
                        {/* Menu Links */}
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}  // close menu on click
                                className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full"
                            >
                                Home
                            </Link>
                        </motion.li>

                        {/* Repeat for all other links */}
                        <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <Link to="/About" onClick={() => setIsOpen(false)} className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full">
                                About
                            </Link>
                        </motion.li>

                        <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                            <Link to="/Services" onClick={() => setIsOpen(false)} className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full">
                                Service
                            </Link>
                        </motion.li>

                        <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                            <Link to="/#faq" onClick={() => setIsOpen(false)} className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full">
                                FAQs
                            </Link>
                        </motion.li>

                        <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                            <Link to="/ContactUs" onClick={() => setIsOpen(false)} className="block px-3 py-1 font-semibold hover:bg-[#CBE26B] hover:rounded-full">
                                Contact
                            </Link>
                        </motion.li>

                        {/* Call Button */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="relative flex items-center space-x-2 inline-flex bg-black text-white w-[204px] py-2 rounded-full group hover:bg-black cursor-pointer overflow-hidden transition-all duration-500"
                            onClick={() => setIsOpen(false)}  // close menu when call button clicked
                        >
                            <span className="absolute top-1/2 left-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 bg-[#CBE26B] rounded-full transition-all duration-500 ease-out group-hover:w-64 group-hover:h-64 z-0"></span>

                            <div className="relative z-10 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-black transition duration-500 ml-2">
                                <Headphones className="w-[22px] h-[22px] text-black group-hover:text-white transition duration-500" />
                            </div>

                            <Link to="#" className="relative z-10 pl-0 font-aileron text-lg group-hover:text-black transition duration-500">
                                Schedule A Call
                            </Link>
                        </motion.div>
                    </motion.ul>
                )}
            </AnimatePresence>


        </nav>
    );
};

export default Navbar;
