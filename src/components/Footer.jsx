import React from "react";
import { Facebook, Twitter, Plus, Linkedin, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-gray-900 dark:to-black text-white relative z-0">
      {/* Main Footer Content */}
      <div className="">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white dark:border-gray-400 rounded-full opacity-10 dark:opacity-20"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white dark:border-gray-400 rounded-lg rotate-45 opacity-10 dark:opacity-20"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white dark:bg-gray-600 rounded-full opacity-10 dark:opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-white dark:border-gray-400 opacity-10 dark:opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:pr-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              {/* <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center"> */}
                {/* <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">L</span> */}
              {/* </div> */}
              <img src="./img/bookmyspace.jpeg" className="h-18"  alt="" />
              <span className="text-2xl font-bold text-white dark:text-gray-100">Book my space</span>
            </div>

            {/* Description */}
            <p className="text-purple-100 dark:text-gray-300 leading-relaxed text-sm">
  Empowering libraries with smart, simple, and secure management solutions.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white dark:text-gray-100">IMPORTANT LINKS</h3>
            <div className="grid grid-cols-2 gap-8">
              
              <Link to="/About"className="block text-purple-100 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors text-sm">About Us</Link>
                            <Link to="/HowItWorks"className="block text-purple-100 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors text-sm">How It Works</Link>
                            <Link to="/Pricing"className="block text-purple-100 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors text-sm">Pricing Plans</Link>
                            <Link to="/Library"className="block text-purple-100 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors text-sm">Library Registration</Link>
                            <Link to="/Contact"className="block text-purple-100 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors text-sm">Contact Us</Link>
              
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white dark:text-gray-100">CONNECT WITH US</h3>
            <div className="flex space-x-4 z-30">
              <a
              href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 dark:bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-500 dark:bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-600 dark:hover:bg-red-700 transition-colors"
              >
                <span className="text-sm font-bold">G+</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 dark:bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-900 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-purple-500 dark:border-gray-700 border-opacity-30 dark:border-opacity-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-purple-100 dark:text-gray-300 text-sm z-30">
              All rights reserved{" "}
              <span className="font-semibold">Book my space</span> © 2025 Desined & Developed by <a href="https://www.digicoders.in" target="_blank" className="font-bold z-10 text-white dark:text-gray-100 hover:text-purple-200 dark:hover:text-gray-200 transition-colors" >Digicoders.in</a>
            </div>

            {/* Footer Links */}
            <div className="flex space-x-8 text-sm">
              <a
                href="#"
                className="text-purple-100 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
              >
                Terms & Condition
              </a>
              <a
                href="#"
                className="text-purple-100 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-purple-100 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-3 right-6 w-10 bg-white dark:bg-gray-800 text-red-500 dark:text-red-400 h-10 bg-opacity-20 dark:bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-30 dark:hover:bg-opacity-50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-gray-400 focus:ring-opacity-50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        {/* <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white dark:border-gray-400 rounded-full"></div> */}
        <div className="absolute top-20 right-20 w-24 h-24 border border-white dark:border-gray-400 rounded-lg rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white dark:bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-white dark:border-gray-400"></div>
      </div>
    </footer>
  );
}