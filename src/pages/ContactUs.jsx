// import React from 'react'

// function ContactUs() {
//   return (
//     <div>ContactUs</div>
//   )
// }

// export default ContactUs
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroHead from "../components/HeroHead";
import TiltCard from "../components/TiltCard";

export default function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We will respond within 24 hours.");
    setFormData({ name: "", email: "", query: "" });
  };

  return (
    <div className="">
      {/* Header */}
      <HeroHead text={"Contact us"} />

      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Address Card */}
            <TiltCard>
              <div  className="bg-gradient-to-br from-green-300 to-green-600 h-full p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <p className="text-green-50">
                  7800080503

                </p>
              </div>
            </TiltCard>

            {/* Email Card */}
            <TiltCard>
            <div className="bg-gradient-to-br from-pink-300 to-pink-600  p-8 h-full text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-pink-50">Bookmyspace.today@gmail.com</p>
            </div>
            </TiltCard>
          </div>

          {/* Contact Form Section */}
          <div className=" p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Feel free to send us a message
              </h2>
              <p className="text-gray-600 text-lg">
                We always want to hear from you. We will response with in 24
                hours.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="mb-8">
                <textarea
                  name="query"
                  placeholder="Your query *"
                  value={formData.query}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400 resize-vertical"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9638590228838!2d80.94701827603879!3d26.904642076651996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd90f852511b%3A0xea3004cdf494ecbb!2sDigiCoders%20Technologies%20Private%20Limited%2C%20Best%20Software%2FWebsite%2FMobile%20App%20Development%20Company%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1748071501788!5m2!1sen!2sin"
                width="100%"
                height="400"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
