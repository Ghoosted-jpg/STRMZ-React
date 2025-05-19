import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Headphones, Rocket, Calendar, Sparkle, Check, MoveUpRight, Plus, Minus } from "lucide-react";
import HeaderLine from '../Images/Vector.png';
import Vector3 from "../Images/Vector3.png"
import Avatar from '../Images/avatar.png';
import Avatar1 from '../Images/avatar-1.png';
import Avatar2 from '../Images/avatar-2.png';
import Avatar3 from '../Images/avatar-3.png';
import More from '../Images/more.png';
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../Images/Frame 18.png";
import logo2 from "../Images/Frame 19.png";
import logo3 from "../Images/Frame 20.png";
import logo4 from "../Images/Frame 21.png";
import logo5 from "../Images/Frame 22.png";
import logo6 from "../Images/Frame 23.png";
import Folder from "../Images/Subtract.png";
import circle from "../Images/circle.png";
import rectangle1 from "../Images/Rectangle 57.png";
import rectangle2 from "../Images/Rectangle 58.png";
import rectangle3 from "../Images/Rectangle 59.png";
import BigFolder from "../Images/BigFolder.png";
import WhiteFodler from "../Images/WhiteFolder.png";
import GradientFolder from "../Images/GradientFolder.png";
import Arrow from "../Images/Vector1.png";
import CodeBrowser from "../Images/code-browser.png";
import MegaPhone from "../Images/megaphone.png";
import Browser from "../Images/Broswer.png";
import PicFolder from "../Images/picfolder.png";
import InvertCircle from "../Images/InvertCircle.png";
import FaqCircle from "../Images/FaqCircle.png";
import vector3 from "../Images/Vector3.png";
import HistorySection from "./HistorySection";
import ContactUsSection from "./ContactUsSection";
import TestimonialsSlider from "./Testimonials";
import TrialSection from "./TrialSection";

import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
const rectangles = [rectangle1, rectangle2, rectangle3];

