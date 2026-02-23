import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import waterReducing from "../image/Water-Reducing.png";
import waterproofing from "../image/Waterproofing.png";
import dampProtect from "../image/Damp-Protect.png";
import logo from "../image/Ko-Fixit-Logo.png";
import shape from "../image/Koreanfixi_WebBanner2.png";

const products = [
  {
    id: 1,
    shortTitle: "KOFIXPROOF 101 WP+",
    heading: `Advanced Waterproofing &
Water-Reducing
Concrete Admixture`,
    description: `KOFIXPROOF 101 WP+ by Korean Fixit is a high-performance waterproofing and water-reducing concrete
admixture designed to enhance the strength, durability, and impermeability of concrete.

It reduces water permeability while improving workability, resulting in denser, stronger, and more durable
concrete structures. This advanced formulation is ideal for projects exposed to moisture, groundwater, or harsh environmental conditions.`,
    packaging: "1 litre, 5 litre, 10 litre, and 20 litre",
    img: waterproofing,
  },
  {
    id: 2,
    shortTitle: "Water Reducing",
    heading: "High Performance Water Reducing Admixture",
    description: "Water Reducing Admixture is designed to reduce water content while maintaining workability.",
    packaging: "1 litre, 5 litre, 10 litre",
    img: waterReducing,
  },
  {
    id: 3,
    shortTitle: "Damp Protect",
    heading: "Advanced Damp Protection Solution",
    description: "Damp Protect prevents moisture penetration in walls and concrete surfaces.",
    packaging: "1 litre, 5 litre",
    img: dampProtect,
  },
];

