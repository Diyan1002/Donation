import React from "react";
import contactImage from "../assets/im.JPeG";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#ece9ff] py-14 px-6">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#39206d] mb-2">
          Get In Touch
        </h1>
        <p className="text-gray-600">
          Become a volunteer or send us your complaint — we are here to help.
        </p>
      </div>

      {/* ================= CONTACT CARD ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* ================= FORM ================= */}
        <div className="p-10">

          <h2 className="text-2xl font-bold text-[#39206d] mb-6">
            Contact Us
          </h2>

          <div className="space-y-4">

            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39206d] transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39206d] transition"
              />
            </div>

            {/* Contact */}
            <input
              type="text"
              placeholder="Contact No"
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#39206d] transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#39206d] transition"
            />

            {/* Message */}
            <textarea
              placeholder="Write your message..."
              className="p-3 border rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#39206d] transition"
            />

            {/* Button */}
            <button className="w-full bg-[#39206d] text-white py-3 rounded-lg font-semibold hover:bg-[#2b1b60] hover:shadow-lg transition">
              Send Message
            </button>

          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative">

          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1b60]/80 via-[#2b1b60]/20 to-transparent"></div>

          {/* Text on image */}
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold">Hope Foundation</h3>
            <p className="text-sm text-white/80">
              We respond within 24 hours
            </p>
          </div>

        </div>

      </div>

      {/* ================= FOOTER INFO ================= */}
      <div className="text-center mt-12 text-gray-700 space-y-1">
        <p className="font-semibold">
          Address: B-24, Federal B Area Ancholi Block 20, Karachi
        </p>
        <p>Contact: 03277266566</p>
        <p>Email: Info@hopefoundationpk.com</p>
      </div>

    </div>
  );
};

export default ContactUs;