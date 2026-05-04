import React from "react";
import founderImage from "../assets/imgg.jpeg";

const FounderProfile = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-10">

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* ================= LEFT IMAGE ================= */}
          <div className="flex items-center justify-center bg-[#2b1b60] p-6 sm:p-10">

            <div className="relative flex items-center justify-center">

              <img
                src={founderImage}
                alt="Founder"
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-80 object-cover rounded-full border-4 border-white shadow-xl hover:scale-105 transition duration-300"
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-20"></div>

            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="p-6 sm:p-10 flex flex-col justify-center text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2b2b2b] mb-3">
              Mudassar Jameel
            </h2>

            <p className="text-[#39206d] font-semibold text-base sm:text-lg mb-4">
              Entrepreneur | Mentor | Philanthropist
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              The Distinguished Eminent Social Worker with courage and selfless devotion
              to serve mankind, irrespective of caste, creed, sects or beliefs.
              His mission is to create hope, education, and opportunities for everyone.
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-6 flex-wrap">

              <a
                href="https://www.facebook.com/share/1D1v9hqfNd/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition"
              >
                <span className="text-white text-xs sm:text-sm">f</span>
              </a>

              <a
                href="https://youtube.com/@hopefoundationpakistan"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-red-600 hover:scale-110 transition"
              >
                <span className="text-white text-xs sm:text-sm">▶</span>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black hover:scale-110 transition"
              >
                <span className="text-white text-xs sm:text-sm">♪</span>
              </a>

              <a
                href="https://www.instagram.com/hopefoundation.pakistan"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-pink-600 hover:scale-110 transition"
              >
                <span className="text-white text-xs sm:text-sm">★</span>
              </a>

            </div>

            {/* BUTTON */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="inline-block px-5 sm:px-6 py-2 bg-[#39206d] text-white rounded-full hover:bg-[#2b1b60] transition text-sm sm:text-base"
              >
                View Founder Profile
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FounderProfile;