const Products = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  // যদি /products এ যাও (id না থাকে)
  if (!id) {
    return <div className="min-h-screen">
       <nav className="bg-[#1F1954] sticky top-0 z-50">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src={logo} alt="KO FIXIT" className="h-17 w-auto" />
            </div>

            <div className="hidden lg:flex items-center space-x-12">
              <NavLink to="/" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                HOME
              </NavLink>
              <NavLink to="/products" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                PRODUCTS
              </NavLink>
              <NavLink to="/certificate" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                CERTIFICATE
              </NavLink>
              <NavLink to="/contact" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                CONTACT
              </NavLink>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="text-right text-white text-sm leading-tight">
                <p className="font-medium">Hotline</p>
                <p className="font-semibold">+8801788-360303</p>
              </div>

              <button className="bg-[#FDD304] text-[#1F1954] w-47 h-10 rounded-full font-semibold text-sm flex items-center justify-start pl-6 hover:opacity-90 transition">
                SEARCH..
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>;
  }

  // যদি ভুল id হয়
  if (!product) {
    return <div className="text-center py-20">Product Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-bg">
      <nav className="bg-[#1F1954] sticky top-0 z-50">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src={logo} alt="KO FIXIT" className="h-17 w-auto" />
            </div>

            <div className="hidden lg:flex items-center space-x-12">
              <NavLink to="/" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                HOME
              </NavLink>
              <NavLink to="/products" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                PRODUCTS
              </NavLink>
              <NavLink to="/certificate" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                CERTIFICATE
              </NavLink>
              <NavLink to="/contact" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                CONTACT
              </NavLink>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="text-right text-white text-sm leading-tight">
                <p className="font-medium">Hotline</p>
                <p className="font-semibold">+8801788-360303</p>
              </div>

              <button className="bg-[#FDD304] text-[#1F1954] w-47 h-10 rounded-full font-semibold text-sm flex items-center justify-start pl-6 hover:opacity-90 transition">
                SEARCH..
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div>
              <h4 className="text-[#00AFC1] font-semibold tracking-wide text-lg mb-6">
                {product.shortTitle}
              </h4>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-10 whitespace-pre-line">
                {product.heading}
              </h1>

              <div className="text-gray-600 leading-relaxed space-y-6 whitespace-pre-line">
                <p>{product.description}</p>

                <p className="font-medium">
                  Available Packaging: {product.packaging}
                </p>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="mt-8 bg-[#FDD304] text-[#1F1954] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Dealership
              </button>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src={product.img}
                alt={product.shortTitle}
                className="w-[320px] md:w-[380px] drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
  <div className="">
    {product.id=== 1 && (
  <section className="max-w-[1500px] mx-auto border-t border-b border-gray-300 py-12 px-6 text-[15px] leading-relaxed">

    {/* ================= TOP SECTION ================= */}
    <div className="grid md:grid-cols-2 gap-16 items-start mb-16">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-[22px] font-semibold mb-6">
          Key Features & Benefits
        </h2>

        <ul className="space-y-3">
          {[
            "Provides both waterproofing and water-reducing properties for enhanced concrete durability",
            "Improves workability without compromising strength",
            "Reduces permeability to prevent water penetration and moisture damage",
            "Increases compressive and flexural strength by optimizing the water-cement ratio",
            "Minimizes shrinkage and reduces the risk of cracks",
            "Ensures smooth concrete placement and finishing without segregation or bleeding",
            "Protects concrete against harsh weather, chemical attack, and environmental exposure",
            "Compatible with various cement types and mix designs",
            "Free from harmful chemicals-safe for water-retaining structures",
            "Reduces long-term repair and maintenance costs",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-green-600 mr-3 mt-1">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src={shape}
          alt="Concrete Admixture"
          className="w-[380px] object-contain"
        />
      </div>
    </div>

    {/* ================= APPLICATION + BENEFITS ================= */}
    <div className="grid md:grid-cols-2 gap-16 mb-16">

      {/* Applications */}
      <div>
        <h3 className="text-[20px] font-semibold mb-5">Applications</h3>
        <ul className="space-y-3">
          {[
            "Roof slab waterproofing",
            "Basement & foundation works",
            "Water tanks & reservoirs",
            "Bridges & culverts",
            "Industrial & commercial RCC structures",
            "Residential building construction",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-indigo-700 mr-3">▪</span>
              {item}
            </li>
          ))}
        </ul>
          <div className="flex mt-10 ">
        <img
          src={shape}
          alt="Concrete Admixture"
          className="w-[380px] object-contain"
        />
      </div>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-[20px] font-semibold mb-5">
          Benefits of KOFIXPROOF 101 WP+
        </h3>
        <ul className="space-y-3">
          {[
            "Lowers the water-cement ratio for higher compressive strength",
            "Reduces concrete porosity and prevents leakage, dampness, and corrosion",
            "Improves concrete flow and placement efficiency",
            "Minimizes shrinkage and cracking",
            "Protects against freeze-thaw cycles, sulfate attacks, and chloride penetration",
            "Enhances long-term durability and cost efficiency",
            "Ideal for structures exposed to water, chemicals, and aggressive environments",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-indigo-700 mr-3">▪</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* ================= USAGE AREAS ================= */}
    <div className="mb-16">
      <h2 className="text-[22px] font-semibold text-center mb-10">
        Usage Areas of KOFIXPROOF 101 WP+
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <h4 className="font-semibold mb-2">Foundations & Basements</h4>
          <p>Prevents water seepage and rising dampness</p>
          <p className="mb-4">Strengthens structural integrity</p>

          <h4 className="font-semibold mb-2">Water Tanks & Reservoirs</h4>
          <p>Ensures watertight concrete</p>
          <p className="mb-4">Prevents leakage and contamination</p>

          <h4 className="font-semibold mb-2">Tunnels & Underground Structures</h4>
          <p>Prevents water ingress</p>
          <p>Enhances structural durability</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Roof Slabs & Podiums</h4>
          <p>Protects against rainwater penetration</p>
          <p className="mb-4">Reduces cracking and shrinkage</p>

          <h4 className="font-semibold mb-2">Bridges & Highways</h4>
          <p>Improves resistance to weather exposure</p>
          <p className="mb-4">Reduces permeability and chloride attack</p>

          <h4 className="font-semibold mb-2">Swimming Pools & Wet Areas</h4>
          <p>Provides waterproof concrete mix</p>
          <p className="mb-4">Withstands constant water exposure</p>

          <h4 className="font-semibold mb-2">Sewage & Water Treatment Plants</h4>
          <p>Protects against chemical corrosion</p>
          <p className="mb-4">Extends service life of concrete tanks and channels</p>

          <h4 className="font-semibold mb-2">Marine & Coastal Structures</h4>
          <p>Resists saltwater and sulfate attacks</p>
          <p>Performs effectively in aggressive environment</p>
        </div>

      </div>
    </div>

    {/* ================= TECHNICAL INFORMATION ================= */}
    <div>
      <h2 className="text-[20px] font-semibold mb-6">
        Technical Information
      </h2>

      <div className="overflow-x-auto shadow-sm">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-indigo-900 text-white">
            <tr>
              <th className="p-3 border">Product Name</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Form</th>
              <th className="p-3 border">Pack</th>
              <th className="p-3 border">Dosage</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="p-3 border">KOFIXPROOF 101 WP+</td>
              <td className="p-3 border">
                Waterproofing & Water-Reducing Concrete Admixture
              </td>
              <td className="p-3 border">Liquid</td>
              <td className="p-3 border">20 KG</td>
              <td className="p-3 border">
                250 ml per 50 kg cement bag
                <br />
                <span className="text-xs text-gray-500">
                  (Actual dosage may vary depending on mix design and site requirements.)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm">
        <strong>Available Packaging:</strong> 1 litre, 5 litre, 10 litre, and 20 litre
      </p>
    </div>

  </section>
)}
    {product.id=== 2 && (
  <section className="max-w-[1500px] mx-auto border-t border-b border-gray-300 py-12 px-6 text-[15px] leading-relaxed">

    {/* ================= TOP SECTION ================= */}
    <div className="grid md:grid-cols-2 gap-16 items-start mb-16">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-[22px] font-semibold mb-6">
          Key Features & Benefits
        </h2>

        <ul className="space-y-3">
          {[
            "Provides both waterproofing and water-reducing properties for enhanced concrete durability",
            "Improves workability without compromising strength",
            "Reduces permeability to prevent water penetration and moisture damage",
            "Increases compressive and flexural strength by optimizing the water-cement ratio",
            "Minimizes shrinkage and reduces the risk of cracks",
            "Ensures smooth concrete placement and finishing without segregation or bleeding",
            "Protects concrete against harsh weather, chemical attack, and environmental exposure",
            "Compatible with various cement types and mix designs",
            "Free from harmful chemicals-safe for water-retaining structures",
            "Reduces long-term repair and maintenance costs",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-green-600 mr-3 mt-1">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src={shape}
          alt="Concrete Admixture"
          className="w-[380px] object-contain"
        />
      </div>
    </div>

    {/* ================= APPLICATION + BENEFITS ================= */}
    <div className="grid md:grid-cols-2 gap-16 mb-16">

      {/* Applications */}
      <div>
        <h3 className="text-[20px] font-semibold mb-5">Applications</h3>
        <ul className="space-y-3">
          {[
            "Roof slab waterproofing",
            "Basement & foundation works",
            "Water tanks & reservoirs",
            "Bridges & culverts",
            "Industrial & commercial RCC structures",
            "Residential building construction",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-indigo-700 mr-3">▪</span>
              {item}
            </li>
          ))}
        </ul>
          <div className="flex mt-10 ">
        <img
          src={shape}
          alt="Concrete Admixture"
          className="w-[380px] object-contain"
        />
      </div>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-[20px] font-semibold mb-5">
          Benefits of KOFIXPROOF 101 WP+
        </h3>
        <ul className="space-y-3">
          {[
            "Lowers the water-cement ratio for higher compressive strength",
            "Reduces concrete porosity and prevents leakage, dampness, and corrosion",
            "Improves concrete flow and placement efficiency",
            "Minimizes shrinkage and cracking",
            "Protects against freeze-thaw cycles, sulfate attacks, and chloride penetration",
            "Enhances long-term durability and cost efficiency",
            "Ideal for structures exposed to water, chemicals, and aggressive environments",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-indigo-700 mr-3">▪</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* ================= USAGE AREAS ================= */}
    <div className="mb-16">
      <h2 className="text-[22px] font-semibold text-center mb-10">
        Usage Areas of KOFIXPROOF 101 WP+
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <h4 className="font-semibold mb-2">Foundations & Basements</h4>
          <p>Prevents water seepage and rising dampness</p>
          <p className="mb-4">Strengthens structural integrity</p>

          <h4 className="font-semibold mb-2">Water Tanks & Reservoirs</h4>
          <p>Ensures watertight concrete</p>
          <p className="mb-4">Prevents leakage and contamination</p>

          <h4 className="font-semibold mb-2">Tunnels & Underground Structures</h4>
          <p>Prevents water ingress</p>
          <p>Enhances structural durability</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Roof Slabs & Podiums</h4>
          <p>Protects against rainwater penetration</p>
          <p className="mb-4">Reduces cracking and shrinkage</p>

          <h4 className="font-semibold mb-2">Bridges & Highways</h4>
          <p>Improves resistance to weather exposure</p>
          <p className="mb-4">Reduces permeability and chloride attack</p>

          <h4 className="font-semibold mb-2">Swimming Pools & Wet Areas</h4>
          <p>Provides waterproof concrete mix</p>
          <p className="mb-4">Withstands constant water exposure</p>

          <h4 className="font-semibold mb-2">Sewage & Water Treatment Plants</h4>
          <p>Protects against chemical corrosion</p>
          <p className="mb-4">Extends service life of concrete tanks and channels</p>

          <h4 className="font-semibold mb-2">Marine & Coastal Structures</h4>
          <p>Resists saltwater and sulfate attacks</p>
          <p>Performs effectively in aggressive environment</p>
        </div>

      </div>
    </div>

    {/* ================= TECHNICAL INFORMATION ================= */}
    <div>
      <h2 className="text-[20px] font-semibold mb-6">
        Technical Information
      </h2>

      <div className="overflow-x-auto shadow-sm">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-indigo-900 text-white">
            <tr>
              <th className="p-3 border">Product Name</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Form</th>
              <th className="p-3 border">Pack</th>
              <th className="p-3 border">Dosage</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="p-3 border">KOFIXPROOF 101 WP+</td>
              <td className="p-3 border">
                Waterproofing & Water-Reducing Concrete Admixture
              </td>
              <td className="p-3 border">Liquid</td>
              <td className="p-3 border">20 KG</td>
              <td className="p-3 border">
                250 ml per 50 kg cement bag
                <br />
                <span className="text-xs text-gray-500">
                  (Actual dosage may vary depending on mix design and site requirements.)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm">
        <strong>Available Packaging:</strong> 1 litre, 5 litre, 10 litre, and 20 litre
      </p>
    </div>

  </section>
)}
    {product.id=== 3 && (
  <section className="max-w-[1500px] mx-auto border-t border-b border-gray-300 py-12 px-6 text-[15px] leading-relaxed">

    {/* ================= TOP SECTION ================= */}
    <div className="grid md:grid-cols-2 gap-16 items-start mb-16">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-[22px] font-semibold mb-6">
          Key Features & Benefits
        </h2>

        <ul className="space-y-3">
          {[
            "Provides both waterproofing and water-reducing properties for enhanced concrete durability",
            "Improves workability without compromising strength",
            "Reduces permeability to prevent water penetration and moisture damage",
            "Increases compressive and flexural strength by optimizing the water-cement ratio",
            "Minimizes shrinkage and reduces the risk of cracks",
            "Ensures smooth concrete placement and finishing without segregation or bleeding",
            "Protects concrete against harsh weather, chemical attack, and environmental exposure",
            "Compatible with various cement types and mix designs",
            "Free from harmful chemicals-safe for water-retaining structures",
            "Reduces long-term repair and maintenance costs",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-green-600 mr-3 mt-1">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src={shape}
          alt="Concrete Admixture"
          className="w-[380px] object-contain"
        />
      </div>
    </div>

    {/* ================= APPLICATION + BENEFITS ================= */}
    <div className="grid md:grid-cols-2 gap-16 mb-16">

      {/* Applications */}
      <div>
        <h3 className="text-[20px] font-semibold mb-5">Applications</h3>
        <ul className="space-y-3">
          {[
            "Roof slab waterproofing",
            "Basement & foundation works",
            "Water tanks & reservoirs",
            "Bridges & culverts",
            "Industrial & commercial RCC structures",
            "Residential building construction",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-indigo-700 mr-3">▪</span>
              {item}
            </li>
          ))}
        </ul>
          <div className="flex mt-10 ">
        <img
          src={shape}
          alt="Concrete Admixture"
          className="w-[380px] object-contain"
        />
      </div>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-[20px] font-semibold mb-5">
          Benefits of KOFIXPROOF 101 WP+
        </h3>
        <ul className="space-y-3">
          {[
            "Lowers the water-cement ratio for higher compressive strength",
            "Reduces concrete porosity and prevents leakage, dampness, and corrosion",
            "Improves concrete flow and placement efficiency",
            "Minimizes shrinkage and cracking",
            "Protects against freeze-thaw cycles, sulfate attacks, and chloride penetration",
            "Enhances long-term durability and cost efficiency",
            "Ideal for structures exposed to water, chemicals, and aggressive environments",
          ].map((item, i) => (
            <li key={i} className="flex">
              <span className="text-indigo-700 mr-3">▪</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* ================= USAGE AREAS ================= */}
    <div className="mb-16">
      <h2 className="text-[22px] font-semibold text-center mb-10">
        Usage Areas of KOFIXPROOF 101 WP+
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <h4 className="font-semibold mb-2">Foundations & Basements</h4>
          <p>Prevents water seepage and rising dampness</p>
          <p className="mb-4">Strengthens structural integrity</p>

          <h4 className="font-semibold mb-2">Water Tanks & Reservoirs</h4>
          <p>Ensures watertight concrete</p>
          <p className="mb-4">Prevents leakage and contamination</p>

          <h4 className="font-semibold mb-2">Tunnels & Underground Structures</h4>
          <p>Prevents water ingress</p>
          <p>Enhances structural durability</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Roof Slabs & Podiums</h4>
          <p>Protects against rainwater penetration</p>
          <p className="mb-4">Reduces cracking and shrinkage</p>

          <h4 className="font-semibold mb-2">Bridges & Highways</h4>
          <p>Improves resistance to weather exposure</p>
          <p className="mb-4">Reduces permeability and chloride attack</p>

          <h4 className="font-semibold mb-2">Swimming Pools & Wet Areas</h4>
          <p>Provides waterproof concrete mix</p>
          <p className="mb-4">Withstands constant water exposure</p>

          <h4 className="font-semibold mb-2">Sewage & Water Treatment Plants</h4>
          <p>Protects against chemical corrosion</p>
          <p className="mb-4">Extends service life of concrete tanks and channels</p>

          <h4 className="font-semibold mb-2">Marine & Coastal Structures</h4>
          <p>Resists saltwater and sulfate attacks</p>
          <p>Performs effectively in aggressive environment</p>
        </div>

      </div>
    </div>

    {/* ================= TECHNICAL INFORMATION ================= */}
    <div>
      <h2 className="text-[20px] font-semibold mb-6">
        Technical Information
      </h2>

      <div className="overflow-x-auto shadow-sm">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-indigo-900 text-white">
            <tr>
              <th className="p-3 border">Product Name</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Form</th>
              <th className="p-3 border">Pack</th>
              <th className="p-3 border">Dosage</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="p-3 border">KOFIXPROOF 101 WP+</td>
              <td className="p-3 border">
                Waterproofing & Water-Reducing Concrete Admixture
              </td>
              <td className="p-3 border">Liquid</td>
              <td className="p-3 border">20 KG</td>
              <td className="p-3 border">
                250 ml per 50 kg cement bag
                <br />
                <span className="text-xs text-gray-500">
                  (Actual dosage may vary depending on mix design and site requirements.)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm">
        <strong>Available Packaging:</strong> 1 litre, 5 litre, 10 litre, and 20 litre
      </p>
    </div>

  </section>
)}
  </div>
    
    </div>
  );
};

export default Products;