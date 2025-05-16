import React from "react";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import TrialSection from "./TrialSection";
import Testimonials from "./Testimonials";
import ContactUsSection from "./ContactUsSection";
import HistorySection from "./HistorySection";
import Arrow from "../Images/Vector1.png";
import Vector3 from "../Images/Vector3.png";
import ContactUsHeaderImage from "../Images/AboutUsHeaderImg.png";
import OnlineMarketingAgencySection from "./OnlineMarketingAgencySection";


const About = () => {
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
                        className="absolute top-48 xs:top-52 sm:top-[194px] md:top-36 xl:top-44 right-3 sm:right-7 md:right-4 xl:right-16 z-50 w-[40px] h-[50px] md:w-auto md:h-auto" />
                    <img src={Vector3} alt="Vector" className="absolute top-52 xs:top-56 sm:top-[290px] xl:top-96 left-2 sm:left-1 lg:left-16 lg:top-40 xl:left-0 z-50 w-[60px] h-[35px] lg:w-auto lg:h-auto" />
                    <motion.span
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        whileHover={{ scale: 1.2 }}
                        className="absolute top-20 sm:top-24 left-4 sm:left-16 h-5 sm:w-8 sm:h-8 xl:h-10 w-5 xl:w-10 rounded-full bg-[#696D5C]">
                    </motion.span>
                    <span className="absolute top-0 sm:top-12 right-4 sm:right-24 h-3 w-3 rounded-full bg-[#696D5C]"></span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 w-[300px] xs:w-[400px] sm:w-[540px] mx-auto">
                    <h1 className="font-anton text-[52px] xs:text-[68px] sm:text-[72px]">ABOUT US</h1>
                    <p className="text-base xs:text-lg font-aileron text-center">
                        The online marketing specialists from STRMZ, who suit you and your company for generating your online objectives.
                    </p>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={ContactUsHeaderImage} alt="About Us Header" className="mx-auto w-[268px] xs:w-[368px] sm:w-[492px] md:w-[600px] lg:w-auto lg:h-auto" />
            </div>
            <OnlineMarketingAgencySection />
            <HistorySection />
            <Testimonials />
            <div className="bg-[#F3F3F2] pt-[74px] pb-[34px]">
                <ContactUsSection />
            </div>
            <TrialSection />

        </div>
    );
};
export default About;