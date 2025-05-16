import React from "react";
import { MoveUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import BigFolder from "../Images/BigFolder.png";
import Arrow from "../Images/Vector1.png";
import WhiteFolder from "../Images/AboutUsWhiteFolder.png";
import GradientFolder from "../Images/AboutUsGradientFolder.png";
import Circle from "../Images/circle.png";
import CodeBrowser from "../Images/code-browser.png";
import MegaPhone from "../Images/megaphone.png";
import Browser from "../Images/Broswer.png";
const OnlineMarketingAgencySection = () => {
    return (
        <div className="w-full bg-[#E7E6E2] py-10 xs:py-20 lg:pb-40 xl:py-40 mt-20">
            <div style={{ backgroundImage: `url(${BigFolder})` }} className="relative max-w-7xl mx-auto mx-auto w-[300px] h-auto xs:w-[400px] sm:w-[620px] md:w-[746px] lg:w-[980px] xl:w-[1240px] xl:h-[1040px] bg-contain xl:bg-cover xl:bg-right bg-no-repeat xl:rounded-tr-[34px] xl:rounded-tl-[34px] xl:sm:rounded-bl-[34px] grid grid-cols-1 sm:grid-cols-2 justify-items-center content-center gap-y-10 xl:gap-x-4 pb-10">
                <span className="absolute bg-[#FFFFFF] h-[1600px] w-[300px] xs:w-[400px] xs:h-[1500px] sm:h-[980px] sm:w-[620px] md:h-[870px] md:w-[746px] lg:w-[980px] lg:h-[900px] top-40 md:top-48 rounded-b-xl xl:hidden"></span>
                <div className="relative w-[300px] sm:w-[350px] lg:w-[473px] xl:w-[544px] mt-12 lg:mt-16 xl:mt-24 sm:ml-20 md:ml-2">
                    <h1 className="relative z-10 font-anton text-center sm:text-left text-[20px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[52px] w-[280px] sm:w-auto lg:w-[473px]">WHY ONLINE MARKETING AGENCY STRMZ?</h1>
                    <motion.img
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [1, 0.8, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        src={Circle}
                        alt="Circle"
                        className="absolute -z-0 top-0 left-[57px] xs:left-[64px] sm:left-16 md:left-16 lg:left-24 w-[54px] xs:w-[79px] sm:w-24 md:w-28 lg:w-auto md:h-auto" />
                </div>
                <motion.img
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{
                        type: "spring",
                        bounce: 0.8,     // controls the bounciness (0 to 1)
                        duration: 0.8,   // how long the animation takes
                        delay: 0.4,      // delay before it starts
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={Arrow}
                    alt="Arrow"
                    className="sm:w-[58px] sm:h-[68px] lg:w-[78px] lg:h-[88px] sm:mt-16 sm:ml-32 lg:mt-24 lg:ml-40 xl:mt-36 xl:ml-60 hidden sm:block" />
                <div style={{ backgroundImage: `url(${WhiteFolder})` }} className="relative w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[544px] xl:h-[385px] bg-contain xl:bg-cover bg-no-repeat xl:p-8">
                    <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                        <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F] absolute top-4 lg:top-10 left-3 xs:left-6">
                        <img src={CodeBrowser} alt="CodeBrowser" className="absolute w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <h1 className="font-anton text-[20px] md:text-[28px] px-4 pt-4 pb-2 xs:px-8 xs:pt-5 xs:pb-3 lg:px-8 lg:pt-8 xl:pt-2 xl:pb-4 xl:px-0 mt-12 lg:mt-16">TOGETHER ON THE ROAD TO ONLINE SUCCESS.</h1>
                    <p className="px-4 pb-5 xs:px-8 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl md:pr-4 lg:w-[470px] xl:w-[349px] xl:rounded-none xl:bg-transparent lg:pb-4 xl:p-0">Together on the road to online success.We guarantee the continuity of the organization by structurally growing the online results of our customers. STRMZ stands for results-oriented online marketing in understandable language with the aim of optimally positioning companies online.</p>
                </div>
                <div style={{ backgroundImage: `url(${WhiteFolder})` }} className="relative w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[544px] xl:h-[385px] bg-contain xl:bg-cover bg-no-repeat xl:p-8">
                    <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                        <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F] absolute top-4 lg:top-10 left-3 xs:left-6">
                        <img src={MegaPhone} alt="CodeBrowser" className="absolute w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <h1 className="font-anton text-[20px] md:text-[28px] px-4 pt-4 pb-2 xs:px-8 xs:pt-5 xs:pb-3 lg:px-8 lg:pt-8 xl:px-0 xl:pt-2 xl:pb-4 mt-12 lg:mt-16">DRIVEN PROFESSIONALS</h1>
                    <p className="px-4 pb-5 xs:px-8 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl md:pr-4 lg:w-[470px] xl:w-[480px] xl:rounded-none xl:bg-transparent lg:pb-4 xl:p-0">There work at STRMZ. driven professionals who are very involved and love working on online marketing. A critical and idiosyncratic view is necessary to stay ahead. By sharing and continuously broadening our knowledge, we become wiser every day and remain a leader in the market. Thanks to our workshops, lectures and traineeships, we remain at the forefront of innovation and knowledge in online marketing.</p>
                </div>
                <div style={{ backgroundImage: `url(${WhiteFolder})` }} className="relative w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[544px] xl:h-[298px] bg-contain xl:rounded-bl-3xl xl:rounded-br-3xl xl:bg-cover bg-no-repeat lg:p-8">
                    <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                        <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F] absolute top-4 lg:top-10 left-3 xs:left-6">
                        <img src={Browser} alt="CodeBrowser" className="absolute w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <h1 className="font-anton text-[20px] md:text-[28px] px-4 pt-4 pb-2 xs:px-8 xs:pt-5 xs:pb-3 lg:p-0 xl:px-0 xl:pt-2 xl:pb-4  mt-12 lg:mt-16">TRELIABLE PARTNER IN ONLINE MARKETING.</h1>
                    <p className="px-4 pb-5 xs:px-8 lg:px-0 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl md:pr-4 lg:w-[403px] xl:w-[480px]  xl:rounded-none xl:bg-transparent lg:pb-4 xl:p-0">The online findability of companies has never been more important. That is why every company needs a reliable online marketing partner who gets maximum returns from every online campaign.</p>
                </div>
                <div style={{ backgroundImage: `url(${GradientFolder})` }} className="relative w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px]  lg:w-[470px] xl:w-[544px] xl:h-[298px] bg-right bg-cover bg-no-repeat p-4 xl:p-8 rounded-tl-3xl rounded-bl-3xl">
                    <div className="flex items-center space-x-4 inline-flex mb-4 w-[200px] xs:w-[280px] sm:w-[180px] lg:w-[390px] xl:w-[403px] sm:pt-4">
                        <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                            <Check className="text-[#24261F] w-6 h-6" />
                        </div>
                        <p className="lg:text-lg font-aileron text-[#F3F3F2] inline-flex">Know exactly who we are and what we do.</p>
                    </div>
                    <div className="flex items-center space-x-4 inline-flex mb-4 lg:w-[403px]">
                        <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                            <Check className="text-[#24261F] w-6 h-6" />
                        </div>
                        <p className="lg:text-lg font-aileron text-[#F3F3F2]">Working closely as a team for your company</p>
                    </div>
                    <div className="flex items-center space-x-4 inline-flex mb-4 lg:w-[403px]">
                        <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                            <Check className="text-[#24261F] w-6 h-6" />
                        </div>
                        <p className="lg:text-lg font-aileron text-[#F3F3F2]">Result-oriented online marketing</p>
                    </div>
                    <div className="flex items-center space-x-4 inline-flex lg:w-[403px]">
                        <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                            <Check className="text-[#24261F] w-6 h-6" />
                        </div>
                        <p className="lg:text-lg font-aileron text-[#F3F3F2]">The right specialists in every area of online marketing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OnlineMarketingAgencySection;