
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";


import { NavLink } from "react-router-dom";
import logo from "../image/Ko-Fixit-Logo.png";
import banner from "../image/Aboutus_Banner.png";
import { FaWhatsapp } from "react-icons/fa";



import orangeBlob from "../image/Icon.png";
import blueBlob from "../image/Icon-.png";




const About = () => {
  
// =================================================

const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          setIsOpen(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error);
        }
      );
  };







  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
       <div className="min-h-screen bg-bg">
         {/* Navigation */}
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
   
         {/* Hero Banner */}
         <section
           className="relative min-h-[90vh] flex items-center text-white"
           style={{
             backgroundImage: `url(${banner})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}
         >
           {/* Dark Overlay */}
           <div className="absolute inset-0 bg-[#1F1954]/10"></div>
   
           {/* Content */}
           <div className="relative max-w-7xl mx-auto px-6 w-full">
             <div className="max-w-2xl">
               <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                 KOREAN FIXIT
               </h1>
   
               <h2 className="text-4xl md:text-6xl font-semibold mt-4 leading-tight">
                 Building Strength <br /> Protecting Tomorrow
               </h2>
   
               <p className="mt-6 text-lg text-[#FDD304] max-w-xl">
                 Concrete Construction Admixture, Waterproofing
                  and Water-Reducing Solution in Bangladesh
               </p>
   
       <div className="">
   
         {/* Open Button */}
         <button
           onClick={() => setIsOpen(true)}
           className="mt-8 bg-[#FDD304] text-[#1F1954] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
         >
           Get Dealership
         </button>
   
         {/* Modal */}
         {isOpen && (
           <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
   
             <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
   
               {/* Close Button */}
               <button
                 onClick={() => setIsOpen(false)}
                 className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center 
                            rounded-full bg-[#1F1954] shadow 
                             hover:text-white 
                            transition-all duration-300"
               >
                 ✕
               </button>
   
               <h2 className="text-2xl font-bold text-center text-[#1F1954] mb-6">
                 Apply for Dealership
               </h2>
   
               {/* Form */}
               <form
                 onSubmit={handleSubmit}
                 className="space-y-5 border border-[#1F1954]/20 p-6 rounded-2xl bg-white"
               >
   
                 <input
                   type="text"
                   name="name"
                   placeholder="Your Name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   className="w-full bg-gray-50 border border-[#1F1954]/30 px-4 py-3 rounded-lg 
                              text-[#1F1954]
                              placeholder:text-gray-500
                              focus:bg-white 
                              focus:border-[#1F1954] 
                              focus:ring-2 focus:ring-[#1F1954]/30 
                              outline-none transition-all duration-300"
                 />
   
                 <input
                   type="email"
                   name="email"
                   placeholder="Your Email"
                   value={formData.email}
                   onChange={handleChange}
                   required
                   className="w-full bg-gray-50 border border-[#1F1954]/30 px-4 py-3 rounded-lg 
                              text-[#1F1954]
                              placeholder:text-gray-500
                              focus:bg-white 
                              focus:border-[#1F1954] 
                              focus:ring-2 focus:ring-[#1F1954]/30 
                              outline-none transition-all duration-300"
                 />
   
                 <input
                   type="text"
                   name="phone"
                   placeholder="Phone Number"
                   value={formData.phone}
                   onChange={handleChange}
                   required
                   className="w-full bg-gray-50 border border-[#1F1954]/30 px-4 py-3 rounded-lg 
                              text-[#1F1954]
                              placeholder:text-gray-500
                              focus:bg-white 
                              focus:border-[#1F1954] 
                              focus:ring-2 focus:ring-[#1F1954]/30 
                              outline-none transition-all duration-300"
                 />
   
                 <textarea
                   name="message"
                   placeholder="Your Message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   className="w-full bg-gray-50 border border-[#1F1954]/30 px-4 py-3 rounded-lg h-28 
                              resize-none
                              text-[#1F1954]
                              placeholder:text-gray-500
                              focus:bg-white 
                              focus:border-[#1F1954] 
                              focus:ring-2 focus:ring-[#1F1954]/30 
                              outline-none transition-all duration-300"
                 />
   
                 <button
                   type="submit"
                   className="w-full py-3 rounded-lg font-semibold text-white 
                              bg-[#1F1954] 
                              hover:bg-[#2a2370]
                              hover:shadow-lg 
                              active:scale-95
                              transition-all duration-300"
                 >
                   Submit Application
                 </button>
   
               </form>
   
             </div>
           </div>
         )}
       </div>
             </div>
           </div>
   
           {/* WhatsApp Floating Button */}
           <a
             href="https://wa.me/880189-8795761"
             target="_blank"
             rel="noopener noreferrer"
             className="fixed bottom-6 right-6 bg-[#2DB14A] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition z-50"
           >
             <FaWhatsapp className="text-white text-2xl" />
           </a>
         </section>
   
         {/* Additional Sections would go here */}
       <section className="bg-[#f4f6f9] py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* ===============================
        Our Technology & Strength
    ================================= */}
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* ===== LEFT SIDE : IMAGE / SHAPE ===== */}
<div>
  {/* Section Label */}
  <p className="text-[26px] font-semibold text-[#009EB9] mb-8 mt-6">
    Our Technology & Strength
  </p>

  {/* Main Heading */}
  <h1 className="text-[24px] md:text-[26px] font-normal text-[#2E2E2E] leading-relaxed mb-6">
    <span className="block font-semibold text-[#1F1F1F] mb-2">
      We combine
    </span>
    Korean-grade raw materials <br />
    Japanese formulation technology <br />
    International quality control standards <br />
    Climate-adapted performance for Bangladesh
  </h1>

  {/* Paragraph */}
  <p className="text-[16.5px] md:text-[17px] text-[#6B7280] leading-7 max-w-xl">
    This powerful combination allows us to deliver products that significantly
    enhance the strength, workability, durability, and water resistance of
    concrete structures.
  </p>
</div>
   
               {/* ===== RIGHT SIDE : TEXT CONTENT ===== */}
               <div className=" mr-20 mb-20">
                 <div className="relative w-full h-full min-h-[500px] overflow-hidden">
                   {/* Top Left Image Blob */}
                   <div>
                     <img
                       src={orangeBlob}
                       alt="orange blob"
                       className="absolute top-20 left-10 w-60 rotate-[-10deg]"
                     />
                   </div>
   
                   {/* Bottom Right Image Blob */}
                   <div>
                     <img
                       src={blueBlob}
                       alt="blue blob"
                       className="absolute bottom-0  right-10 w-44 rotate-[15deg]"
                     />
                   </div>
                   
                 </div>
                 
               </div>
             
             </div>


    {/* ===============================
        What We Do
    ================================= */}
    <div className="mt-24">
      <h3 className="text-[#00A6C6] text-xl font-semibold mb-6">
        What We Do?
      </h3>

      <p className="text-gray-700 mb-6">
        We specialize in high-performance solutions including:
      </p>

      <ul className="space-y-2 text-gray-700">
        <li>Concrete Admixtures</li>
        <li>Waterproofing Systems</li>
        <li>Damp-Proof Coatings</li>
        <li>Surface Protection Solutions</li>
        <li>Structural Repair Products</li>
      </ul>

      <p className="mt-6 text-gray-600 max-w-4xl">
        Each product is carefully formulated to meet the technical demands 
        of residential, commercial, and infrastructure projects.
      </p>
    </div>


    {/* ===============================
        Who We Serve
    ================================= */}
    <div className="mt-24 text-center">
      <h3 className="text-[#00A6C6] text-2xl font-semibold mb-6">
        Who We Serve
      </h3>

      <p className="mb-6 text-gray-700">We work closely with:</p>

      <ul className="space-y-2 text-gray-700">
        <li>Engineers</li>
        <li>Contractors</li>
        <li>Developers</li>
        <li>Builders</li>
        <li>Industrial Project Owners</li>
      </ul>

      <p className="mt-8 text-gray-600 max-w-3xl mx-auto">
        Our goal is to provide practical, cost-effective, and performance-driven 
        construction chemical solutions for every project size.
      </p>
    </div>


    {/* ===============================
        Our Vision
    ================================= */}
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Our Vision
      </h3>

      <p className="text-gray-600 max-w-4xl">
        To become one of the leading and most reliable construction chemical 
        brands in Bangladesh by delivering innovative, high-quality, and 
        sustainable building solutions.
      </p>
    </div>


    {/* ===============================
        Our Commitment
    ================================= */}
    <div className="mt-16">
      <h3 className="text-[#00A6C6] text-xl font-semibold mb-6">
        Our Commitment
      </h3>

      <ul className="space-y-2 text-gray-700">
        <li>Premium Raw Materials</li>
        <li>Advanced Formulation Technology</li>
        <li>Consistent Product Performance</li>
        <li>Technical Support & Guidance</li>
        <li>Long-Term Structural Protection</li>
      </ul>
    </div>

  </div>
</section>
   
         
   
       
       </div>

  )
}

export default About