import emailjs from "@emailjs/browser";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import dampProtect from "../image/Damp-Protect.png";

import shape from "../image/Koreanfixi_WebBanner.png"; // Add this
import shapeTwo from "../image/Koreanfixi_WebBanner2.png"; // Add this
import logo from "../image/Ko-Fixit-Logo.png";

const products = [
  {
    id: 3,
    shortTitle: "KOFIXPROOF 101 WP+",
    heading: "Advanced Waterproofing & Water-Reducing Concrete Admixture",
    description:
      "KOFIXPROOF 101 WP+ by Korean Fixit is a high-performance waterproofing and water-reducing concrete admixture designed to enhance the strength, durability, and impermeability of concrete. It reduces water permeability while improving workability, resulting in denser, stronger, and more durable concrete structures. This advanced formulation is ideal for projects exposed to moisture, groundwater, or harsh environmental conditions.",
    packaging: "1 Litre, 5 Litre, 10 Litre, 20 Litre",
    img: dampProtect,
  },
];

const DampProtect = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(() => {
        alert("Application Sent Successfully!");
        setIsOpen(false);
      })
      .catch((error) => console.error(error));
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* NAVBAR */}
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
              <NavLink to="/about" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                ABOUT US
              </NavLink>
              <NavLink to="/contact" className="text-white text-sm tracking-widest hover:text-[#FDD304] transition">
                CONTACT
              </NavLink>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="text-right text-sm leading-tight">
                <p className="font-medium text-white">Hotline</p>
                <p className="font-semibold text-white">+88 0189 8795 761</p>
              </div>
              <button className="bg-[#FDD304] text-[#1F1954] w-47 h-10 rounded-full font-semibold text-sm flex items-center justify-start pl-6 hover:opacity-90 transition">
                SEARCH..
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* BANNER */}
      <div id="banner" className="py-20 bg-[#f8f9fb] ">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h4 className="text-[#00AFC1] font-semibold tracking-wide text-lg mb-6">{product.shortTitle}</h4>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-10 whitespace-pre-line">{product.heading}</h1>
              <div className="text-gray-600 leading-relaxed space-y-6 whitespace-pre-line">
                <p>{product.description}</p>
                <p className="font-medium">Available Packaging: {product.packaging}</p>
              </div>

              <div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="mt-8 bg-[#FDD304] text-[#1F1954] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Get Dealership
                </button>

                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
                    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#1F1954] shadow text-white transition-all duration-300"
                      >
                        ✕
                      </button>

                      <h2 className="text-2xl font-bold text-center text-[#1F1954] mb-6">Apply for Dealership</h2>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-5 border border-[#1F1954]/20 p-6 rounded-2xl bg-white"
                      >
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-50 border border-[#1F1954]/30 px-4 py-3 rounded-lg text-[#1F1954] placeholder:text-gray-500 focus:bg-white focus:border-[#1F1954] focus:ring-2 focus:ring-[#1F1954]/30 outline-none transition-all duration-300" />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-50 border border-[#1F1954]/30 px-4 py-3 rounded-lg text-[#1F1954] placeholder:text-gray-500 focus:bg-white focus:border-[#1F1954] focus:ring-2 focus:ring-[#1F1954]/30 outline-none transition-all duration-300" />
                        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-50 border border-[#1F1954]/30 px-4 py-3 rounded-lg text-[#1F1954] placeholder:text-gray-500 focus:bg-white focus:border-[#1F1954] focus:ring-2 focus:ring-[#1F1954]/30 outline-none transition-all duration-300" />
                        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full bg-gray-50 border border-[#1F1954]/30 px-4 py-3 rounded-lg h-28 resize-none text-[#1F1954] placeholder:text-gray-500 focus:bg-white focus:border-[#1F1954] focus:ring-2 focus:ring-[#1F1954]/30 outline-none transition-all duration-300" />
                        <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white bg-[#1F1954] hover:bg-[#2a2370] hover:shadow-lg active:scale-95 transition-all duration-300">Submit Application</button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img src={product.img} alt={product.shortTitle} className="w-[320px] md:w-[380px] drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* TECHNICAL & DETAILS */}
      <div className="border-t   ">
        {product.id === 3 && (
          <section className="max-w-[1500px] mx-auto border-t border-b border-gray-300 py-12 px-6 text-[15px] leading-relaxed">
            {/* ================= TOP SECTION ================= */}
            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <div>
                <h2 className="text-[22px] font-semibold mb-6">Key Features & Benefits</h2>
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
                    "Free from harmful chemicals – safe for water-retaining structures",
                    "Reduces long-term repair and maintenance costs",
                  ].map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-green-600 mr-3 mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                <img src={shape} alt="Concrete Admixture" className="w-[580px] object-contain" />
              </div>
            </div>

            {/* ================= APPLICATION + BENEFITS ================= */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex mt-10">
                  <img src={shapeTwo} alt="Concrete Admixture" className="w-[480px] object-contain" />
                </div>
              </div>

              <div>
                <h3 className="text-[20px] font-semibold mb-5">Benefits of KOFIXPROOF 101 WP+</h3>
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ================= USAGE AREAS ================= */}
            <div className="mb-16">
              <h2 className="text-[22px] font-semibold text-center mb-10">Usage Areas of KOFIXPROOF 101 WP+</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-semibold mb-2">Foundations & Basements</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Prevents water seepage and rising dampness</li>
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Strengthens structural integrity</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Water Tanks & Reservoirs</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Ensures watertight concrete</li>
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Prevents leakage and contamination</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Tunnels & Underground Structures</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Prevents water ingress</li>
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Enhances structural durability</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Marine & Coastal Structures</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Resists saltwater and sulfate attacks</li>
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Performs effectively in aggressive environments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Roof Slabs & Podiums</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Protects against rainwater penetration</li>
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Reduces cracking and shrinkage</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Bridges & Highways</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Improves resistance to weather exposure</li>
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Reduces permeability and chloride attack</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Swimming Pools & Wet Areas</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Provides waterproof concrete mix</li>
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Withstands constant water exposure</li>
                  </ul>

                  <h4 className="font-semibold mb-2">Sewage & Water Treatment Plants</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Protects against chemical corrosion</li>
                    <li className="flex"><span className="text-indigo-700 mr-3">▪</span>Extends service life of concrete tanks and channels</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================= TECHNICAL INFORMATION ================= */}
            <div>
              <h2 className="text-[20px] font-semibold mb-6">Technical Information</h2>
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
                      <td className="p-3 border">Waterproofing & Water-Reducing Concrete Admixture</td>
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

export default DampProtect;