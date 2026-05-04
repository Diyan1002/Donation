import React from "react";
import bgImage from "../assets/backk.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">

        {/* ================= TOP BOX ================= */}
        <div className="inline-block border-2 border-white rounded-b-2xl px-4 sm:px-8 py-3 sm:py-4 bg-blue-900/60 backdrop-blur-md shadow-lg">

          <h1
            className="text-white text-2xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Noto Nastaliq Urdu, serif" }}
          >
            ہوپ فاؤنڈیشن پاکستان
          </h1>

        </div>

        {/* ================= MAIN TEXT ================= */}
        <h2
          className="text-yellow-300 text-xl sm:text-3xl md:text-5xl font-bold leading-relaxed drop-shadow-md mt-10 sm:mt-14 md:mt-16"
          style={{ fontFamily: "Noto Nastaliq Urdu, serif" }}
        >
          اپنی زکوٰۃ، خیرات اور عطیات ہوپ فاؤنڈیشن کو دیجیے
        </h2>

        {/* ================= BUTTON ================= */}
        <button className="mt-6 sm:mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-xl transition duration-300 hover:scale-105">

          DONATE NOW

        </button>

      </div>

    </section>
  );
};

export default HeroSection;