import React from "react";
import ContactUsImage from "../Images/ContactUsImage.png";

const ContactUsSection = () => {
  return (
    <div className="w-full bg-[#F3F3F2] pb-10">
      <div className="max-w-7xl mx-auto bg-[#FFFFFF] p-5 flex flex-col items-center md:flex-row justify-between rounded-[20px]">
        <img src={ContactUsImage} alt="ContactUs" className="w-[300px] md:w-[400px] md:h-[450px] lg:w-[410px] xl:w-auto h-auto" />
        <div className="space-y-3 mt-4">
          <div className="flex justify-between flex-col space-y-3 lg:space-y-0 lg:flex-row ">
            <input type="text" placeholder="Full Name:" className="font-aileron w-[300px] lg:w-[269px] h-[61px] lg:h-[51px] xl:h-[61px] rounded-[10px] bg-[#E7E6E2] focus:outline-none p-2 border text-black placeholder:text-black" />
            <input type="text" placeholder="Email Address:" className="font-aileron w-[300px] lg:w-[269px] h-[61px] lg:h-[51px] xl:h-[61px] rounded-[10px] bg-[#E7E6E2] focus:outline-none p-2 border text-black placeholder:text-black" />
          </div>
          <div className="flex justify-between flex-col space-y-3">
            <input type="text" placeholder="Phone Number:" className="font-aileron w-[300px] lg:w-[550px] h-[61px] lg:h-[51px] xl:h-[61px] rounded-[10px] bg-[#E7E6E2] focus:outline-none p-2 border text-black placeholder:text-black" />
            <textarea placeholder="Write A Message:" className="font-aileron w-[300px] lg:w-[550px] h-[174px] lg:h-[100px] xl:h-[174px] rounded-[10px] bg-[#E7E6E2] focus:outline-none p-2 border text-black placeholder:text-black resize-none"></textarea>
            <button className="relative overflow-hidden bg-[#CBE26B] font-aileron text-lg font-semibold text-black w-[300px] lg:w-[550px] h-[60px] lg:h-[50px] xl:h-[60px] rounded-full flex justify-center items-center transition duration-500  group">
              <span className="absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-out group-hover:w-full z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-all duration-1000 ease-out">Send A Message</span>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;