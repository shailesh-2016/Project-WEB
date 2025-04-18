import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001210] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-3xl text-[#6EC9C5] font-bold">🌀</div>
            <h2 className="text-2xl font-bold">My Coach</h2>
          </div>
          <p className="text-gray-400 mb-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature.
          </p>
          <div className="flex gap-4 text-[#6EC9C5] text-lg">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quicklinks</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Pages</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong className="text-white">Email:</strong> ABCd@gmail.com
            </li>
            <li>
              <strong className="text-white">Phone:</strong> +91 25648245623
            </li>
            <li>
              <strong className="text-white">Address:</strong> Contrary to popular belief, Lorem random
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        Copyright © 2025 all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
