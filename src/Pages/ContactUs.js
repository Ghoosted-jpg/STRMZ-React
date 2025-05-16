import React from 'react';
import { motion } from 'framer-motion';
import Arrow from "../Images/Vector1.png";
import Vector3 from "../Images/Vector3.png";
import Logo from "../Images/Mask group.png";
const ContactUs = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto relative z-50">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.img
                        src={Arrow}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        whileHover={{ scale: 1.2 }}
                        alt="Arrow"
                        className="absolute top-48 xs:top-52 sm:top-[180px] md:top-36 xl:top-44 right-3 sm:right-7 md:right-4 xl:right-16 z-50 w-[40px] h-[50px] md:w-auto md:h-auto" />
                    <img src={Vector3} alt="Vector" className="absolute top-48 xs:top-56 sm:top-[180px] lg:top-[150px] xl:top-40 left-2 sm:left-2 lg:left-20 xl:left-28 z-50 w-[60px] h-[35px] sm:w-[80px] sm:h-[45px] lg:w-auto lg:h-auto" />
                    <motion.span
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        whileHover={{ scale: 1.2 }}
                        className="absolute top-20 sm:top-24 left-4 sm:left-16 h-5 sm:w-8 sm:h-8 xl:h-10 w-5 xl:w-10 rounded-full bg-[#696D5C]"></motion.span>
                    <span className="absolute top-0 sm:top-12 right-4 sm:right-24 h-3 w-3 rounded-full bg-[#696D5C]"></span>
                    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 w-[300px] xs:w-[400px] sm:w-[540px] mx-auto">
                        <h1 className="font-anton text-[52px] xs:text-[68px] sm:text-[72px]">Contact US</h1>
                        <p className="text-base xs:text-lg font-aileron text-center">
                            The online marketing specialists from STRMZ, who suit you and your company for generating your online objectives.
                        </p>
                    </div>
                </motion.div>
                <div className='relative bg-[#24261F] mx-auto w-[300px] xs:w-[400px] sm:w-[620px] md:w-[746px] lg:w-[1000px] xl:w-[1240px] h-[1130px] xs:h-[1180px] sm:h-[1130px] lg:h-[1205px] rounded-3xl my-[30px] xs:my-[50px] md:my-[100px] lg:my-40 overflow-hidden'>
                    <img src={Logo} alt="Logo" className="absolute -bottom-[42px] xs:-bottom-16 sm:-bottom-24 md:-bottom-28 lg:-bottom-36 xl:-bottom-48 left-3  xs:left-4 sm:left-[28px] md:left-[30px] lg:left-[38px] xl:left-12 z-50 w-auto h-auto" />
                    <div className='relative mt-16 xl:mt-28'>
                        <h1 className='font-anton text-[24px] xs:text-[28px] sm:text-[44px] lg:text-[52px] text-white text-center mb-8 xl:mb-12'>REQUEST A QUOTE FOR WORK</h1>
                        <div className='w-[280px] xs:w-[380px] sm:w-[600px] md:w-[700px] lg:w-[950px] xl:w-[1030px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <input type='text' placeholder='Enter Your Location' className='w-full xl:w-[503px] h-[61px] rounded-xl p-2 pl-6 focus:outline-none placeholder:font-aileron placeholder:font-light placeholder:text-[#222222]' />
                            <input type='text' placeholder='ZIP Code' className='w-full xl:w-[503px] h-[61px] rounded-xl p-2 pl-6 focus:outline-none placeholder:font-aileron placeholder:font-light placeholder:text-[#222222]' />
                            <input type='text' placeholder='First Name' className='w-full xl:w-[503px] h-[61px] rounded-xl p-2 pl-6 focus:outline-none placeholder:font-aileron placeholder:font-light placeholder:text-[#222222]' />
                            <input type='text' placeholder='Last Name' className='w-full xl:w-[503px] h-[61px] rounded-xl p-2 pl-6 focus:outline-none placeholder:font-aileron placeholder:font-light placeholder:text-[#222222]' />
                            <input type='text' placeholder='Email' className='w-full xl:w-[503px] h-[61px] rounded-xl p-2 pl-6 focus:outline-none placeholder:font-aileron placeholder:font-light placeholder:text-[#222222]' />
                            <input type='text' placeholder='Mobile' className='w-full xl:w-[503px] h-[61px] rounded-xl p-2 pl-6 focus:outline-none placeholder:font-aileron placeholder:font-light placeholder:text-[#222222]' />
                            <input type='text' placeholder='Subject, Scope of work' className='sm:col-span-2 w-full h-[61px] rounded-xl p-2 pl-6 focus:outline-none placeholder:font-aileron placeholder:font-light placeholder:text-[#222222]' />
                            <textarea placeholder='Message' className='sm:col-span-2 w-full h-[262px] rounded-xl p-2 pt-4 pl-6 focus:outline-none placeholder:font-aileron placeholder:font-light placeholder:text-[#222222] resize-none' />
                            <button className='sm:col-span-2 w-[250px] xs:w-[350px] sm:w-[550px] h-[60px] xs:h-[66px] mx-auto bg-[#CBE26B] text-[#1E1E1E] font-aileron font-semibold rounded-full mt-6 xl:mt-10'>Send A Message</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};
export default ContactUs;