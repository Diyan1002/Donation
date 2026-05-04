import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Hope.png";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Free IT City", path: "/it-city" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO ================= */}
          <img src={logo} alt="logo" className="h-20 object-contain" />

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex gap-6 font-bold">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="relative group text-black"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 group-hover:w-full transition-all"></span>
              </Link>
            ))}
          </div>

          {/* ================= DESKTOP DONATE ================= */}
          <Link to="/donate" className="hidden lg:block">
            <button className="bg-blue-700 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-blue-800 transition">
              Donate <FaHeart />
            </button>
          </Link>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="text-2xl text-black" />
              ) : (
                <FaBars className="text-2xl text-black" />
              )}
            </button>
          </div>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-5 py-6 border-t">

            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-black font-semibold"
              >
                {item.name}
              </Link>
            ))}

            {/* Donate Button */}
            <Link to="/donate" onClick={() => setMenuOpen(false)}>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
                Donate <FaHeart />
              </button>
            </Link>

          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;