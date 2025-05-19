import React, { useState, useEffect } from 'react';
import { Check } from "lucide-react";
import { motion } from 'framer-motion';
import HeaderLine from "../Images/Vector.png";
import InvertCircle from "../Images/InvertCircle.png";
import ServiceImage from "../Images/ServiceImage.png";
const SecondSectionServices = () => {
    const [firstlineWidth, setFirstLineWidth] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 640) {
                setFirstLineWidth('160px');       // sm
            }
            else if (width >= 425) {
                setFirstLineWidth('110px');       // xs
            }
            else {
                setFirstLineWidth('90px');       // base
            }
        };

        handleResize(); // Set on initial load
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="bg-[#24261F] py-[50px] md:py-[100px] w-full z-50 mt-[30px] md:mt-[60px]">
            <div className="max-w-7xl mx-auto grid justify-items-center lg:grid-cols-[542px_auto] px-2 xl:grid-cols-2 gap-10 lg:gap-5 xl:gap-10">
                <div className="relative order-1">
                    <h1 className="relative font-anton text-white text-[28px] xs:text-[36px] sm:text-[52px] w-[300px] xs:w-[400px] sm:w-[542px] z-10">START YOUR ONLINE GROWTH IN 4 SIMPLE STEPS.</h1>
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
                        className="absolute top-9 left-[205px] xs:top-[44px] xs:left-[265px]  sm:top-16 sm:left-96 w-[90px] xs:w-[110px] sm:w-[160px] h-[10px]" />
                    <motion.img
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        src={InvertCircle}
                        alt="InvertCircle"
                        className="absolute top-12 left-5 xs:top-[58px] xs:left-6 sm:top-[86px] sm:left-8 h-8 w-7 xs:h-[44px] xs:w-10 sm:h-auto sm:w-auto -z-0" />
                </div>
                <div className="lg:h-[220px] xl:h-[156px] lg:flex lg:justify-center lg:items-center order-2">
                    <p className="w-[300px] xs:w-[400px] sm:w-[542px] md:w-[542px] lg:w-[400px] xl:w-[542px] text-[18px] text-[#9B9A99]">Our job is to ensure that visitors can easily navigate through your website, easily find what they are looking for and have a positive experience. This is crucial because a well-designed website can improve the efficiency of your business, strengthen your brand image and even boost your sales.</p>
                </div>
                <div className="space-y-6 xs:space-y-7 lg:space-y-10 w-[300px] xs:w-[400px] sm:w-[542px] mx-auto sm:mx-0 order-4 lg:order-3">
                    <div className="flex items-center space-x-4 inline-flex">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="text-white font-aileron w-[220px] xs:w-[330px] sm:w-[371px] sm:text-[18px] xs:text-[20px] sm:text-[22px]">Increase your online visibility</p>
                    </div>
                    <div className="flex items-center space-x-4 inline-flex">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="text-white font-aileron w-[220px] xs:w-[330px] sm:w-[371px] sm:text-[18px] xs:text-[20px] sm:text-[22px]">Improved customer experiences</p>
                    </div>
                    <div className="flex items-center space-x-4 inline-flex">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="text-white font-aileron w-[220px] xs:w-[330px] sm:w-[435px] lg:w-[371px] sm:text-[18px] xs:text-[20px] sm:text-[22px]">Can be used for mobile, laptop and monitors</p>
                    </div>
                    <div className="flex items-center space-x-4 inline-flex">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="text-white font-aileron w-[220px] xs:w-[330px] sm:w-[371px] sm:text-[18px] xs:text-[20px] sm:text-[22px]">Build a strong brand identity</p>
                    </div>
                    <div className="flex items-center space-x-4 inline-flex">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="text-white font-aileron w-[220px] xs:w-[330px] sm:w-[371px] sm:text-[18px] xs:text-[20px] sm:text-[22px]">Website with a reliable appearance</p>
                    </div>
                    <div className="flex items-center space-x-4 inline-flex">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="text-white font-aileron w-[220px] xs:w-[330px] sm:w-[371px] sm:text-[18px] xs:text-[20px] sm:text-[22px]">Conversion focused</p>
                    </div>
                    <div className='pt-3'>
                        <button className='relative overflow-hidden bg-[#CBE26B] text-[#1E1E1E] font-aileron rounded-full text-lg w-[268px] h-[66px] group'>
                            <span className="absolute top-0 left-0 h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                            <span className='relative z-10 group-hover:text-[#24261F] transition-all duration-500 ease-out'>Free Advice</span>
                        </button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${ServiceImage})`, backgroundRepeat: 'no-repeat' }} className="bg-contain mt-0 lg:mt-28 xl:mt-0 w-[300px] h-[246px] xs:w-[400px] xs:h-[328px] sm:w-[542px] sm:h-[440px] md:h-[445px] lg:w-[450px] lg:h-[369px] xl:w-[732px] xl:h-[600px] order-3 lg:order-4 xl:mr-24">
                </div>
            </div>
        </div>
    );
};
export default SecondSectionServices;