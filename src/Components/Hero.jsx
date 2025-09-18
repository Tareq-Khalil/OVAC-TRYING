import React from "react";
import MainLogo from "../assets/logo-OVAC-1.png";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen px-4 pt-28 text-center">
      <img
        className="h-auto w-48 mb-6 transition-all duration-300 ease-in-out sm:w-64 md:w-80 lg:w-96 xl:w-[32rem] hover:scale-105"
        src={MainLogo}
        alt="Hero"
      />
      <p className="text-[#2caa7c] text-xl sm:text-2xl md:text-3xl font-bold max-w-5xl">
        Growing artistic talent through student-to-student Visual Arts courses
      </p>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 max-w-4xl">
        October Visual Arts Club (OVAC) is a student organization affiliated
        with STEM High School for Boys - 6th of October. We grow the artistic
        talent by providing student-to-student Visual Arts courses.
      </p>
      {/* buttons  */}
      <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <a
          href="#"
          className="transform rounded-full bg-[#2caa7c] px-8 py-4 font-bold text-white shadow-lg shadow-[#2caa7c]/30 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#32c288] hover:shadow-xl hover:shadow-[#2caa7c]/50"
        >
          Register For the bootcamp
        </a>
        <a
            href="/gallery"
          className="transform rounded-full border-2 border-[#2caa7c] bg-transparent px-8 py-4 font-bold text-[#2caa7c] transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#ec1a63] hover:bg-[#ec1a63] hover:text-white hover:shadow-lg hover:shadow-[#ec1a63]/40"
        >
          See our Art
        </a>
      </div>
    </div>
  );
};

export default Hero;
