import React from "react";

const Header = () => {
  return (
<header className="bg-[#001210] text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">My Coach<span className="text-[#B7ECEC]">.</span></h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-white">
          <a href="/" className="hover:text-[#B7ECEC]">Home</a>
          <a href="#" className="hover:text-[#B7ECEC]">About us</a>
          <a href="#" className="hover:text-[#B7ECEC]">Blog</a>
          <a href="#" className="hover:text-[#B7ECEC]">FAQs</a>
          <a href="#" className="hover:text-[#B7ECEC]">Contact</a>
        </nav>

        <button className="bg-[#B7ECEC] text-[#001210] font-semibold px-5 py-2 rounded-full hover:bg-[#9ee2e2] transition hidden md:block">
          Get Started →
        </button>

        <div className="md:hidden">
          <button>
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
