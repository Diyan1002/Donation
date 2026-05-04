import React from "react";
import logoImage from "../assets/foo.png";

const FooterComponent = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1e1e61] to-[#14143d] text-white py-14 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* ================= LEFT ================= */}
        <div>

          <img
            src={logoImage}
            alt="Foundation Logo"
            className="w-48 mb-5"
          />

          <p className="text-gray-300 leading-relaxed text-sm mb-6">
            A decade ago, Hope Foundation started its journey from a small camp
            in Karachi, Pakistan. Today we are working across multiple welfare
            projects for humanity.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1D1v9hqfNd/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05H8v-2.9h2.5V9.4c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8H17l-.4 2.9h-2.3v7.05A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A4 4 0 0 0 12 8.5c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3 4.8a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.5.1-1 .2-1.5.1.4 1.5 1.9 2.6 3.6 2.6A8 8 0 0 1 2 18.1a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6 11.3-11.3v-.5c.8-.5 1.4-1.1 1.9-1.8z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@hopefoundationpakistan?si=nhE3bCEBHFajRkUA"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 12s0-3.4-.4-5a3 3 0 0 0-2.1-2.1C18.9 4.4 12 4.4 12 4.4s-6.9 0-8.5.5A3 3 0 0 0 1.4 7c-.4 1.6-.4 5-.4 5s0 3.4.4 5a3 3 0 0 0 2.1 2.1c1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hopefoundation.pakistan?igsh=NzFjY3hlNWNkYnc4"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 hover:scale-110 transition"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm6-2.2a1.3 1.3 0 1 0 1.3 1.3A1.3 1.3 0 0 0 18 5.3z"/>
              </svg>
            </a>

          </div>

          <p className="text-xs text-gray-400 mt-6">
            © 2026 Hope Foundation. All Rights Reserved.
          </p>

        </div>

        {/* ================= CENTER ================= */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Campaigns</h2>

          <ul className="space-y-2 text-sm text-gray-300">
  <li>Kafalat Program</li>
  <li>Virtual Blood Bank</li>
  <li>Job Bank</li>
  <li>Online Quran Academy</li>
  <li>Winter Relief</li>
  <li>Disaster Relief</li>
  <li>Special Person Program</li>
  <li>Heat Stroke Camp</li>
  <li>Winter Relief Camp</li>
</ul>
        </div>

        {/* ================= RIGHT ================= */}
        <div>


          <div className="flex flex-col gap-3 mb-6">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-black outline-none"
            />

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full font-semibold transition">
              Subscribe
            </button>

          </div>

          <div className="text-sm text-gray-300 space-y-2">
            <p><b>Address:</b> Karachi, Pakistan</p>
            <p><b>Phone:</b> 03277266566</p>
            <p><b>Email:</b>Info@hopefoundationpk.com</p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default FooterComponent;