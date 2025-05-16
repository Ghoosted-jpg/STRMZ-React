import React from "react";
import { motion } from "framer-motion";
import HeaderLine from "../Images/Vector.png";
import Arrow from "../Images/Vector1.png";
import Vector3 from "../Images/Vector3.png";
import SecondSectionServices from "./SecondSection-Services";
import ThirdSectionServices from "./ThirdSection-Services";
import TrialSection from "./TrialSection";
import ContactUsSection from "./ContactUsSection";
import RecentWorkSection from "./RecentWorkSection";
import WorkingSection from "./WorkingSection";
import HistorySection from "./HistorySection";
import ServiceDetailSection from "./ServiceDetailSection";
const Services = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto">
                <div className="mt-5 lg:mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-[300px] xs:w-[400px] sm:w-[568px] mx-auto"
                    >
                        <h1 className="font-anton text-[36px] xs:text-[44px] sm:text-[68px] md:text-[72px] text-center">
                            WEBSITE DESIGN AND DEVELOPMENT
                        </h1>
                        <motion.img
                            src={HeaderLine}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute right-2 xs:right-7 sm:right-5 md:right-0 top-[44px] xs:top-[54px] sm:top-[80px] md:top-[88px] w-[110px] xs:w-[130px] sm:w-[200px] md:w-auto h-auto" />
                        <motion.img
                            src={Arrow}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            whileHover={{ scale: 1.2 }}
                            className="absolute -right-2 top-16 sm:-right-5 sm:top-28 md:-right-24 lg:-right-48 xl:-right-60 lg:top-28 w-[40px] h-[50px] sm:w-[68px] sm:h-[79px] md:w-auto md:h-auto"
                        />
                        <img src={Vector3} className="absolute -left-4 top-[60px] xs:-left-2 xs:top-[70px] sm:-left-5 sm:top-[110px] md:-left-16 lg:-left-40 xl:-left-60 lg:top-28 w-[60px] h-[35px] sm:w-[80px] sm:h-[50px] md:w-auto md:h-auto" />
                        <motion.span
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            whileHover={{ scale: 1.2 }}
                            className="absolute -top-4 -left-2 xs:-left-2 sm:-left-8 md:-left-20 md:-top-4 lg:-left-48 lg:top-8 xl:top-4 xl:-left-72 h-5 sm:w-8 sm:h-8 xl:h-10 w-5 xl:w-10 rounded-full bg-[#696D5C]"
                        />

                        <span className="absolute -top-6 -right-2 xs:-right-2 lg:-right-32 lg:top-2 xl:-right-64 h-3 w-3 rounded-full bg-[#696D5C]"></span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className=" relative w-[250px] xs:w-[350px] sm:w-[540px] mx-auto mb-10 mt-4 xs:mt-2"
                    >
                        <p className="text-center font-aileron font-light text-base xl:text-lg">
                            The online marketing specialists from STRMZ, who suit you and your company for generating your online objectives.
                        </p>
                        <span className="absolute -top-5 left-2 sm:-top-3 sm:left-6 xl:left-3 xl:-top-5 bg-black w-3 h-3 rounded-full"></span>
                        <span className="absolute -bottom-6 right-12 xs:right-20 sm:right-24 xl:right-12 bg-[#626262] w-5 h-5 rounded-full"></span>
                    </motion.div>

                </div>
            </div>
            <SecondSectionServices />
            <ThirdSectionServices />
            <RecentWorkSection/>
            <WorkingSection/>
            <HistorySection/>
            <ServiceDetailSection/>
            <div className="bg-[#F3F3F2] pt-[37px] lg:pt-[74px] pb-[34px]">
                <ContactUsSection />
            </div>
            <TrialSection />
        </div>
    );
};

export default Services;