const scrollLeftToRight = {
  animate: {
    x: ["-100%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

// Right to left scroll (second row)
const scrollRightToLeft = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};
const Home = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [Faq1, SetFaq1] = useState(true);
  const [Faq2, SetFaq2] = useState(false);
  const [Faq3, SetFaq3] = useState(false);
  const [Faq4, SetFaq4] = useState(false);
  const faqRef = useRef(null);
  const location = useLocation();

  const textRef = useRef(null);
  const splitRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#faq") {
      faqRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    // Flag to check if animation has already run
    let hasAnimated = false;

    // Create SplitText instance once on mount
    splitRef.current = new SplitText(textRef.current, { type: "words" });

    // Setup Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true; // Prevent re-triggering

          // Revert previous animation if any
          animationRef.current && animationRef.current.revert();

          // Animate words when heading scrolls into view
          animationRef.current = gsap.from(splitRef.current.words, {
            y: -100,
            opacity: 0,
            rotation: "random(-80, 80)",
            duration: 0.7,
            ease: "back",
            stagger: 0.15,
          });

          // Optional: stop observing once animated
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      splitRef.current && splitRef.current.revert();
      animationRef.current && animationRef.current.revert();
      observer.disconnect();
    };
  }, []);



  const [firstlineWidth, setFirstLineWidth] = useState('118px');
  const [secondlineWidth, setSecondLineWidth] = useState('90px');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 768) {
        setFirstLineWidth('224px');       // md and above
        setSecondLineWidth('160px');
      } else if (width >= 640) {
        setFirstLineWidth('200px');       // sm
        setSecondLineWidth('160px');
      } else if (width >= 425) {
        setFirstLineWidth('150px');       // xs
        setSecondLineWidth('115px');
      } else {
        setFirstLineWidth('118px');       // base
        setSecondLineWidth('90px');
      }
    };

    handleResize(); // Set on initial load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Header Section START Here */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center flex-col relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            whileHover={{ scale: 1.2 }}
            className="absolute md:w-8 md:h-8 rounded-full bg-[#6A6C62] left-16 h-4 w-4 md:block hidden">
          </motion.div>
          <div className="absolute md:w-3 md:h-3 rounded-full bg-[#6A6C62] md:right-16 top-16 w-2 h-2 right-1"></div>
          <div className="relative mt-[30px] md:mt-[60px]">
            <h1 className="font-anton text-[#24261F] text-center text-[36px] xs:text-[46px] sm:text-[60px] md:text-[68px]  lg:text-[72px] w-[300px] xs:w-[360px] sm:w-[500px] md:w-[600px] lg:w-[650px]" ref={textRef}>DO YOU WANT MORE BRAND AWARENESS?</h1>
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
              className="absolute bottom-0 left-[90px] xs:left-[105px] sm:left-[145px] md:left-[185px] lg:left-[215px]" />
            <motion.img
              src={Arrow}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
              className="absolute -right-2 top-24 xs:-right-6 xs:top-28 sm:-right-16 sm:top-36 md:top-40 lg:-right-28 lg:top-40 xl:-right-60 w-[40px] h-[50px] sm:w-[68px] sm:h-[79px] md:w-auto md:h-auto"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center items-center">
          <div className="relative w-[240px] xs:w-[300px] sm:w-[400px] md:w-[500px] lg:w-[540px]">
            <div className="absolute h-3 w-3 rounded-full bg-black left-1 top-2 xs:left-4 sm:left-1 md:left-4"></div>
            <p className="text-aileron text-center text-base md:text-lg mt-4 md:w-auto w-60 xs:w-[300px] sm:w-[400px] md:w-[500px] lg:w-[540px] m-auto">The online marketing specialists from STRMZ, who suit you and your company for generating your online objectives.</p>
            <img src={Vector3} alt="Vector3" className="absolute -left-[35px] top-[115px] xs:-left-[56px] xs:top-[30px] sm:-left-24 sm:top-[40px] md:-left-32 lg:-left-40 xl:-left-72 lg:top-16 w-[60px] h-[35px] sm:w-[80px] sm:h-[50px] md:w-auto md:h-auto" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center items-center md:flex-row md:space-x-3 md:space-y-0 my-6 flex-col space-y-5">
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

          <div className="relative">
            <button className="relative overflow-hidden font-aileron bg-[#CBE26B] w-[185px] h-[54px] text-lg text-center rounded-full transition duration-500 group">
              {/* Expanding background on hover */}
              <span className="absolute top-1/2 left-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full transition-all duration-500 ease-out group-hover:w-64 group-hover:h-64 z-0"></span>

              {/* Button text */}
              <span className="relative z-10 text-black group-hover:text-white transition duration-500">
                Explore Services
              </span>
            </button>
            <span className="absolute rounded-full bg-[#6A6C62] w-4 h-4 top-0 -right-6"></span>
          </div>
        </motion.div>
        <div className="flex justify-center items-center mb-[30px] md:mb-[60px]">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              bounce: 0.8,     // controls the bounciness (0 to 1)
              duration: 0.8,   // how long the animation takes
              delay: 0.1,      // delay before it starts
            }}
            viewport={{ once: true }}
            src={Avatar}
            alt="Avatar"
            className="md:w-10 md:h-10 w-8 h-8" />
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              bounce: 0.8,     // controls the bounciness (0 to 1)
              duration: 0.8,   // how long the animation takes
              delay: 0.3,      // delay before it starts
            }}
            viewport={{ once: true }}
            src={Avatar1}
            alt="Avatar1"
            className="md:-ml-4 md:w-10 md:h-10 w-8 h-8 -ml-3" />
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              bounce: 0.8,     // controls the bounciness (0 to 1)
              duration: 0.8,   // how long the animation takes
              delay: 0.5,      // delay before it starts
            }}
            viewport={{ once: true }}
            src={Avatar2}
            alt="Avatar2"
            className="md:-ml-4 md:w-10 md:h-10 w-8 h-8 -ml-3" />
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              bounce: 0.8,     // controls the bounciness (0 to 1)
              duration: 0.8,   // how long the animation takes
              delay: 0.7,      // delay before it starts
            }}
            viewport={{ once: true }}
            src={Avatar3}
            alt="Avatar3"
            className="md:-ml-4 md:w-10 md:h-10 w-8 h-8 -ml-3" />
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              bounce: 0.8,     // controls the bounciness (0 to 1)
              duration: 0.8,   // how long the animation takes
              delay: 0.9,      // delay before it starts
            }}
            viewport={{ once: true }}
            src={More}
            alt="More"
            className="md:-ml-4 md:w-10 md:h-10 w-8 h-8 -ml-3" />
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
            viewport={{ once: true }}
            className=" font-aileron font-semibold text-sm md:ml-4 ml-1">1,618 Satisfied Clients.</motion.p>
        </div>
      </div>
      {/* Header Section END Here */}
      {/* Logo Section START Here */}
      <div className="w-full overflow-hidden my-[25px] md:my-[50px] max-w-7xl m-auto"
      >
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
          viewport={{ once: true }}
          className="font-aileron text-base xs:text-lg sm:text-[24px] md:text-[28px] md:leading-8 text-center font-bold pb-[51px]">Trusted by nearly 5000+ paying customers</motion.p>
        <motion.div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex w-max"
          animate={{ x: isPaused ? "0%" : ["0%", "-100%"] }}
          transition={{
            repeat: isPaused ? 0 : Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {/* Duplicating the logos to create a seamless loop effect */}
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index}`} className="md:h-16 w-auto object-contain h-8" />
          ))}
        </motion.div>
      </div>
      {/* Logo Section END Here */}
      {/* Card Section START Here */}
      <div className="flex md:justify-between md:flex-col lg:flex-row max-w-7xl m-auto flex-col justify-center items-center mt-[40px] mb-[40px] lg:mb-0 lg:mt-[100px]">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="xl:w-[392px] xl:h-[320px] lg:w-[330px] lg:h-[270px] md:w-[392px] md:h-[320px]  relative flex justify-center flex-col overflow-hidden m-auto mt-10 w-[300px] h-[245px] flex-shrink-0"
          style={{ backgroundImage: `url(${Folder})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center bg-black md:w-16 md:h-16 rounded-full absolute top-4 left-8 w-12 h-12">
            <Rocket className="absolute md:top-4 md:left-4 text-[#CBE26B] md:w-8 md:h-8 w-6 h-6 top-3 left-3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h1 className="font-anton md:text-[28px] w-[328px] p-2 md:pl-10 mt-2 text-[24px] pl-8 lg:mt-12">Online Growth for your Business</h1>
            <p className="font-aileron text-[#4C5041] md:pl-10 md:text-lg text-base pl-8 pr-5">The online marketing specialists from STRMZ, who suit you .</p>
            <Rocket className="absolute top-3/4 left-4 z-0 opacity-10 w-[196px] h-[150px] xl:w-[196px] xl:h-[150px] xl:top-3/4 lg:h-[140px] lg:w-[196px] lg:top-2/3" />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="xl:w-[392px] xl:h-[320px] lg:w-[330px] lg:h-[270px] md:w-[392px] md:h-[320px] relative flex justify-center flex-col overflow-hidden m-auto mt-10 w-[300px] h-[245px] flex-shrink-0"
          style={{ backgroundImage: `url(${Folder})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center bg-black md:w-16 md:h-16 rounded-full absolute top-4 left-8 w-12 h-12">
            <Calendar className="absolute md:top-4 md:left-4 text-[#CBE26B] md:w-8 md:h-8 w-6 h-6 top-3 left-3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h1 className="font-anton md:text-[28px] w-[328px] p-2 md:pl-10 z-10 text-[24px] pl-8">30 Days Trial Period!</h1>
            <p className="font-aileron text-[#4C5041] md:pl-10 z-10 md:text-lg text-base pl-8 pr-5">The online marketing specialists from STRMZ, who suit you .</p>
            <Calendar className="absolute top-2/3 left-4 z-0 opacity-10 w-[196px] h-[150px] xl:w-[196px] xl:h-[150px] xl:top-2/3 lg:h-[140px] lg:w-[196px]" />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="xl:w-[392px] xl:h-[320px] lg:w-[330px] lg:h-[270px] md:w-[392px] md:h-[320px] relative flex justify-center flex-col  overflow-hidden m-auto mt-10 w-[300px] h-[245px] flex-shrink-0"
          style={{ backgroundImage: `url(${Folder})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center bg-black md:w-16 md:h-16 rounded-full absolute top-4 left-8 w-12 h-12">
            <Sparkle className="absolute md:top-4 md:left-4 text-[#CBE26B] md:w-8 md:h-8 w-6 h-6 top-3 left-3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h1 className="font-anton md:text-[28px] p-2 md:pl-10 text-[24px] pl-8">30+ Satisfied Customers</h1>
            <p className="font-aileron text-[#4C5041] md:pl-10 md:text-lg text-base pl-8 pr-5">The online marketing specialists from STRMZ, who suit you.</p>
            <Sparkle className="absolute top-1/2 left-2/3 z-0 opacity-10 md:w-[196px] md:h-[196px] xl:w-[196px] xl:h-[196px] w-[155px] h-[155px] lg:h-[150px] lg:w-[150px]" />
          </motion.div>
        </motion.div>
      </div>
      {/* Card Section END Here */}
      {/*LEAD AWARENESS SECTION START HERE*/}
      <div className="bg-[#24261F] w-full lg:mt-[-150px]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative lg:pt-[230px] flex justify-between">
            <div className="relative lg:w-[1004px] md:w-[762px] p-2 pt-10 md:px-8 lg:px-0">
              <h1 className="relative z-10 text-white font-anton text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[52px] text-center inline md:text-left lg:p-0 lg:w-[1004px] xl:w-[1004px]">ARE YOU STUCK IN THE AREAS OF GROWTH IN LEADS, CONVERSIONS OR BRAND AWARENESS?</h1>
              <motion.img
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={circle}
                alt="Circle"
                className="absolute -z-0 top-[40px] left-20 xs:left-24 sm:left-[107px] md:left-[143px] lg:top-10 lg:left-[155px] w-[66px] xs:w-[73px] sm:w-[84px] md:w-[97px] lg:w-auto" />
            </div>
            <div className="absolute bottom-2 right-4 hidden lg:inline-flex">
              <div className="relative group overflow-hidden inline-flex items-center space-x-2 bg-white text-black w-[204px] py-2 rounded-full cursor-pointer">
                {/* Background Overlay */}
                <span className="absolute top-1/2 left-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 bg-[#CBE26B] rounded-full transition-all duration-500 ease-out group-hover:w-64 group-hover:h-64 z-0"></span>


                {/* Icon */}
                <div className="relative z-10 inline-flex items-center justify-center bg-[#CBE26B] rounded-full group-hover:bg-black transition duration-500 w-[38px] h-[38px] ml-2">
                  <Headphones className="w-[22px] h-[22px] text-black group-hover:text-white transition duration-500" />
                </div>

                {/* Text */}
                <Link
                  to="#"
                  className="relative z-10 pl-0 font-aileron text-lg transition duration-500"
                >
                  Schedule A Call
                </Link>
              </div>
            </div>


          </div>
        </div>
        <div className="flex justify-between lg:flex-row flex-col max-w-7xl mx-auto w-full mt-5 md:mt-10 lg:mt-16 lg:mb-[100px]">
          <div className="flex flex-col lg:w-[392px] px-2 md:px-8 lg:px-2 xl:px-0">
            <p className="font-aileron text-[#9B9A99] text-base md:text-lg">
              Do you feel that your company deserves more, but are you unable to take that next step in the online world? You are not alone. At STRMZ we know these challenges all too well.
            </p>
            <p className="font-aileron text-[#9B9A99] text-base md:text-lg  mt-5">
              We offer online marketing solutions that deliver real results. Whether it's attracting more visitors, converting leads or building your brand, we have the knowledge and experience to move your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 lg:w-[788px] mt-10 p-2 md:p-4 lg:p-0 lg:mt-0">
            <div className="flex items-center space-x-4 inline-flex md:p-4 lg:p-0">
              <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                <Check className="text-[#24261F] w-6 h-6" />
              </div>
              <p className="font-aileron text-base md:text-[22px] text-[#F3F3F2] inline-flex">Do you want to create a wide reach online?</p>
            </div>
            <div className="flex items-center space-x-4 inline-flex md:p-4 lg:p-0">
              <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                <Check className="text-[#24261F] w-6 h-6" />
              </div>
              <p className="font-aileron text-base md:text-[22px] text-[#F3F3F2]">Do you want to realize more leads & conversions?</p>
            </div>
            <div className="flex items-center space-x-4 inline-flex md:p-4 lg:p-0">
              <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                <Check className="text-[#24261F] w-6 h-6" />
              </div>
              <p className="font-aileron text-base md:text-[22px] text-[#F3F3F2]">Do you want to increase your turnover?</p>
            </div>
            <div className="flex items-center space-x-4 inline-flex md:p-4 lg:p-0">
              <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                <Check className="text-[#24261F] w-6 h-6" />
              </div>
              <p className="font-aileron text-base md:text-[22px] text-[#F3F3F2]">Do you score well on Google?</p>
            </div>
          </div>
        </div>
        {/* First Line */}
        <div className="mt-[30px] lg:mt-[50px] overflow-hidden pb-[30px] sm:pb-[100px] lg:pb-[201px]">
          {/* First Row: Left to Right */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              {/* Duplicated for smooth loop */}
              {[...rectangles, ...rectangles].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`row1-img-${idx}`}
                  className="object-contain rounded-xl h-56 w-56 lg:h-auto lg:w-auto"
                />
              ))}
            </motion.div>
          </div>

          {/* Second Row: Right to Left */}
          <div className="relative w-full overflow-hidden mt-[-40px] md:mt-4">
            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              {/* Duplicated for smooth loop */}
              {[...rectangles, ...rectangles].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`row2-img-${idx}`}
                  className="object-contain rounded-xl h-56 w-56 lg:h-auto lg:w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/*LEAD AWARENESS SECTION END HERE*/}
      {/*SERVICES SECTION START HERE*/} {/* WORK REHTA ISS KA */}
      <div className="w-full mt-[-1px] xs:mt-0 sm:pb-[101px]"
        style={{ background: 'linear-gradient(to bottom, #24261F 0%, #CBE26B 100%)' }}>
        <div style={{ backgroundImage: `url(${BigFolder})`, backgroundRepeat: 'no-repeat' }}
          className="relative max-w-7xl mx-auto bg-contain xl:bg-cover xl:bg-right w-[300px] xs:w-[400px] sm:w-[620px] md:w-[746px] lg:w-[1000px] lg:h-[847px] xl:w-auto xl:h-auto xl:rounded-tl-3xl xl:rounded-b-3xl pb-10">
          <span className="absolute bg-[#FFFFFF] h-[840px] w-[300px] xs:w-[400px] xs:h-[1030px] sm:h-[550px] sm:w-[620px] md:h-[580px] md:w-[746px] lg:w-[1000px] lg:h-[640px] top-40 md:top-48 rounded-b-xl xl:hidden"></span>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 lg:mr-5">
            <div className="mt-12 lg:mt-16 xl:mt-24 relative sm:ml-10 xl:ml-0">
              <h1 className="relative z-10 font-anton text-center sm:text-left text-[20px] xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[52px] w-[280px] sm:w-auto lg:w-[473px] xl:w-[520px] xl:mx-0">OUR SERVICES FOR YOUR ONLINE GROWTH</h1>
              <motion.img
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={circle}
                alt="Circle"
                className="absolute -z-0 top-0 left-16 xs:left-10 xs:-top-1 sm:left-16 md:left-16 lg:left-24 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-auto md:h-auto" />
            </div>
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
              className="sm:w-[58px] sm:h-[68px] lg:w-[78px] lg:h-[88px] sm:mt-16 sm:ml-32 lg:mt-24 lg:ml-40 xl:mt-36 xl:ml-60 hidden sm:block" />
            <div style={{ backgroundImage: `url(${WhiteFodler})` }}
              className="relative bg-no-repeat bg-contain lg:bg-right sm:ml-12 xl:ml-0 w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] lg:h-[229px] xl:w-[544px] p-4 xs:p-6 sm:p-4 md:p-6 lg:p-8">
              <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F]">
                <img src={CodeBrowser} alt="CodeBrowser" className="absolute w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h1 className="font-anton text-[20px] xs:text-[24px] sm:text-[20px] md:text-[24px] lg:text-[28px] py-2 xs:py-3 sm:py-2 md:py-3">HAVE A WEBSITE CREATED</h1>
              <p className="font-aileron text-base xs:text-lg sm:text-base md:text-lg -mx-4 xs:-mx-6 sm:-mx-4 md:-mx-6 px-4 xs:px-6 sm:px-4 md:px-6 pb-4 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl md:pr-4 lg:w-[349px] lg:rounded-none lg:bg-transparent lg:pb-0">Have a professional website/shop created by our specialists.</p>
            </div>
            <div style={{ backgroundImage: `url(${WhiteFodler})` }}
              className="bg-no-repeat bg-contain relative lg:bg-right w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] h-auto lg:w-[470px] lg:h-[229px] xl:w-[544px] p-4 xs:p-6 sm:p-4 md:p-6 lg:p-8">
              <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F]">
                <img src={MegaPhone} alt="MegaPhone" className="absolute w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h1 className="font-anton text-[20px] xs:text-[24px] sm:text-[20px] md:text-[24px] lg:text-[28px] py-2 xs:py-3 sm:py-2 md:py-3">SOCIAL MEDIA ADVERTISING</h1>
              <p className="font-aileron text-base xs:text-lg sm:text-base md:text-lg -mx-4 xs:-mx-6 sm:-mx-4 md:-mx-6 px-4 xs:px-6 sm:px-4 md:px-6 pb-4 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl md:pr-4 lg:w-[480px] lg:rounded-none lg:bg-transparent lg:pb-0">Expand your reach and increase conversions on the platforms where your customers are.</p>
            </div>
            <div style={{ backgroundImage: `url(${WhiteFodler})` }}
              className="bg-no-repeat bg-contain xl:bg-cover relative rounded-br-2xl rounded-bl-2xl sm:ml-12 xl:ml-0 w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] lg:h-[203px] xl:w-[544px] xl:h-[203px] p-4 xs:p-6 sm:p-4 md:p-6 lg:p-8">
              <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F]">
                <img src={Browser} alt="Browser" className="absolute w-8 h-8" />
              </div>
              <h1 className="font-anton text-[20px] xs:text-[24px] sm:text-[20px] md:text-[24px] lg:text-[28px] py-2 xs:py-3 sm:py-2 md:py-3">SEO</h1>
              <p className="font-aileron text-base xs:text-lg sm:text-base md:text-lg -mx-4 xs:-mx-6 sm:-mx-4 md:-mx-6 px-4 xs:px-6 sm:px-4 md:px-6 pb-4 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl md:pr-4 lg:w-[480px] lg:rounded-none lg:bg-transparent lg:pb-0">Get to #1 on Google and improve your online visibility.</p>
            </div>
            <div style={{ backgroundImage: `url(${GradientFolder})` }}
              className="bg-no-repeat bg-cover bg-right relative rounded-tl-2xl rounded-bl-2xl pb-4 w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] h-auto lg:w-[470px] lg:h-[260px] xl:w-[544px] xl:h-[260px] p-3 xs:p-6 sm:p-3 md:p-6 lg:p-8">
              <h1 className="text-[#F3F3F2] font-anton text-[20px] xs:text-[24px] sm:text-[20px] md:text-[24px] lg:text-[28px] w-[200px] xs:w-[250px] sm:w-[200px] md:w-[250px] lg:w-[420px] ">Not yet sure which service is best suited for your online growth?</h1>
              <p className="font-aileron text-base xs:text-lg sm:text-base md:text-lg text-[#F3F3F2] my-4">Schedule a free introductory meeting now!</p>
              <div className="relative group overflow-hidden inline-flex items-center space-x-2 bg-white text-white w-[204px] py-2 rounded-full cursor-pointer">
                {/* Expanding radial background from center */}
                <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#CBE26B] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out group-hover:w-[400px] group-hover:h-[400px] z-0"></span>

                {/* Icon container */}
                <div className="relative z-10 inline-flex items-center justify-center bg-[#CBE26B] rounded-full group-hover:bg-black transition duration-500 w-[38px] h-[38px] ml-2">
                  <Headphones className="w-[22px] h-[22px] text-black group-hover:text-white transition duration-500" />
                </div>

                {/* Text */}
                <Link
                  to="#"
                  className="relative z-10 pl-0 font-semibold text-black transition duration-500"
                >
                  Schedule A Call
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/*SERVICES SECTION END HERE*/}
      {/* HISTORY SECTION START HERE */}
      <HistorySection />
      {/* HISTORY SECTION END HERE */}
      <div className="bg-white my-[30px] md:my-[50px] lg:my-[100px] w-full">
        <div className="max-w-7xl xl:mx-auto grid lg:grid-cols-[542px_auto] pl-2 xl:grid-cols-2 gap-10 lg:gap-5 xl:gap-10">
          <div className="relative w-[300px] xs:w-[400px] sm:w-[542px] md:ml-4 lg:ml-0">
            <h1 className="relative font-anton text-[28px] xs:text-[36px] sm:text-[52px] z-10">START YOUR ONLINE GROWTH IN 4 SIMPLE STEPS.</h1>
            <motion.img
              initial={{ width: 0 }} // Starts with 0 width
              whileInView={{ width: secondlineWidth }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.5,
              }}
              viewport={{ once: true }}
              src={HeaderLine}
              alt="HeaderLine"
              className="absolute top-8 left-[204px] xs:left-[260px] sm:left-[381px] xs:top-[44px] xs:right-6 sm:top-16 sm:right-0 md:right-0 h-[10px]" />
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
              src={InvertCircle}
              alt="InvertCircle"
              className="absolute top-12 left-5 xs:top-[60px] xs:left-6 sm:top-[86px] sm:left-8 h-8 w-7  xs:w-10 xs:h-10 sm:h-auto sm:w-auto -z-0" />
          </div>
          <div className="md:ml-4 lg:ml-0">
            <p className="font-aileron w-[300px] xs:w-[400px] sm:w-[542px] lg:w-[400px] xl:w-[542px] text-base xs:text-[18px] text-[#9B9A99]">Cup of coffee? Schedule a free introductory meeting. We start with a no-obligation conversation to get to know you & your company better. Here we look at how your company can grow further.</p>
            <div className="relative flex items-center space-x-2 inline-flex bg-black text-white w-[204px] py-2 rounded-full group hover:bg-black cursor-pointer overflow-hidden mt-5">
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
          </div>
          <div className="">
            <div className="flex items-center space-x-4 inline-flex md:p-4 lg:p-0">
              <div className="relative h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                <Check className="text-[#24261F] w-6 h-6" />
                <span className="absolute w-[2px] h-6 top-12 bg-[#CBE26B]"></span>
                <span className="absolute w-[2px] h-6 top-24 bg-[#CBE26B]"></span>
              </div>
              <h1 className="font-anton text-[24px] xs:text-[28px] sm:text-[36px] inline-flex">Cup of Coffee?</h1>
            </div>
            <p className="font-aileron ml-[56px] w-[250px] xs:w-[350px] sm:w-[484px] xs:text-[18px] pb-5">Cup of coffee? Schedule a free introductory meeting. We start with a no-obligation conversation.</p>
            <div className="flex items-center space-x-4 inline-flex md:p-4 lg:p-0">
              <div className="relative h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                <Check className="text-[#24261F] w-6 h-6" />
                <span className="absolute w-[2px] h-6 top-12 bg-[#CBE26B]"></span>
                <span className="absolute w-[2px] h-6 top-24 bg-[#CBE26B]"></span>
              </div>
              <h1 className="font-anton text-[24px] xs:text-[28px] sm:text-[36px] inline-flex">The Proposal</h1>
            </div>
            <p className="font-aileron ml-[56px] w-[250px] xs:w-[350px] sm:w-[484px] xs:text-[18px] pb-5">Cup of coffee? Schedule a free introductory meeting. We start with a no-obligation conversation.</p>
            <div className="flex items-center space-x-4 inline-flex md:p-4 lg:p-0">
              <div className="relative h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                <Check className="text-[#24261F] w-6 h-6" />
                <span className="absolute w-[2px] h-6 top-12 bg-[#CBE26B]"></span>
                <span className="absolute w-[2px] h-6 top-24 bg-[#CBE26B]"></span>
              </div>
              <h1 className="font-anton text-[24px] xs:text-[28px] sm:text-[36px] inline-flex">Kick-off</h1>
            </div>
            <p className="font-aileron ml-[56px] w-[250px] xs:w-[350px] sm:w-[484px] xs:text-[18px] pb-5">Cup of coffee? Schedule a free introductory meeting. We start with a no-obligation conversation.</p>
            <div className="flex items-center space-x-4 inline-flex md:p-4 lg:p-0">
              <div className="h-10 w-10 bg-[#CBE26B] rounded-full flex justify-center items-center min-h-10 min-w-10">
                <Check className="text-[#24261F] w-6 h-6" />
              </div>
              <h1 className="font-anton text-[24px] xs:text-[28px] sm:text-[36px] inline-flex">Monitor Optimize Report</h1>
            </div>
            <p className="font-aileron ml-[56px] w-[250px] xs:w-[350px] sm:w-[484px] xs:text-[18px]">Cup of coffee? Schedule a free introductory meeting. We start with a no-obligation conversation.</p>
          </div>
          <div style={{ backgroundImage: `url(${PicFolder})`, backgroundRepeat: 'no-repeat' }} className="bg-contain mt-0 lg:mt-28 xl:mt-0 w-[300px] h-[220px] xs:w-[400px] xs:h-[293px] sm:w-[484px] sm:h-[292px] md:w-[748px] md:h-[546px] lg:w-[450px] lg:h-auto xl:w-[638px] xl:h-[465px] mx-auto">
          </div>
        </div>
      </div>
      {/* FAQ SECTION START HERE */}
      <div ref={faqRef} id="faq" className="w-full pt-[30px] sm:pt-[50px] lg:pt-[100px] pb-10 bg-[#F3F3F2]">
        <div className="max-w-7xl mx-auto relative">
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
            className="absolute -top-5 right-1 xs:-top-5 xs:right-1 sm:-top-10 lg:-top-16 xl:-top-20 xl:right-8 w-[40px] h-[50px] sm:w-[69px] sm:h-[79px] lg:w-auto lg:h-auto" />
          <img src={vector3} alt="Vector3" className="absolute top-16 left-1 xs:top-10 sm:top-12 xl:left-10 w-[60px] h-[35px] sm:w-[80px] sm:h-[45px] lg:w-auto lg:h-auto" />
          <span className="absolute h-2 w-2 bg-[#626262] rounded-full bottom-20 left-2 md:left-8"></span>
          <span className="absolute h-6 w-6 xl:h-8 xl:w-8 bg-[#626262] rounded-full bottom-36 right-0 md:right-8"></span>
          <div className="relative w-[300px] xs:w-[400px] sm:w-[577px] mx-auto">
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
              src={FaqCircle}
              alt="HistoryCircle"
              className="absolute left-20 top-10 xs:top-0 xs:left-[240px] sm:left-[340px] sm:top-0 lg:-top-2 lg:left-[355px] z-0 w-[130px] h-auto xs:w-[120px] sm:w-[180px] lg:w-auto" />
            <h1 className="relative font-anton text-[28px] sm:text-[40px] lg:text-[52px] text-center lg:text-left z-10">FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <div className="w-[300px]  xs:w-[350px] sm:w-[600px] lg:w-[840px] mx-auto bg-[#FAF9F7] mt-10 sm:mt-16 md:mt-10 lg:mt-16 p-6 flex justify-between items-center rounded-[10px] border border-[#E7E6E2]">
            <div>
              <p className="font-aileron w-[200px] xs:w-[250px] sm:w-auto font-bold">How can you help my business grow?</p>
              <AnimatePresence>
                {Faq1 && (
                  <motion.p
                    className="font-aileron overflow-hidden w-[200px] sm:w-[500px] lg:w-[725px] pt-4 font-semibold text-[#9B9A99]"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 300 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    By developing a personalized marketing strategy tailored to your unique business goals, we help you increase brand awareness, improve customer engagement and drive sales.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => SetFaq1(!Faq1)}>
              <motion.div
                animate={{ rotate: Faq1 ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {Faq1 ? (
                  <Minus size={16} strokeWidth={3} color="black" />
                ) : (
                  <Plus size={16} strokeWidth={3} color="black" />
                )}
              </motion.div>
            </button>
          </div>
          <div className="w-[300px] xs:w-[350px] sm:w-[600px] lg:w-[840px] mx-auto bg-[#FAF9F7] p-6 mt-5 flex justify-between items-center rounded-[10px] border border-[#E7E6E2]">
            <div>
              <p className="font-aileron w-[200px] xs:w-[250px] sm:w-auto font-bold">Why shouldn't I do it myself?</p>
              <AnimatePresence>
                {Faq2 && (
                  <motion.p
                    className="font-aileron overflow-hidden w-[200px] sm:w-[500px] lg:w-[725px] pt-4 font-semibold text-[#9B9A99]"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 300 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    By developing a personalized marketing strategy tailored to your unique business goals, we help you increase brand awareness, improve customer engagement and drive sales.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => SetFaq2(!Faq2)} className="">
              <motion.div
                animate={{ rotate: Faq2 ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {Faq2 ? (
                  <Minus size={16} strokeWidth={3} color="black" />
                ) : (
                  <Plus size={16} strokeWidth={3} color="black" />
                )}
              </motion.div>
            </button>
          </div>
          <div className="w-[300px] xs:w-[350px] sm:w-[600px] lg:w-[840px] mx-auto bg-[#FAF9F7] p-6 mt-5 flex justify-between items-center rounded-[10px] border border-[#E7E6E2]">
            <div>
              <p className="font-aileron w-[200px] xs:w-[250px] sm:w-auto font-bold">How do I know if this works for my company?</p>
              <AnimatePresence>
                {Faq3 && (
                  <motion.p
                    className="font-aileron overflow-hidden w-[200px] sm:w-[500px] lg:w-[725px] pt-4 font-semibold text-[#9B9A99]"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 300 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    By developing a personalized marketing strategy tailored to your unique business goals, we help you increase brand awareness, improve customer engagement and drive sales.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => SetFaq3(!Faq3)} className="">
              <motion.div
                animate={{ rotate: Faq3 ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {Faq3 ? (
                  <Minus size={16} strokeWidth={3} color="black" />
                ) : (
                  <Plus size={16} strokeWidth={3} color="black" />
                )}
              </motion.div>
            </button>
          </div>
          <div className="w-[300px] xs:w-[350px] sm:w-[600px] lg:w-[840px] mx-auto bg-[#FAF9F7] p-6 mt-5 flex justify-between items-center rounded-[10px] border border-[#E7E6E2]">
            <div>
              <p className="font-aileron w-[200px] xs:w-[250px] sm:w-auto font-bold">What is your warranty?</p>
              <AnimatePresence>
                {Faq4 && (
                  <motion.p
                    className="font-aileron overflow-hidden w-[200px] sm:w-[500px] lg:w-[725px] pt-4 font-semibold text-[#9B9A99]"
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 300 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    By developing a personalized marketing strategy tailored to your unique business goals, we help you increase brand awareness, improve customer engagement and drive sales.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => SetFaq4(!Faq4)} className="">
              <motion.div
                animate={{ rotate: Faq4 ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {Faq4 ? (
                  <Minus size={16} strokeWidth={3} color="black" />
                ) : (
                  <Plus size={16} strokeWidth={3} color="black" />
                )}
              </motion.div>
            </button>
          </div>
          <p className="font-aileron font-bold sm:text-[20px] w-[300px] xs:w-[400px] sm:w-[450px] text-center mx-auto mt-12">STILL HAVE QUESTIONS?<span className="font-aileron text-[#CBE26B]">Drop Us A Line</span></p>
        </div>
      </div>
      {/* FAQ SECTION END HERE */}
      {/* CONTACT US SECTION START HERE */}
      <ContactUsSection />
      {/* CONTACT US SECTION END HERE */}
      <TestimonialsSlider />
      <TrialSection />
    </div>
  );
};

export default Home;
