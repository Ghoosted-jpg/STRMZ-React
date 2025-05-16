import React from 'react';
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";
const QuickLinksSection = () => {
    return (
        <div className='w-full bg-[#CBE26B] pb-20 z-50'>
            <div className='max-w-7xl mx-auto xl:h-[480px] flex justify-start xl:justify-center items-start xl:items-center flex-col w-[300px] xs:w-[400px] sm:w-[620px] md:w-[746px] lg:w-[1000px] xl:w-auto'>
                <div className='flex justify-between items-start lg:items-center flex-col lg:flex-row xl:h-[80px] mt-20 xl:w-[1241px]'>
                    <h1 className='font-anton text-[40px] xs:text-[52px] sm:text-[60px] md:text-[68px]  xl:text-[72px] lg:w-[440px]'>QUCIK LINKS</h1>
                    <div className='flex justify-start items-start xl:items-center flex-row gap-y-4 gap-x-4 flex-wrap mt-4 lg:mt-0'>
                        <Link to="/">
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full w-[128px] h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>HOME</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                        <Link to="/about">
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full w-[132px] h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>ABOUT</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                        <Link to="/Services">
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full w-[155px] h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>SERVICES</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                        <Link to="/#faq">
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full w-[121px] h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>FAQS</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                        <Link to="/ContactUs">
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full w-[177px] h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>CONTACT US</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-start lg:justify-between items-start lg:items-center flex-col lg:flex-row xl:h-[140px] mt-[60px] xl:w-[1241px]'>
                    <h1 className='font-anton text-[40px] xs:text-[52px] sm:text-[60px] md:text-[68px] xl:text-[72px] lg:w-[311px] mr-6'>SERVICES</h1>
                    <div className='flex justify-start items-start xl:items-center flex-wrap flex-col sm:flex-row gap-y-4 xl:gap-y-[20px] sm:gap-x-[16px] xl:w-[906px] mt-4'>
                        <Link to="#" className='w-[262px]'>
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>HAVE A WEBSITE MADE</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                        <Link to="#" className='w-[300px] xs:w-[354px]'>
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full h-[100px] xs:h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] w-[200px] xs:w-auto group-hover:text-white transition duration-500'>SEARCH ENGINE OPTIMIZATION SEO</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                        <Link to="#" className='w-[248px]'>
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>GOOGLE ADVERTISING</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                        <Link to="#" className='w-[300px]'>
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>SOCIAL MEDIA ADVERTISING</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                        <Link to="/" className='w-[312px]'>
                        <div className='flex justify-center space-x-4 items-center flex-row bg-[#F3F3F3] rounded-full h-[60px] group hover:bg-black'>
                            <p className='font-anton text-[22px] group-hover:text-white transition duration-500'>SOCIAL MEDIA MANAGEMENT</p>
                            <div className='flex justify-center items-center border border-black rounded-full w-[28px] h-[28px] group-hover:bg-black group-hover:border-none transition duration-500'>
                                <MoveUpRight className=" text-[#24261F] w-4 h-4 group-hover:text-[#CBE26B] transition duration-500 group-hover:rotate-45 group-hover:w-10 group-hover:h-10" />
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickLinksSection;