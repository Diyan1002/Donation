import React from "react";
import profileImg from "../assets/ho.jpg";

const AboutHopeFoundation = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] px-4 sm:px-6">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b] via-[#4c1d95] to-[#be185d] opacity-90"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-500 opacity-30 blur-[100px] sm:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink-500 opacity-30 blur-[100px] sm:blur-[120px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] w-full py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center animate-fadeIn text-center md:text-left">

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Help is Our Main Goal
          </h1>

          <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-6 sm:leading-7 text-gray-200 max-w-[600px] mx-auto md:mx-0">
            Hope Foundation is a non-profit organization dedicated to serving humanity without any discrimination. We believe every individual deserves food, shelter, education, and healthcare.
          </p>

          <div className="mt-6 w-[90px] sm:w-[120px] h-[4px] sm:h-[5px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto md:mx-0"></div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col justify-center md:pl-10 border-l border-white/30 animate-slideUp">

          {/* PROFILE IMAGE */}
          <div className="absolute -top-10 sm:-top-16 left-1/2 md:left-[-60px] transform -translate-x-1/2 md:translate-x-0 w-[80px] sm:w-[110px] h-[80px] sm:h-[110px] rounded-full overflow-hidden border-[3px] sm:border-[4px] border-white shadow-2xl animate-float">
            <img
              src={profileImg}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-14 md:mt-0 text-center md:text-left">

            <h3 className="text-yellow-400 font-bold text-xs sm:text-sm mb-2 tracking-wide">
              ABOUT HOPE FOUNDATION (NGO)
            </h3>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Charity Efforts Are For{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent font-extrabold">
                Humanity & Happiness
              </span>
            </h2>

            <p className="text-[12px] sm:text-[14px] leading-6 sm:leading-7 text-gray-200 mb-4">
              Hope Foundation works for underprivileged communities through food, education and healthcare programs.
            </p>

            <p className="text-[12px] sm:text-[14px] leading-6 sm:leading-7 text-gray-200 mb-4">
              We aim to create sustainable impact with volunteers and donors helping thousands of families.
            </p>

            <h3 className="text-base sm:text-xl font-semibold mt-3">
              We are Distributing{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent font-bold">
                Cooked Food & Essentials
              </span>
            </h3>

          </div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .animate-slideUp { animation: slideUp 1.2s ease forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

    </div>
  );
};

export default AboutHopeFoundation;