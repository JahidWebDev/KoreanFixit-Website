import React from "react";
import logo from "../image/Ko-Fixit-Logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
  <footer className="bg-[#323031] text-gray-300 pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
    
    {/* LEFT LOGO + SOCIAL */}
    <div>
  {/* LOGO */}
  <div className="flex items-center gap-3 mb-6">
    <img src={logo} alt="KO Fixit Logo" className="w-28 md:w-32 lg:w-36" />
  </div>

  {/* TEXT */}
  <p className="text-sm mb-4 text-[#AEAEAF]">Follow KO. FIXIT Media</p>

  {/* SOCIAL ICONS */}
  <div className="flex gap-5 text-xl">
    <FaFacebookF className="hover:text-white cursor-pointer transition" />
    <FaInstagram className="hover:text-white cursor-pointer transition" />
    <FaXTwitter className="hover:text-white cursor-pointer transition" />
    <FaLinkedinIn className="hover:text-white cursor-pointer transition" />
  </div>
</div>

    {/* SUPPORT */}
    <div>
      <h3 className="text-[#009EB9] font-semibold mb-4">Support</h3>
   <ul className="space-y-2 text-[#AEAEAF] text-sm">
  <li>
    <Link to="/" className="hover:text-white text-[#AEAEAF] cursor-pointer">
      Home
    </Link>
  </li>

  <li>
    <Link to="/Shipping-Policy" className="hover:text-white text-[#AEAEAF] cursor-pointer">
      Shipping Policy
    </Link>
  </li>

  <li>
    <Link to="/Return-&-Refund-Policy
" className="hover:text-white text-[#AEAEAF] cursor-pointer">
     Return & Refund Policy
    </Link>
  </li>
  <li>
    <Link to="/Terms-of-Service
" className="hover:text-white text-[#AEAEAF] cursor-pointer">
     Terms of Service
    </Link>
  </li>
  <li>
    <Link to="/Privacy-Policy
" className="hover:text-white text-[#AEAEAF] cursor-pointer">
     Privacy Policy
    </Link>
  </li>

  <li>
    <Link to="/about" className="hover:text-white text-[#AEAEAF] cursor-pointer">
      About Us
    </Link>
  </li>

  <li>
    <Link to="/faqs" className="hover:text-white text-[#AEAEAF] cursor-pointer">
      FAQs
    </Link>
  </li>

  <li>
    <Link to="/contact" className="hover:text-white text-[#AEAEAF] cursor-pointer">
      Contact Us
    </Link>
  </li>
</ul>
    </div>

    {/* SERVICES */}
    <div>
      <h3 className="text-[#009EB9] font-semibold mb-4">Services</h3>
      <ul className="space-y-2  text-sm">
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">Waterproofing</li>
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">Water Reducing</li>
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">Damp Protect</li>
      </ul>
    </div>

    {/* KOREAN OFFICE */}
    <div>
      <h3 className="text-[#009EB9] font-semibold mb-4">Korean Office</h3>
      <p className="text-sm text-[#AEAEAF]  leading-relaxed">
        A312 550, Misa-daero, Hanam-si <br/>
        Gyeonggi-do, Republic of Korea <br/>
        Fax : +82 31 677 0477
      </p>
    </div>

    {/* BANGLADESH OFFICE */}
    <div>
      <h3 className="text-[#009EB9] font-semibold mb-4">Bangladesh Office</h3>
      <p className="text-sm text-[#AEAEAF] leading-relaxed">
        
        252/A5 Matikata Road <br/>
        ECB Chattar, Dhaka Cantt Dhaka. <br/>
        +88 0189 8795 761
      </p>
    </div>
  </div>

  {/* LEGAL LINKS */}
  <div className="border-t border-gray-700 mt-12 pt-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-4 text-sm">
      <div className="flex flex-wrap gap-6">
        <span className="hover:text-white cursor-pointer">Legal notice</span>
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="hover:text-white cursor-pointer">Security</span>
        <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
        <span className="hover:text-white cursor-pointer">Cookie setting</span>
        <span className="hover:text-white cursor-pointer">Accessibility</span>
      </div>

      <p className="text-gray-400">
        Copyright © 2025 KO.FIXIT All Rights Reserved
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
