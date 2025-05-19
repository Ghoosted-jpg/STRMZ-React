import React, { useEffect, useState } from 'react';
import { Check } from "lucide-react";
import { motion } from 'framer-motion';
import HeaderLine from "../Images/Vector.png";
import ServiceImage from "../Images/Service-Section3Img.png";
const ThirdSectionServices = () => {
    const [firstlineWidth, setFirstLineWidth] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 640) {
                setFirstLineWidth('150px');       // sm
            }
            else if (width >= 425) {
                setFirstLineWidth('140px');       // xs
            }
            else {
                setFirstLineWidth('107px');       // base
            }
        };

        handleResize(); // Set on initial load
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="py-10 sm:py-20 md:py-[100px] w-full z-50">
            <div className="max-w-7xl mx-auto lg:flex lg:justify-between lg:items-center">
                <div style={{ backgroundImage: `url(${ServiceImage})`, backgroundRepeat: 'no-repeat' }} className="bg-contain lg:mt-28 xl:mt-0 w-[300px] h-[248px] xs:w-[400px] xs:h-[328px] sm:w-[542px] sm:h-[440px] md:h-[445px] lg:w-[450px] lg:h-[369px] xl:w-[707px] xl:h-[580px] mx-auto">
                </div>
                <div className="space-y-6 xs:space-y-7 lg:space-y-7 w-[300px] xs:w-[400px] sm:w-[542px] lg:w-[424px] mx-auto mt-5 lg:mt-0">
                    <div className='relative xs:w-[343px] sm:w-[372px]'>
                        <h1 className='font-anton text-[36px] xs:text-[48px] sm:text-[52px]'>WHY LET US CREATE</h1>
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
                            className='absolute left-[158px] bottom-0 xs:left-[213px] sm:left-[230px]' />
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="font-aileron font-bold sm:text-[18px] xs:text-[20px] sm:text-[22px]">Conversion focused</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="font-aileron font-bold sm:text-[18px] xs:text-[20px] sm:text-[22px]">Continuous flow to customers</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="font-aileron font-bold sm:text-[18px] xs:text-[20px] sm:text-[22px]">Mobile friendly</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="font-aileron font-bold sm:text-[18px] xs:text-[20px] sm:text-[22px]">Personal design</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="font-aileron font-bold sm:text-[18px] xs:text-[20px] sm:text-[22px]">Score high in Google</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="font-aileron font-bold sm:text-[18px] xs:text-[20px] sm:text-[22px]">Fast delivery</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="font-aileron font-bold sm:text-[18px] xs:text-[20px] sm:text-[22px]">Support after delivery</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-[42px] w-[42px] bg-[#CBE26B] rounded-full flex justify-center items-center">
                            <Check className="text-[#24261F] w-[22px] h-[22px]" />
                        </div>
                        <p className="font-aileron font-bold sm:text-[18px] xs:text-[20px] sm:text-[22px]">Automatic updates</p>
                    </div>
                    <div className='pt-4'>
                        <button className='relative overflow-hidden bg-[#24261F] transition duration-500 font-aileron font-semibold rounded-full text-base sm:text-lg w-[300px] xs:w-[400px] sm:w-[424px] h-[66px] group'>
                            <span className="absolute top-0 left-0 h-full w-0 bg-[#CBE26B] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
                            <span className='relative z-10 text-[#FFFFFF] group-hover:text-[#24261F] transition-all duration-1000 ease-out'>Have your website created by professionals</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ThirdSectionServices;