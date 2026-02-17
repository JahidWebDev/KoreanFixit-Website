import React, { useState, useRef, useEffect} from 'react';
import { Menu, X, Phone, MapPin, ChevronRight, Shield, Palette, Truck, Factory, HardHat, ThermometerSun, Droplets } from 'lucide-react';
import { NavLink } from "react-router-dom";
import logo from "../image/Ko-Fixit-Logo.png";
import banner from "../image/Banner.png";
import { FaWhatsapp } from "react-icons/fa";

import img1 from "../image/Shanta.png";
import img2 from "../image/MIyako.png";
import img3 from "../image/Bay-Buildres.png";
import img4 from "../image/Aci-Motors.png";
import img5 from "../image/Pran-RFL.png";
import img6 from "../image/AI-IM.png";
import img7 from "../image/City-Group.png";
import img8 from "../image/Beximco.png";
const logos = [img1, img2, img3, img4, img5, img6, img7, img8];



import orangeBlob from "../image/Icon.png";
import blueBlob from "../image/Icon-.png";
import product1 from "../image/Damp-Protect.png";
import product2 from "../image/Damp-Protect.png";
import product3 from "../image/Damp-Protect.png";

const products = [
  {
    id: 1,
    title: "Waterproofing",
    desc:
      "Concrete waterproofing is the process of applying specialized waterproofing systems on concrete structures to stop water infiltration, reduce dampness, and enhance structural durability.",
    img: product1,
  },
  {
    id: 2,
    title: "Water Reducing",
    desc:
      "Water Reducing Admixture is designed to reduce the water content in concrete while maintaining workability, resulting in higher strength, improved durability, and better finish.",
    img: product2,
  },
  {
    id: 3,
    title: "Damp Protect",
    desc:
      "Damp Protect is a specialized treatment designed to prevent moisture penetration in walls and concrete surfaces, protecting structures from dampness, stains, and long-term damage.",
    img: product3,
  },
];


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



// ====================================







  return (
    <div className="min-h-screen bg-bg">
      

      {/* Navigation */}
      <nav className="bg-[#1F1954] sticky top-0 z-50">
  <div className="max-w-[1500px] mx-auto px-6">
    <div className="flex items-center justify-between py-4">

      {/* Logo */}
      <div className="flex items-center">
      <img
  src={logo}
  alt="KO FIXIT"
  className="h-17 w-auto"
/>

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
  <p className="text-white font-semibold">+8801788-360303</p>
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
    Concrete Construction Admixture & Waterproofing
    Solution in Bangladesh
  </p>

  <button className="mt-8 bg-[#FDD304] text-[#1F1954] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
    Get Dealership
  </button>

</div>

  </div>

  {/* WhatsApp Floating Button */}
  <a
    href="https://wa.me/8801788360303"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-[#2DB14A] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition z-50"
  >
    <FaWhatsapp className="text-white text-2xl" />
  </a>
</section>


      {/* Additional Sections would go here */}
    <section className="bg-[#f8f9fb] py-16">
      <div className=" max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

  {/* ===== LEFT SIDE : IMAGE / SHAPE ===== */}
 <div>
    <p className="text-[31px] font-semibold text-[#009EB9] mb-10 mt-10">
      High-Quality Construction Chemicals
    </p>

    <h1 className="text-3xl md:text-4xl lg:text-[70px] font-bold text-gray-800 leading-tight mb-6">
      <span className="block">KOREAN</span>
      Formulation,<br /> Technology, and
      <br />
      R&amp;D of German
    </h1>

    <p className="text-gray-600 leading-relaxed max-w-xl mb-36">
      Korean Fixit supplies high quality construction chemicals to
      Bangladesh, using modern Korean technology and international
      standards. Our products are specially designed to increase the
      strength, workability, durability and water resistance of
      concrete.
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
      className="absolute top-10 left-10 w-72 rotate-[-10deg]"
    />
  </div>

    {/* Bottom Right Image Blob */}
  <div>
        <img
      src={blueBlob}
      alt="blue blob"
      className="absolute bottom-10  right-10 w-44 rotate-[15deg]"
    />
  </div>
  </div>
</div>

</div>

      </div>
    </section>

<section className="py-20 bg-[#f8f9fb]">
      <div className=" max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
      <h2 className="text-center text-4xl font-semibold text-[#009EB9]">
  Our Products
</h2>

<p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-16 leading-relaxed">
Premium construction chemicals for waterproofing, water reduction,
and long-lasting concrete protection.
</p>


        {/* Product Grid */}
        <div className="grid bg-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="border border-gray-400 p-6 text-center"
            >
              {/* Image Box */}
              <div className="flex justify-center items-end h-[260px] border-b border-gray-300 mb-6">
                <img
                  src={p.img}
                  alt={p.title}
                  className="object-contain max-h-[240px]"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className="bg-[#f8f9fb] py-24">
  
  {/* Heading */}
  <div className="max-w-3xl mx-auto text-center mb-14 px-4">
    <h2 className="text-3xl text-[#009EB9] md:text-4xl font-bold ">
     Business Solutions
    </h2>
    <p className="mt-4 text-gray-500 leading-relaxed">
      We provide high-quality services, innovative strategies, and reliable support 
      to help businesses grow faster and build a strong digital presence.
    </p>
  </div>

  {/* Logo Grid */}
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      
      {logos.map((logo, i) => (
        <div
          key={i}
          className="bg-white border border-[#C9A46A] p-8 flex items-center justify-center
                    "
        >
          <img
            src={logo}
            alt={`company-logo-${i}`}
            className="h-12 object-contain  transition"
          />
        </div>
      ))}

    </div>
  </div>

</section>


    </div>
  );
};

export default Home;