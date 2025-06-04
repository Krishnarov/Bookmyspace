import React, { useState } from "react";
import {
  Phone,
  Mail,
  
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
    <div className="dark">
      {/* Header */}
      <HeroHead text={"Contact us"} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Address Card */}
            <TiltCard>
              <div  className="bg-gradient-to-br from-green-300 to-green-600 dark:from-green-400 dark:to-green-700 h-full p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <p className="text-green-50 dark:text-green-100">
                  7800080503

                </p>
              </div>
            </TiltCard>

            {/* Email Card */}
            <TiltCard>
            <div className="bg-gradient-to-br from-pink-300 to-pink-600 dark:from-pink-400 dark:to-pink-700  p-8 h-full text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-pink-500 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-pink-50 dark:text-pink-100">bookmyspace.today@gmail.com</p>
            </div>
            </TiltCard>
          </div>

          {/* Contact Form Section */}
          <div className=" p-2 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Feel free to send us a message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
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
                    className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400 dark:placeholder-gray-500"
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
                  className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400 dark:placeholder-gray-500 resize-vertical"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 dark:from-pink-600 dark:to-pink-700 text-white px-12 w-full py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-pink-700 dark:hover:from-pink-700 dark:hover:to-pink-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}