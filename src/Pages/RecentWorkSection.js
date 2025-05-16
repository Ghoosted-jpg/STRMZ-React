import React from "react";
import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
    useMotionValue,
    useAnimationFrame,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import rectangle1 from "../Images/Work1.png";
import rectangle2 from "../Images/Work2.png";
import rectangle3 from "../Images/Work3.png";
import rectangle4 from "../Images/Work4.png";
import rectangle5 from "../Images/Work5.png";
import rectangle6 from "../Images/Work6.png";
import rectangle7 from "../Images/Work7.png";
import rectangle8 from "../Images/Work8'.png";
import Circle from "../Images/circle.png";
import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";

const rectangles1 = [rectangle1, rectangle2, rectangle3, rectangle8];
const rectangles2 = [rectangle4, rectangle5, rectangle6, rectangle7, rectangle1, rectangle2, rectangle3, rectangle8];

const RecentWorkSection = () => {
    const scrollRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    const baseX1 = useMotionValue(0);
    const baseX2 = useMotionValue(0);

    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [1, 4]);

    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        if (row1Ref.current) {
            setContentWidth(row1Ref.current.scrollWidth / 2); // because we duplicated the content
        }
    }, []);

    let currentX1 = 0;
    let currentX2 = 0;

    useAnimationFrame((t, delta) => {
        const moveBy = velocityFactor.get() * (delta / 1000) * 100;

        // Row 1: move left
        currentX1 -= moveBy;
        baseX1.set(currentX1 % contentWidth);

        // Row 2: move right
        currentX2 += moveBy;
        baseX2.set(currentX2 % contentWidth);
    });

    const x1 = useTransform(baseX1, (v) => `${v}px`);
    const x2 = useTransform(baseX2, (v) => `${v}px`);

    return (
        <div
            ref={scrollRef}
            className="overflow-hidden bg-[#24261F] md:mt-4 pb-40"
        >
            <div className="relative w-[242px] xs:w-[323px] sm:w-[350px] mx-auto mt-28">
                <h1 className="relative z-10 font-anton text-white text-[36px] xs:text-[48px] sm:text-[52px]">
                    OUR RECENT WORK
                </h1>
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
                    src={Circle}
                    alt="Circle"
                    className="absolute z-0 top-0 left-[50px] xs:left-[67px] sm:left-[75px] w-[115px] h-[55px] xs:w-[155px] xs:h-[75px] sm:w-[165px] sm:h-[81px]"
                />
            </div>

            {/* First Row */}
            <div className="relative w-full overflow-hidden mt-20">
                <motion.div
                    ref={row1Ref}
                    className="flex gap-10 w-max"
                    style={{ x: x1 }}
                >
                    {[...rectangles1, ...rectangles1].map((src, idx) => (
                        <img
                            key={`row1-img-${idx}`}
                            src={src}
                            alt={`row1-img-${idx}`}
                            className="object-contain rounded-xl h-56 w-56 xs:h-64 xs:w-64 sm:h-72 sm:w-72 md:w-96 md:h-96 lg:h-auto lg:w-auto"
                        />
                    ))}
                </motion.div>
            </div>

            {/* Second Row */}
            <div className="relative w-full overflow-hidden mt-8 md:mt-20">
                <motion.div
                    ref={row2Ref}
                    className="flex gap-10 w-max"
                    style={{ x: x1 }}
                >
                    {[...rectangles2, ...rectangles2].map((src, idx) => (
                        <img
                            key={`row2-img-${idx}`}
                            src={src}
                            alt={`row2-img-${idx}`}
                            className="object-contain rounded-xl h-56 w-56 xs:h-64 xs:w-64 sm:h-72 sm:w-72 md:w-96 md:h-96 lg:h-auto lg:w-auto"
                        />
                    ))}
                </motion.div>
            </div>
            <div className="w-[205px] mx-auto mt-28">
                <div className="flex items-center space-x-2 inline-flex bg-white text-[#24261F] w-[204px] py-2 rounded-full group hover:bg-[#CBE26B] cursor-pointer">
                    <div className="inline-flex items-center justify-center w-[38px] h-[38px] bg-[#CBE26B] rounded-full group-hover:bg-black transition duration-500 ml-2">
                        <Headphones className="w-[22px] h-[22px] text-black group-hover:text-white transition duration-500" />
                    </div>
                    <Link to="/login" className="pl-0 font-aileron font-semibold group-hover:text-black transition duration-500">
                        Schedule A Call
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentWorkSection;
