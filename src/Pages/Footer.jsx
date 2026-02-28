import React from "react";
import logo from "../image/Ko-Fixit-Logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

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

  <a 
    href="https://www.facebook.com/KO.Fixit" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition duration-300"
  >
    <FaFacebookF className="cursor-pointer" />
  </a>

  <a 
    href="https://www.instagram.com/koreanfixit/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition duration-300"
  >
    <FaInstagram className="cursor-pointer" />
  </a>

  <a 
    href="https://www.youtube.com/@KoreanFixi" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition duration-300"
  >
    <FaYoutube className="cursor-pointer" />
  </a>

</div>
</div>

    {/* SUPPORT */}
    <div>
      <h3 className="text-[#009EB9] font-semibold mb-4">Support</h3>
   <ul className="space-y-2 text-[#AEAEAF] text-sm">
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
    <Link to="/Shipping-Policy" className="hover:text-white text-[#AEAEAF] cursor-pointer">
      Shipping Policy
    </Link>
  </li>


  
  <li>
    <Link to="/Privacy-Policy
" className="hover:text-white text-[#AEAEAF] cursor-pointer">
     Privacy Policy
    </Link>
  </li>

<li>
    <Link to="/contact" className="hover:text-white text-[#AEAEAF] cursor-pointer">
      Contact Us
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


</ul>
    </div>

    {/* SERVICES */}
   <div>
  <h3 className="text-[#009EB9] font-semibold mb-4">Services</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link
        to="/services-waterproofing"
        className="hover:text-white cursor-pointer text-[#AEAEAF]"
      >
        Waterproofing
      </Link>
    </li>
    <li>
      <Link
        to="/services-waterreducing"
        className="hover:text-white cursor-pointer text-[#AEAEAF]"
      >
        Water Reducing
      </Link>
    </li>
    <li>
      <Link
        to="/services-damp-protect"
        className="hover:text-white cursor-pointer text-[#AEAEAF]"
      >
        Damp Protect
      </Link>
    </li>
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
  <div className="max-w-7xl mx-auto px-6 flex justify-end text-sm">
    <p className="text-gray-400">
      Copyright © 2025 KO.FIXIT All Rights Reserved
    </p>
  </div>
</div>
</footer>

  );
};

export default Footer;
