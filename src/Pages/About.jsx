import React from "react";
import founderImage from "../assets/imgg.jpeg";

const AboutSection = () => {
  return (
    <div className="bg-[#f5f5f5] py-12 px-6">

      {/* ================= ABOUT ================= */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#39206d] mb-3">
          About Hope Foundation
        </h1>

        <p className="text-gray-600 mb-6">
          Our charity efforts are focused on bringing hope and happiness to people across the globe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-[#39206d] mb-4">
              Charity Efforts Are For Happiness
            </h2>

            <p className="text-sm text-gray-600">
              Hope Foundation works tirelessly to provide help to those in need through disaster relief,
              education support, and community outreach programs. We aim to uplift lives regardless of caste, creed, or religion.
            </p>
          </div>

          <div>
            <img
              src={founderImage}
              alt="Hope Foundation"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= FOUNDER ================= */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#39206d] mb-6">
          Meet Our Founder
        </h2>

        <div className="flex flex-col md:flex-row items-center bg-[#e6e6f1] rounded-lg p-8">

          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src={founderImage}
              alt="Founder"
              className="rounded-lg w-full object-cover"
            />
          </div>

          <div className="md:w-2/3 md:pl-8 text-left">
            <h3 className="text-2xl font-bold text-[#050b4f]">
              Mudassar Jameel
            </h3>

            <p className="text-gray-700 mb-4">
              Entrepreneur | Mentor | Philanthropist
            </p>

            <p className="text-gray-600 mb-6">
              A visionary entrepreneur dedicated to social welfare, education, and community development.
              He focuses on creating sustainable change through charity and empowerment programs.
            </p>

            <a
              href="#"
              className="text-[#39206d] font-bold underline"
            >
              Founder Profile
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutSection;