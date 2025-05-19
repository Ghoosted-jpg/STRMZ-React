import React, { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';
import FaqCircle from '../Images/FaqCircle.png'
import { motion, AnimatePresence } from 'framer-motion';
import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialVector from '../Images/TestimonialVector.png'
import TestimonialVector2 from '../Images/TestimonialVector2.png'

const testimonials = [
    { id: 1, name: "Johnson Charles", occupation: "Businessman", quote: "Amazing Dashboard Loved It Very Much.", Comments: "Ratione voluptatem sequi nesciunt amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectet sit adipisci velit sed quia non.", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Shawn Williamson", occupation: "Businessman", quote: "Exactly What I Was Looking For Loved It.", Comments: "Ratione voluptatem sequi nesciunt amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectet sit adipisci velit sed quia non.", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Marlon Brando", occupation: "Businessman", quote: "Amazing Dashboard Loved It Very Much.", Comments: "Ratione voluptatem sequi nesciunt amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectet sit adipisci velit sed quia non.", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Johnson Charles", occupation: "Businessman", quote: "Loved The Design.", Comments: "Ratione voluptatem sequi nesciunt amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectet sit adipisci velit sed quia non.", img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, name: "Shawn Williamson", occupation: "Businessman", quote: "Highly Recommend.", Comments: "Ratione voluptatem sequi nesciunt amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectet sit adipisci velit sed quia non.", img: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 6, name: "Marlon Brando", occupation: "Businessman", quote: "Will Use Again.", Comments: "Ratione voluptatem sequi nesciunt amet Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectet sit adipisci velit sed quia non.", img: "https://randomuser.me/api/portraits/women/6.jpg" },
];
const Testimonials = () => {
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
            if (window.innerWidth >= 1280) {
                setItemsPerPage(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: () => next(),  // Left swipe = next item
        onSwipedRight: () => prev(), // Right swipe = previous item
        trackMouse: true,
        preventDefaultTouchmoveEvent: true,
        delta: 50 // Minimum swipe distance (px) to trigger
    });

    const startIndex = page * itemsPerPage;
    const currentItems = testimonials.slice(startIndex, startIndex + itemsPerPage);

    const next = () => {
        setPage(prev => (prev + 1) % Math.ceil(testimonials.length / itemsPerPage));
    };

    const prev = () => {
        setPage(prev => (prev - 1 + Math.ceil(testimonials.length / itemsPerPage)) %
            Math.ceil(testimonials.length / itemsPerPage));
    };

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between mt-[30px] md:mt-20 flex-col md:flex-row">
                    <div className="relative w-[310px] xs:w-[394px] sm:w-[616px] lg:w-[601px] mx-auto md:mx-0">
                        <h1 className="relative font-anton text-center md:text-left text-[28px] xs:text-[32px] sm:text-[48px] md:text-[44px] lg:text-[52px]  xs:w-full z-10">WHAT CUSTOMERS THINK OF US.</h1>
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
                            alt="circle"
                            className="absolute -top-1 left-[73px] xs:left-[83px] sm:left-[137px] md:left-[98px] lg:left-28 w-[130px] xs:w-[150px] sm:w-[223px] md:w-[205px] lg:w-[250px] z-0" />
                    </div>
                    <div className="flex justify-between w-[108px] md:-mt-8 hidden md:flex">
                        <button onClick={prev} className="relative overflow-hidden bg-[#F0F0F0] rounded-full group flex items-center justify-center cursor-pointer w-[50px] h-[50px]">
                            <span className="absolute inset-0 bg-[#CBE26B] scale-x-0 origin-right transition-transform duration-500 z-0 group-hover:scale-x-100"></span>
                            <MoveLeft className="relative z-10 text-[#717171] group-hover:text-[#000000] w-6 h-6" />
                        </button>

                        <button onClick={next} className="relative overflow-hidden bg-[#F0F0F0] rounded-full group flex items-center justify-center cursor-pointer w-[50px] h-[50px]">
                            <span className="absolute inset-0 bg-[#CBE26B] scale-x-0 origin-left transition-transform duration-500 z-0 group-hover:scale-x-100"></span>
                            <MoveRight className="relative z-10 text-[#717171] group-hover:text-[#000000] w-6 h-6" />
                        </button>

                    </div>
                </div>
                {/* FOR SCREEN SIZE LESS THAN 768PX */}
                <div {...handlers} className="lg:hidden">
                    <AnimatePresence mode="wait" className="mx-auto">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: -100 }}  // Changed from +100 to -100
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}     // Changed from -100 to +100
                            transition={{ duration: 0.4 }}
                            className="custom-cursor mt-10 md:flex md:justify-center md:flex-wrap md:gap-6 mx-auto"
                        >
                            {currentItems.map((item) => (
                                <div key={item.id} className="relative overflow-hidden bg-[#FFFFFF] p-10 rounded-[15px] shadow-lg group transition-transform duration-300 hover:-rotate-3 w-[300px] xs:w-[400px] sm:w-[424px] md:w-[350px] mx-auto">
                                    {/* Animated Background Fill */}
                                    <span className="absolute bottom-0 right-0 w-0 h-0 bg-[#CBE26B] rounded-[15px] transition-all duration-500 ease-out group-hover:w-full group-hover:h-full z-0"></span>

                                    {/* Foreground Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center mb-4">
                                            <img src={item.img} alt={item.name} className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 rounded-full mr-3" />
                                            <div>
                                                <h3 className="font-aileron font-bold text-[18px] xs:text-[20px] md:text-[18px]">{item.name}</h3>
                                                <p className="font-aileron text-[14px] xs:text-[16px] sm:text-[18px] md:xs:text-[16px] text-[#474747]">{item.occupation}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <p className="font-aileron font-bold text-[20px] xs:text-[22px] sm:text-[24px] md:text-[22px] md:w-[220px]">{item.quote}</p>
                                            <img src={TestimonialVector2} alt="vector" className="w-[48px] h-[38px] block group-hover:hidden" />
                                            <img src={TestimonialVector} alt="vector" className="w-[48px] h-[38px] hidden group-hover:block" />
                                        </div>
                                        <p className="text-[16px] xs:text-[18px] text-[18px] font-aileron text-[#9B9A99] group-hover:text-black mt-6">{item.Comments}</p>
                                    </div>
                                </div>

                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/* FOR SCREEN SIZE GREATER THAN 768PX */}
                <AnimatePresence mode="wait" className="hidden lg:block">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4 }}
                        className="hidden lg:flex justify-around custom-cursor mt-10 mx-auto"
                    >
                        {currentItems.map((item) => (
                            <div key={item.id} className="relative overflow-hidden bg-[#FFFFFF] p-10 rounded-[15px] shadow-lg group transition-transform duration-300 hover:-rotate-3 lg:w-[424px] xl:w-[400px]">
                                <span className="absolute bottom-0 right-0 w-0 h-0 bg-[#CBE26B] transition-all duration-500 ease-out group-hover:w-full group-hover:h-full z-0 rounded-[15px]"></span>

                                <div className="relative z-10">
                                    <div className="flex items-center mb-4">
                                        <img src={item.img} alt={item.name} className="w-24 h-24 rounded-full mr-3" />
                                        <div>
                                            <h3 className="font-bold text-[24px]">{item.name}</h3>
                                            <p className="text-[18px] text-[#474747]">{item.occupation}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-6">
                                        <p className="font-aileron font-bold text-[24px]">{item.quote}</p>
                                        <img src={TestimonialVector2} alt="vector" className="w-[58px] h-[48px] block group-hover:hidden" />
                                        <img src={TestimonialVector} alt="vector" className="w-[58px] h-[48px] hidden group-hover:block" />
                                    </div>
                                    <p className="w-[339px] text-[18px] font-aileron  text-[#9B9A99] group-hover:text-black mt-6">{item.Comments}</p>

                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                {/* Pagination for mobile view */}
                <div className="lg:hidden flex justify-center gap-2 mt-6">
                    {[...Array(Math.ceil(testimonials.length / itemsPerPage))].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${i === page ? 'bg-[#CBE26B]' : 'bg-gray-300'}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Testimonials;
