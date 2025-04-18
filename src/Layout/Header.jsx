import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#001210] text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold">
            My Coach<span className="text-[#B7ECEC]">.</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-white">
          <a href="/" className="hover:text-[#B7ECEC]">
            Home
          </a>
          <a href="#" className="hover:text-[#B7ECEC]">
            About us
          </a>
          <a href="#" className="hover:text-[#B7ECEC]">
            Blog
          </a>
          <a href="#" className="hover:text-[#B7ECEC]">
            FAQs
          </a>
          <a href="#" className="hover:text-[#B7ECEC]">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="bg-[#B7ECEC] text-[#001210] font-semibold px-5 py-2 rounded-full hover:bg-[#9ee2e2] transition hidden md:block">
          Get Started →
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-9 h-9 fill-current text-3xl text-white" viewBox="0 0 24 24">
            <IoMenu />

            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#001210] px-6 py-4 space-y-3 text-white font-medium">
          <a href="/" className="block hover:text-[#B7ECEC]">Home</a>
          <a href="#" className="block hover:text-[#B7ECEC]">About us</a>
          <a href="#" className="block hover:text-[#B7ECEC]">Blog</a>
          <a href="#" className="block hover:text-[#B7ECEC]">FAQs</a>
          <a href="#" className="block hover:text-[#B7ECEC]">Contact</a>
          <button className="bg-[#B7ECEC] text-[#001210] font-semibold px-4 py-2 rounded-full w-full mt-2">
            Get Started →
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;