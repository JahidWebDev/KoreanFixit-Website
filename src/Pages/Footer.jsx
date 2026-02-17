import React from "react";
import logo from "../image/Ko-Fixit-Logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">Home</li>
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">Services</li>
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">Case Study</li>
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">About Us</li>
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">FAQs</li>
        <li className="hover:text-white cursor-pointer text-[#AEAEAF]">Contact Us</li>
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
        Eastern Road, Baridhara <br/>
        DOHS, Dhaka <br/>
        sales@chital.com <br/>
        +1 565 455 66587
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
