import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import BigFolder from "../Images/BigFolder.png";
import Arrow from "../Images/Vector1.png";
import WhiteFolder from "../Images/AboutUsWhiteFolder.png";
import Circle from "../Images/circle.png";
const WorkingSection = () => {
    return (
        <div className="w-full bg-[#CBE26B] py-[50px] md:py-[100px]">
            <div style={{ backgroundImage: `url(${BigFolder})` }} className="max-w-7xl mx-auto relative w-[300px] h-auto xs:w-[400px] sm:w-[620px] md:w-[746px] lg:w-[980px] xl:w-[1240px] xl:h-[1040px] bg-contain xl:bg-cover xl:bg-right bg-no-repeat rounded-tr-[34px] grid grid-cols-1 sm:grid-cols-2 justify-items-center content-center gap-y-10 xl:gap-x-4 pb-10 xl:rounded-tl-[34px] xl:rounded-bl-[34px]">
                <span className="absolute bg-[#FFFFFF] h-[1650px] w-[300px] xs:w-[400px] sm:h-[950px] sm:w-[620px] md:h-[850px] md:w-[746px] lg:w-[980px] lg:h-[810px] top-40 md:top-48 rounded-b-xl xl:hidden"></span>
                <div className="relative w-[300px] sm:w-auto mt-12 lg:mt-16 xl:mt-24 xl:w-[544px] sm:ml-5">
                    <h1 className="relative z-10 font-anton text-center sm:text-left text-[20px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[52px] w-[280px] sm:w-auto lg:w-[473px] mx-auto xl:mx-0">THIS WAY WE ENSURE FAST DELIVERY</h1>
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
                        src={Circle}
                        alt="Circle"
                        className="absolute -z-0 -top-[4px] left-[51px] xs:left-[60px] sm:left-[52px] md:left-16 lg:left-[86px] xl:left-[85px] w-[65px] xs:w-[92px] sm:w-[105px] md:w-28 lg:w-[168px] xl:w-[173px] xl:h-[94px]" />
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
                <div style={{ backgroundImage: `url(${WhiteFolder})` }} className="relative w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[544px] xl:h-[332px] bg-contain xl:bg-cover bg-no-repeat p-4 xs:p-6 lg:p-8 xl:rounded-bl-2xl xl:rounded-br-2xl">
                    <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                        <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F] mt-4">
                        <h1 className="font-anton text-[28px] leading-8 text-[#CBE26B]">1</h1>
                    </div>
                    <h1 className="font-anton text-[20px] md:text-[28px] ml-1 my-2 xs:my-4">KICKOFF</h1>
                    <p className="px-4 xs:px-6 lg:px-8 pb-8 lg:pb-4 xl:p-0 -mx-4 xs:-mx-6 lg:-mx-8 xl:mx-0 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl lg:w-[468px] xl:w-[480px] xl:rounded-none xl:bg-transparent">During a kickoff we look together at your most important goals, needs and wishes, but of course also those of the end user. We take these insights into account and incorporate them into the design in the next phase.</p>
                </div>
                <div style={{ backgroundImage: `url(${WhiteFolder})` }} className="relative w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[544px] xl:h-[332px] bg-contain xl:bg-cover bg-no-repeat p-4 xs:p-6 lg:p-8 xl:rounded-bl-2xl xl:rounded-br-2xl">
                    <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                        <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F] mt-4">
                        <h1 className="font-anton text-[28px] leading-8 text-[#CBE26B]">2</h1>
                    </div>
                    <h1 className="font-anton text-[20px] md:text-[28px] ml-1 my-2 xs:my-4">CONCEPT DESIGN</h1>
                    <p className="px-4 xs:px-6 lg:px-8 pb-8 lg:pb-4 xl:p-0 -mx-4 xs:-mx-6 lg:-mx-8 xl:mx-0 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl lg:w-[468px] xl:w-[480px] xl:rounded-none xl:bg-transparent">The development of the website always starts with a concept and design. Here the wishes and possibilities are mapped out. A suitable design is chosen. Depending on your wishes, a template or design is completely tailor-made.</p>
                </div>
                <div style={{ backgroundImage: `url(${WhiteFolder})` }} className="relative w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[544px] xl:h-[332px] bg-contain xl:rounded-bl-3xl xl:rounded-br-3xl xl:bg-cover bg-no-repeat p-4 xs:p-6 lg:p-8">
                    <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                        <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F] mt-4">
                        <h1 className="font-anton text-[28px] leading-8 text-[#CBE26B]">3</h1>
                    </div>
                    <h1 className="font-anton text-[20px] md:text-[28px] ml-1 my-2 xs:my-4">DEVELOPMENT</h1>
                    <p className="px-4 xs:px-6 lg:px-8 lg:px-0 pb-8 lg:pb-4 xl:p-0 -mx-4 xs:-mx-6 lg:-mx-8 xl:mx-0 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl lg:w-auto xl:w-[480px]  xl:rounded-none xl:bg-transparent">We always use the latest software when developing websites and web shops. This so that your website or webshop performs as well as possible. During development, a test environment is used that is always accessible and can be maintained. So that you always know how things currently stand.</p>
                </div>
                <div style={{ backgroundImage: `url(${WhiteFolder})` }} className="relative w-[280px] xs:w-[350px] sm:w-[280px] md:w-[350px] lg:w-[470px] xl:w-[544px] xl:h-[332px] bg-contain xl:rounded-bl-3xl xl:rounded-br-3xl xl:bg-cover bg-no-repeat p-4 xs:p-6 lg:p-8">
                    <div className="absolute right-0 top-0 lg:right-2 lg:top-2 w-8 h-8 lg:w-10 lg:h-10 bg-[#CBE26B] rounded-full flex justify-center items-center">
                        <MoveUpRight className=" text-[#24261F] w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex justify-center items-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#24261F] mt-4">
                        <h1 className="font-anton text-[28px] leading-8 text-[#CBE26B]">4</h1>
                    </div>
                    <h1 className="font-anton text-[20px] md:text-[28px] ml-1 my-2 xs:my-4">MAINTENANCE AND UPDATES</h1>
                    <p className="px-4 xs:px-6 lg:px-8 pb-8 lg:pb-4 xl:p-0 -mx-4 xs:-mx-6 lg:-mx-8 xl:mx-0 bg-[#f3f3f3] rounded-br-2xl rounded-bl-2xl lg:w-auto xl:w-[480px]  xl:rounded-none xl:bg-transparent">After the development of the website or webshop, it is important that this group continues to run. By using advanced caching, guidance and monitoring systems, the performance of your website or webshop remains excellent. In addition to hosting, we also provide support for all problems with the solution.</p>
                </div>
            </div>
        </div>
    );
};
export default WorkingSection;