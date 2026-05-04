import React from "react";
import { FaAmbulance, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#0B1F3A] via-[#123D6A] to-[#0B1F3A] text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col md:flex-row justify-between items-center py-3 gap-3">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto">

            <div className="flex items-center gap-3">

              <div className="bg-red-500/20 p-2 rounded-full border border-red-400/20">
                <FaAmbulance className="text-red-400 text-lg" />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-[11px] uppercase tracking-widest text-blue-200">
                  Emergency Helpline
                </p>
                <p className="font-bold text-lg leading-none">1024</p>
              </div>

            </div>

            {/* Divider text (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2 border-l border-white/20 pl-6">
              <FaPhoneAlt className="text-blue-300 text-sm" />
              <span className="text-sm text-gray-200">
                24/7 Medical Support
              </span>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <a
            href="https://wa.me/923277266566"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-full border border-white/20 hover:bg-green-500 hover:border-green-400 transition-all duration-300 shadow-md w-full md:w-auto"
          >
            <FaWhatsapp className="text-green-400 text-xl" />

            <span className="font-medium text-sm text-center sm:text-left">
              Contact via WhatsApp
            </span>
          </a>

        </div>

      </div>

    </header>
  );
};

export default Header;