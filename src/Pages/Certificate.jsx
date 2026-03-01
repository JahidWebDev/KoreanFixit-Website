import React from 'react'
import { NavLink } from "react-router-dom"; 
import logo from "../image/Ko-Fixit-Logo.png";
const Certificate = () => {
  return (
    <div className='min-h-screen bg-[#f8f9fb]'>
        <nav className="bg-[#1F1954] sticky top-0 z-50">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="KO FIXIT" className="h-17 w-auto" />
            </div>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <NavLink
                to="/"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                HOME
              </NavLink>
              <NavLink
                to="/products"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                PRODUCTS
              </NavLink>
              <NavLink
                to="/certificate"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                CERTIFICATE
              </NavLink>
              <NavLink
                to="/about"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                CONTACT
              </NavLink>
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Hotline */}
              <div className="text-right text-white text-sm leading-tight">
                <p className="text-white font-medium">Hotline</p>
                <p className="text-white font-semibold">+88 0189 8795 761</p>
              </div>

              {/* Search Button */}
              <button className="bg-[#FDD304] text-[#1F1954] w-47 h-10 rounded-full font-semibold text-sm flex items-center justify-start pl-6 hover:opacity-90 transition">
                SEARCH..
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Certificate