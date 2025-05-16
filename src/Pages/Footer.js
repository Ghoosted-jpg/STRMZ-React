import React from "react";
import { Link } from "react-router-dom";
import YellowLogo from '../Images/Yellow Logo.png';
import { Instagram, Twitter, Bookmark, Globe } from "lucide-react"; // Import icons
const Footer = () => {
    return (
        <footer className="bg-[#24261F] p-4 md:p-6 w-full">
            <div className="flex flex-col justify-between max-w-7xl mx-auto md:flex-row md:pt-6 pt-10">
                <div>
                    <p className="text-white font-bold text-xl pt-5">Jan Bijhouwerstraat 14 3404 AM IJsselstein</p>
                    <p className="text-white font-bold text-xl pt-5">88307905</p>
                    <p className="text-white font-bold text-xl pt-5">Info@Strmz.Nl</p>
                    <img src={YellowLogo} alt="YellowLogo" className="md:pt-20 pt-10"></img>
                </div>
                <div className="md:pt-40 pt-10">
                    <div className="group cursor-pointer inline-flex items-center justify-center p-2 border-[#CBE26B] border-2 rounded-full hover:bg-[#CBE26B] mr-4 transition duration-1000">
                        <Globe className="text-[#CBE26B] w-6 h-6 group-hover:text-[#24261F] hover:text-[#24261F] transition duration-1000" />
                    </div>
                    <div className="group cursor-pointer inline-flex items-center justify-center p-2 border-[#CBE26B] border-2 rounded-full hover:bg-[#CBE26B] mr-4 transition duration-1000">
                        <Instagram className="text-[#CBE26B] w-6 h-6 group-hover:text-[#24261F] hover:text-[#24261F] transition duration-1000" />
                    </div>
                    <div className="group cursor-pointer inline-flex items-center justify-center p-2 border-[#CBE26B] border-2 rounded-full hover:bg-[#CBE26B] mr-4 transition duration-1000">
                        <Twitter className="text-[#CBE26B] w-6 h-6 group-hover:text-[#24261F] hover:text-[#24261F] transition duration-1000" />
                    </div>
                    <div className="group cursor-pointer inline-flex items-center justify-center p-2 border-[#CBE26B] border-2 rounded-full hover:bg-[#CBE26B] mr-4 transition duration-1000">
                        <Bookmark className="text-[#CBE26B] w-6 h-6 group-hover:text-[#24261F] hover:text-[#24261F] transition duration-1000" />
                    </div>
                    <div>
                        <ul className="flex flex-col md:flex-row md:pt-8 pt-8">
                            <li className="text-[#A0A19D] md:pr-1 hover:text-white transition duration-500"><Link to="#">Careers</Link></li><span className="text-[#A0A19D] md:inline hidden">|</span>
                            <li className="text-[#A0A19D] md:px-1 hover:text-white transition duration-500"><Link to="#">Terms & Conditions</Link></li><span className="text-[#A0A19D] md:inline hidden">|</span>
                            <li className="text-[#A0A19D] md:pl-1 hover:text-white transition duration-500"><Link to="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <p className="text-[#A0A19D] text-base md:pt-2 md:text-left text-center pt-10">Copyright 2024 © STRMZ.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;