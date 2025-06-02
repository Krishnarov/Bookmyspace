import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const HomeFooter = () => {
  const partners = [
    { name: 'Arillina Academy', logo: '🅰️' },
    { name: 'Hub Edumart', logo: '🏫' },
    { name: 'Odekha Academy', logo: '📚' },
    { name: 'Selectia Education', logo: '🎓' },
    { name: 'BrainUp', logo: '🧠' },
    { name: 'Educating Learning Center', logo: '📖' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Logos */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <span className="text-2xl">{partner.logo}</span>
                <span className="font-medium text-sm md:text-base">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Section - Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              {/* <div className="w-8 h-8 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚓</span>
              </div> */}
                  <img src="./img/bookmyspace.jpeg" className="h-18 rounded-full"  alt="" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Book My Space</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Aexerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              aute irure dolor in repr henderit in volu ptate velit esse cillum dolore
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 dark:bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-500 dark:bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-600 dark:hover:bg-red-500 transition-colors">
                <span className="text-sm font-bold">G+</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 dark:bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Center Section - Important Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">IMPORTANT LINKS</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">All Courses</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Instructors</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Careers</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Premium Plans</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">FAQ & Help</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Blogs</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Certificate</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Resources</a>
            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Student Illustration */}
              <div className="w-64 h-64  dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center">
                {/* <div className="text-6xl opacity-50 dark:opacity-30">🎓</div> */}
 <img src="./img/home4-footer-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              All rights reserved <span className="font-semibold">Bookmyspace</span> © 2025  Desined & Developed by <a href="https://digicoders.in/" className='font-bold'>Digicoders.in</a>
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Terms & Condition</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Cookies</a>
            </div>

            {/* Scroll to top button */}
            <button className="w-8 h-8 bg-red-500 dark:bg-red-600 text-white rounded-sm flex items-center justify-center hover:bg-red-600 dark:hover:bg-red-500 transition-colors">
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;