import React, { useState, useEffect } from 'react';
import { Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Vector3 from '../Images/Vector3.png';
import Arrow from '../Images/Vector1.png';
import Circle from '../Images/circle.png';
import HeaderLine from '../Images/Vector.png';
const TrialSection = () => {
    const [firstlineWidth, setFirstLineWidth] = useState('80px');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setFirstLineWidth('150px');       // lg and above
            }
            else if (width >= 768) {
                setFirstLineWidth('142px');       // md and above
            } else if (width >= 640) {
                setFirstLineWidth('130px');       // sm
            }
            else {
                setFirstLineWidth('80px');       // base
            }
        };

        handleResize(); // Set on initial load
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='w-full relative sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] xxl:h-[554px]'>
            <h1 className='absolute font-anton inset-0 text-[55px] sm:text-[85px] md:text-[100px] lg:text-[135px] xl:text-[170px] xxl:text-[198px] text-center text-[#F3F3F3] hidden xs:block'>FREE INTRODUCTION.</h1>
            <h1 className='absolute font-anton top-20 sm:top-28 md:top-32 lg:top-44 xl:top-48 xxl:top-52 right-0 left-0 text-[55px] sm:text-[85px] md:text-[100px] lg:text-[135px] xl:text-[170px] xxl:text-[198px] text-center text-[#F3F3F3] hidden xs:block'>MEET STRMZ.</h1>
            <div className='max-w-7xl mx-auto relative flex justify-center items-center flex-col h-[400px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] xxl:h-[554px]'>
                <img src={Vector3} alt="Vector3" className='absolute top-64 xs:top-24 sm:top-32 md:top-44 lg:top-52 xl:top-64 left-1 md:left-10 lg:left-32 xl:left-20 w-[60px] h-[35px] sm:w-[80px] sm:h-[45px] lg:w-auto lg:h-auto' />
                <motion.img
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{
                        type: "spring",
                        bounce: 0.8,     // controls the bounciness (0 to 1)
                        duration: 0.8,   // how long the animation takes
                        delay: 0.3,      // delay before it starts
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={Arrow}
                    alt="Arrow"
                    className='absolute top-2 xs:top-0 md:top-1 lg:top-10 xl:top-16 right-1 md:right-2 lg:right-20 xl:right-32 w-[40px] h-[50px] sm:w-[50px] sm:h-[60px] md:w-[60px] md:h-[70px]lg:w-[78px] lg:h-[89px]' />
                <div className='relative xl:-mt-10'>
                    <h1 className='relative font-anton w-[320px] xs:w-auto text-center text-[28px] sm:text-[43px] md:text-[48px] lg:text-[52px]'>Online Growth For Your Company</h1>
                    <motion.img
                        initial={{ width: 0 }} // Starts with 0 width
                        whileInView={{ width: firstlineWidth }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                        viewport={{ once: true }}
                        src={HeaderLine}
                        alt="HeaderLine"
                        className='absolute left-28 xs:left-[75px] xs:left-28 md:left-32 lg:left-36 top-[34px] sm:top-[52px] md:top-[58px] lg:top-16' />
                </div>
                <div className='relative'>
                    <h1 className='relative z-10 font-anton text-[28px] sm:text-[43px] md:text-[48px] xl:text-[52px]'>Start Your Trial Period</h1>
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
                        alt="Circle"
                        className='absolute -z-0 top-1 xl:top-2 right-[71px] sm:right-[123px] md:right-[119px] xl:right-32 w-[65px] sm:w-[97px] md:w-[110px] xl:w-[124px]' />
                </div>
                <div className='flex justify-between items-center flex-col xs:flex-row xs:w-[361px] mt-5'>
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
                    <button className="relative overflow-hidden font-aileron font-semibold bg-[#CBE26B] w-[141px] h-[54px] rounded-full mt-5 xs:mt-0 group">
                        {/* Expanding background circle */}
                        <span className="absolute top-1/2 left-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full transition-all duration-500 ease-out group-hover:w-64 group-hover:h-64 z-0"></span>

                        {/* Button text */}
                        <span className="relative z-10 text-black group-hover:text-white transition duration-500">
                            Get Started
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};
export default TrialSection;