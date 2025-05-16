import React from 'react';
import { Check } from "lucide-react";
import HeaderLine from "../Images/Vector.png";
import ServiceImage from "../Images/Service-Section3Img.png";
const ThirdSectionServices = () => {
    return (
        <div className="py-10 sm:py-20 md:py-[100px] w-full z-50">
            <div className="max-w-7xl mx-auto lg:flex lg:justify-between lg:items-center">
                <div style={{ backgroundImage: `url(${ServiceImage})`, backgroundRepeat: 'no-repeat' }} className="bg-contain lg:mt-28 xl:mt-0 w-[300px] h-[248px] xs:w-[400px] xs:h-[328px] sm:w-[542px] sm:h-[440px] md:h-[445px] lg:w-[450px] lg:h-[369px] xl:w-[707px] xl:h-[580px] mx-auto">
                </div>
                <div className="space-y-6 xs:space-y-7 lg:space-y-7 w-[300px] xs:w-[400px] sm:w-[542px] lg:w-[424px] mx-auto mt-5 lg:mt-0">
                    <div className='relative xs:w-[343px] sm:w-[372px]'>
                        <h1 className='font-anton text-[36px] xs:text-[48px] sm:text-[52px]'>WHY LET US CREATE</h1>
                        <img src={HeaderLine} className='absolute right-9 bottom-0 xs:-right-2 w-[107px] xs:w-[140px] sm:w-[150px]' />
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
                        <button className='bg-[#24261F] text-[#FFFFFF] hover:text-[#24261F] hover:bg-[#CBE26B] transition duration-500 font-aileron font-semibold rounded-full text-base sm:text-lg w-[300px] xs:w-[400px] sm:w-[424px] h-[66px]'>Have your website created by professionals</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ThirdSectionServices;