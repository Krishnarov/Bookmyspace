import React, { useEffect, useState } from 'react';
import { Search, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import routes from "../route/routes";
import { Link } from 'react-router-dom';
function Header({calr}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Change threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : `bg-transparent ${calr}`
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm"></div>
          </div>
          <span className="text-2xl font-bold  ">Book my space</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          {routes.map((nab,index)=>(<Link to={nab.path} key={index} className='hover:text-pink-500 font-medium'>{nab.name}</Link>))}
        </nav>

        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <button className=" hover:text-pink-500 font-medium">Login</button>
          <button className="text-white hero-signup px-6 py-2 rounded-full font-medium hover:shadow-md transition-shadow">
            SIGN UP
          </button>
          <div className="flex space-x-2">
            <Facebook className="w-5 h-5 text-blue-600 cursor-pointer" />
            <Twitter className="w-5 h-5 text-blue-400 cursor-pointer" />
            <Youtube className="w-5 h-5 text-red-600 cursor-pointer" />
            <Instagram className="w-5 h-5 text-pink-600 cursor-pointer" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
