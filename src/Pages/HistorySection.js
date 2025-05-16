import React from "react";
import { motion } from "framer-motion";
import Money from "../Images/Rasing more than - $700M.png";
import Projects from "../Images/Projects Completed - 50+.png";
import WhiteStar from "../Images/Star 3.png";
import HistoryCircle from "../Images/ProjectCircle.png";

const HistorySection = () => {
  return (
    <div className="bg-[#24261F]">
      <div className="max-w-7xl mx-auto h-[50px] sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[140px] w-[310px] sm:w-[620px] md:w-[746px] lg:w-auto  xl:h-[141px] flex justify-between items-center">
        <img src={WhiteStar} alt="WhiteStar" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:h-auto xl:w-auto hidden sm:block" />
        <div className="relative">
          <img src={Projects} alt="Projects" className=" relative h-auto w-[150px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] z-10" />
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
            src={HistoryCircle}
            alt="HistoryCircle"
            className="absolute -z-0 -top-1 -right-1 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 lg:-right-5 xl:-right-6 w-[28px] h-[20px] sm:w-[55px] sm:h-[50px] md:w-[68px] md:h-[60px] lg:w-[90px] lg:h-[80px] xl:w-[110px] xl:h-[88px]" />
        </div>
        <img src={WhiteStar} alt="WhiteStar" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:h-auto xl:w-auto" />
        <div className="relative">
          <img src={Money} alt="Projects" className="relative z-10 h-auto w-[150px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px]" />
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
            src={HistoryCircle}
            alt="HistoryCircle"
            className="absolute -z-0 -top-1 -right-1 sm:-top-3 md:-top-3 md:-right-2 lg:-right-2 xl:-right-4 w-[45px] h-[20px] sm:w-[85px] sm:h-[40px] md:w-[90px] md:h-[55px] lg:w-[123px] lg:h-[63px] xl:w-[163px] xl:h-[85px]" />
        </div>
        <img src={WhiteStar} alt="WhiteStar" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:h-auto xl:w-auto hidden sm:block" />
      </div>
    </div>
  );
};
export default HistorySection;