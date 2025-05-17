import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Circle from '../Images/circle.png';
import HeaderLine from '../Images/Vector.png';
import Website from "../Images/WebsiteIcon.png";
import Social from "../Images/SocialIcon.png";
import Google from "../Images/GoogleIcon.png";
import Ad from "../Images/AdIcon.png";
import SEO from "../Images/SEOIcon.png";
import ServiceDetailImage from "../Images/ServiceDetailIMG.png";

const ServiceDetailSection = () => {
    const [activeSection, setActiveSection] = useState('Social');
    function handleSectionChange(section) {
        setActiveSection(section);
    }

    const [lineWidth, setLineWidth] = useState(0);

    // Update the width dynamically based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setLineWidth('300px'); // Example width for small screens
            } else {
                setLineWidth('382px'); // Example width for medium screens
            }
        };

        // Call the handleResize function on mount and resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component is unmounted
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='w-full py-[50px] md:py-[100px] bg-[#F3F3F2]'>
            <div className='max-w-7xl mx-auto'>
                <div className='relative w-[300px] xs:w-[400px] sm:w-[495px] md:w-[738px] mx-auto'>
                    <h1 className='relative z-10 font-anton text-[#24261F] text-center text-[28px] xs:text-[36px] sm:text-[52px]'>MORE GROWTH FOR YOUR COMPANY IN TURNOVER, CONVERSIONS, LEADS AND BRAND AWARENESS?</h1>
                    <motion.img
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [1, 0.8, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        src={Circle}
                        alt='Circle'
                        className='absolute z-0 top-0 left-[82px] xs:left-[115px] sm:-top-[4px] sm:left-[125px] md:-top-[10px] md:left-[118px] w-[96px] h-[46px] xs:w-[123px] xs:h-[56px] sm:w-[178px] sm:h-[85px] md:w-[178px] md:h-[96px]' />
                    <img src={HeaderLine} alt='HeaderLine' className='absolute right-4 top-[119px] xs:right-6 xs:top-[152px] sm:right-0 sm:top-[220px] md:right-2 md:top-[141px] w-[116px] xs:w-[152px] sm:w-[221px] md:w-[221px]' />
                    <span className='absolute top-8 -right-2 sm:-right-12 md:-top-10 md:right-4 lg:top-8 lg:-right-20 xl:-right-48 bg-[#626262] w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full'></span>
                    <span className='absolute top-20 -left-2 xs:left-0 sm:-left-10 md:-left-2 lg:top-20 lg:-left-20 bg-[#333333] w-2 h-2 sm:w-3 sm:h-3 rounded-full'></span>
                </div>
                <div className='flex justify-center flex-col lg:justify-between lg:flex-row pt-10 lg:pt-20'>
                    <div className='order-2 lg:order-1 pl-4 xl:pl-0'>
                        <div onClick={() => handleSectionChange('Website')} className='flex items-center gap-x-2 xs:gap-x-4 cursor-pointer w-[300px] xs:w-[400px]'>
                            <div className='flex justify-center items-center bg-[#CBE26B] w-[42px] h-[42px] rounded-full'>
                                <img src={Website} alt='Website Icon' className='w-[22px] h-[22px]' />
                            </div>
                            <p className='font-aileron text-bold text-[#4C5041] text-[20px] xs:text-[22px]'>Have a website made</p>
                        </div>
                        <motion.p
                            className="bg-[#24261F] bg-opacity-18 h-[1px] my-[14px]"
                            initial={{ width: lineWidth }} // Starts with 0 width
                            animate={{
                                width: activeSection === 'Website' ? 0 : lineWidth, // Dynamically expand or collapse
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                        </motion.p>

                        <div
                            className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeSection === 'Website' ? 'max-h-[1000px] opacity-100 my-7 p-8' : 'max-h-0 opacity-0 my-0 p-0'
                                } bg-[#24261F] w-[300px] xs:w-[400px] sm:w-[544px] rounded-3xl`}>
                            <p className='font-aileron text-[#F3F3F2] w-[250px] xs:w-auto sm:w-[480px] text-base xs:text-lg pb-4'>Outsourcing your Social Media gives many entrepreneurs relief. You too would probably rather focus on your core business than having to constantly think about your online visibility and the right social media posts. At STRMZ we take care of every step. From developing a content strategy, advising on the best platforms for your brand to creating content.</p>
                            <Link to="#">
                                <div className="relative overflow-hidden bg-[#F3F3F3] w-[164px] h-[54px] rounded-[32px] flex items-center pl-[8px] gap-x-[8px] group transition duration-500">
                                    {/* Animated background fill */}
                                    <span className="absolute top-0 left-0 h-full w-0 bg-[#CBE26B] transition-all duration-500 ease-out group-hover:w-full z-0"></span>

                                    {/* Icon */}
                                    <div className="relative z-10 flex justify-center items-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-[#24261F] transition duration-500">
                                        <ChevronRight className="w-8 h-7 group-hover:text-[#CBE26B] transition duration-500" />
                                    </div>

                                    {/* Text */}
                                    <p className="relative z-10 font-aileron text-base xs:text-lg group-hover:text-[#24261F] transition duration-500">
                                        Read More
                                    </p>
                                </div>
                            </Link>

                        </div>
                        <div onClick={() => handleSectionChange('Social')} className='flex items-center gap-x-2 xs:gap-x-4 cursor-pointer w-[300px] xs:w-[400px]'>
                            <div className='flex justify-center items-center bg-[#CBE26B] w-[42px] h-[42px] rounded-full'>
                                <img src={Social} alt='Website Icon' className='w-[22px] h-[22px]' />
                            </div>
                            <p className='font-aileron text-bold text-[#4C5041] text-[20px] xs:text-[22px]'>Social media management</p>
                        </div>
                        <motion.p
                            className="bg-[#24261F] bg-opacity-18 h-[1px] my-[14px]"
                            initial={{ width: lineWidth }} // Starts with 0 width
                            animate={{
                                width: activeSection === 'Social' ? 0 : lineWidth, // Dynamically expand or collapse
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                        </motion.p>
                        <div
                            className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeSection === 'Social' ? 'max-h-[1000px] opacity-100 my-7 p-8' : 'max-h-0 opacity-0 my-0 p-0'
                                } bg-[#24261F] w-[300px] xs:w-[400px] sm:w-[544px] rounded-3xl`}>
                            <p className='font-aileron text-[#F3F3F2] w-[250px] xs:w-auto sm:w-[480px] text-base xs:text-lg pb-4'>Outsourcing your Social Media gives many entrepreneurs relief. You too would probably rather focus on your core business than having to constantly think about your online visibility and the right social media posts. At STRMZ we take care of every step. From developing a content strategy, advising on the best platforms for your brand to creating content.</p>
                            <Link to="#">
                                <div className="relative overflow-hidden bg-[#F3F3F3] w-[164px] h-[54px] rounded-[32px] flex items-center pl-[8px] gap-x-[8px] group transition duration-500">
                                    {/* Animated background fill */}
                                    <span className="absolute top-0 left-0 h-full w-0 bg-[#CBE26B] transition-all duration-500 ease-out group-hover:w-full z-0"></span>

                                    {/* Icon */}
                                    <div className="relative z-10 flex justify-center items-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-[#24261F] transition duration-500">
                                        <ChevronRight className="w-8 h-7 group-hover:text-[#CBE26B] transition duration-500" />
                                    </div>

                                    {/* Text */}
                                    <p className="relative z-10 font-aileron text-base xs:text-lg group-hover:text-[#24261F] transition duration-500">
                                        Read More
                                    </p>
                                </div>
                            </Link>

                        </div>
                        <div onClick={() => handleSectionChange('Google')} className='flex items-center gap-x-2 xs:gap-x-4 cursor-pointer w-[300px]'>
                            <div className='flex justify-center items-center bg-[#CBE26B] w-[42px] h-[42px] rounded-full'>
                                <img src={Google} alt='Website Icon' className='w-[22px] h-[22px]' />
                            </div>
                            <p className='font-aileron text-bold text-[#4C5041] text-[20px] xs:text-[22px]'>Google Advertising</p>
                        </div>
                        <motion.p
                            className="bg-[#24261F] bg-opacity-18 h-[1px] my-[14px]"
                            initial={{ width: lineWidth }} // Starts with 0 width
                            animate={{
                                width: activeSection === 'Google' ? 0 : lineWidth, // Dynamically expand or collapse
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                        </motion.p>
                        <div
                            className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeSection === 'Google' ? 'max-h-[1000px] opacity-100 my-7 p-8' : 'max-h-0 opacity-0 my-0 p-0'
                                } bg-[#24261F] w-[300px] xs:w-[400px] sm:w-[544px] rounded-3xl`}>
                            <p className='font-aileron text-[#F3F3F2] w-[250px] xs:w-auto sm:w-[480px] text-base xs:text-lg pb-4'>Outsourcing your Social Media gives many entrepreneurs relief. You too would probably rather focus on your core business than having to constantly think about your online visibility and the right social media posts. At STRMZ we take care of every step. From developing a content strategy, advising on the best platforms for your brand to creating content.</p>
                            <Link to="#">
                                <div className="relative overflow-hidden bg-[#F3F3F3] w-[164px] h-[54px] rounded-[32px] flex items-center pl-[8px] gap-x-[8px] group transition duration-500">
                                    {/* Animated background fill */}
                                    <span className="absolute top-0 left-0 h-full w-0 bg-[#CBE26B] transition-all duration-500 ease-out group-hover:w-full z-0"></span>

                                    {/* Icon */}
                                    <div className="relative z-10 flex justify-center items-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-[#24261F] transition duration-500">
                                        <ChevronRight className="w-8 h-7 group-hover:text-[#CBE26B] transition duration-500" />
                                    </div>

                                    {/* Text */}
                                    <p className="relative z-10 font-aileron text-base xs:text-lg group-hover:text-[#24261F] transition duration-500">
                                        Read More
                                    </p>
                                </div>
                            </Link>

                        </div>
                        <div onClick={() => handleSectionChange('Ad')} className='flex items-center gap-x-2 xs:gap-x-4 cursor-pointer'>
                            <div className='flex justify-center items-center bg-[#CBE26B] w-[42px] h-[42px] rounded-full'>
                                <img src={Ad} alt='Website Icon' className='w-[22px] h-[22px]' />
                            </div>
                            <p className='font-aileron text-bold text-[#4C5041] text-[20px] xs:text-[22px]'>Social media Advertising</p>
                        </div>
                        <motion.p
                            className="bg-[#24261F] bg-opacity-18 h-[1px] my-[14px]"
                            initial={{ width: lineWidth }} // Starts with 0 width
                            animate={{
                                width: activeSection === 'Ad' ? 0 : lineWidth, // Dynamically expand or collapse
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                        </motion.p>
                        <div
                            className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeSection === 'Ad' ? 'max-h-[1000px] opacity-100 my-7 p-8' : 'max-h-0 opacity-0 my-0 p-0'
                                } bg-[#24261F] w-[300px] xs:w-[400px] sm:w-[544px] rounded-3xl`}>
                            <p className='font-aileron text-[#F3F3F2] w-[250px] xs:w-auto sm:w-[480px] text-base xs:text-lg pb-4'>Outsourcing your Social Media gives many entrepreneurs relief. You too would probably rather focus on your core business than having to constantly think about your online visibility and the right social media posts. At STRMZ we take care of every step. From developing a content strategy, advising on the best platforms for your brand to creating content.</p>
                            <Link to="#">
                                <div className="relative overflow-hidden bg-[#F3F3F3] w-[164px] h-[54px] rounded-[32px] flex items-center pl-[8px] gap-x-[8px] group transition duration-500">
                                    {/* Animated background fill */}
                                    <span className="absolute top-0 left-0 h-full w-0 bg-[#CBE26B] transition-all duration-500 ease-out group-hover:w-full z-0"></span>

                                    {/* Icon */}
                                    <div className="relative z-10 flex justify-center items-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-[#24261F] transition duration-500">
                                        <ChevronRight className="w-8 h-7 group-hover:text-[#CBE26B] transition duration-500" />
                                    </div>

                                    {/* Text */}
                                    <p className="relative z-10 font-aileron text-base xs:text-lg group-hover:text-[#24261F] transition duration-500">
                                        Read More
                                    </p>
                                </div>
                            </Link>

                        </div>
                        <div onClick={() => handleSectionChange('Seo')} className='flex items-center gap-x-2 xs:gap-x-4 cursor-pointer'>
                            <div className='flex justify-center items-center bg-[#CBE26B] w-[42px] h-[42px] rounded-full'>
                                <img src={SEO} alt='Website Icon' className='w-[22px] h-[22px]' />
                            </div>
                            <p className='font-aileron text-bold text-[#4C5041] text-[20px] xs:text-[22px]'>Serach Engine Optimization</p>
                        </div>
                        <div
                            className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeSection === 'Seo' ? 'max-h-[1000px] opacity-100 my-7 p-8' : 'max-h-0 opacity-0 my-0 p-0'
                                } bg-[#24261F] w-[300px] xs:w-[400px] sm:w-[544px] rounded-3xl`}>
                            <p className='font-aileron text-[#F3F3F2] w-[250px] xs:w-auto sm:w-[480px] text-base xs:text-lg pb-4'>Outsourcing your Social Media gives many entrepreneurs relief. You too would probably rather focus on your core business than having to constantly think about your online visibility and the right social media posts. At STRMZ we take care of every step. From developing a content strategy, advising on the best platforms for your brand to creating content.</p>
                            <Link to="#">
                                <div className="relative overflow-hidden bg-[#F3F3F3] w-[164px] h-[54px] rounded-[32px] flex items-center pl-[8px] gap-x-[8px] group transition duration-500">
                                    {/* Animated background fill */}
                                    <span className="absolute top-0 left-0 h-full w-0 bg-[#CBE26B] transition-all duration-500 ease-out group-hover:w-full z-0"></span>

                                    {/* Icon */}
                                    <div className="relative z-10 flex justify-center items-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-[#24261F] transition duration-500">
                                        <ChevronRight className="w-8 h-7 group-hover:text-[#CBE26B] transition duration-500" />
                                    </div>

                                    {/* Text */}
                                    <p className="relative z-10 font-aileron text-base xs:text-lg group-hover:text-[#24261F] transition duration-500">
                                        Read More
                                    </p>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${ServiceDetailImage})` }}
                        className='bg-contain lg:bg-cover lg:rounded-tr-[19px] lg:rounded-br-[19px] xl:rounded-none  bg-no-repeat mx-auto mb-10 lg:mb-0 w-[300px] h-[357px] xs:w-[400px] xs:h-[475px] sm:w-[620px] sm:h-[737px] lg:w-[430px] lg:h-[698px] xl:w-[588px] xl:h-[700px] order-1 lg:order-2'
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailSection;