import React, { useEffect, useState } from "react";
import {
  Search,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Moon,
  Sun,
  Menu,
  X,
  User,
  UserPlus,
} from "lucide-react";
import routes from "../route/routes";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
function Header({ calr }) {

  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // <-- Get from context

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-gray-950 shadow-md"
            : `bg-transparent ${calr} `
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="./img/bookmyspace.jpeg" className="h-18 "  alt="" />
          <span className="md:text-2xl font-bold ">Book My Space</span>
        </div>
        {/* <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-white dark:bg-gray-800"></div>
          </div>
          <span className="text-2xl font-bold ">Book my space</span>
        </div> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {routes.map((nab, index) => (
            <Link
              to={nab.path}
              key={index}
              className="hover:text-pink-500 font-medium  transition-colors"
            >
              {nab.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <Search className="w-5 h-5 cursor-pointer text-gray-700 dark:text-gray-50 hover:text-pink-500 transition-colors" /> */}

          {/* Dark Mode Toggle Button */}
          {/* <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-orange-400" />
            ) : (
              <Moon className="w-5 h-5 hover:text-black " />
            )}
          </button> */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-orange-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-950 dark:text-gray-300" />
            )}
          </button>

          <button className="hover:text-pink-500 font-medium  transition-colors">
            Login
          </button>

          <button className="hero-signup text-white px-8 py-4 rounded-full font-semibold transition-colors">
            SIGN UP
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Dark Mode Toggle */}
         <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-orange-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-950 dark:text-gray-300" />
        )}
      </button>


          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6 text-gray-950 dark:text-gray-300" />
          </button>
        </div>
      </header>

      {/* Mobile Side Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-[60] md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-[70] md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
          <div className="flex items-center space-x-2">
            {/* <div className="w-6 h-6 bg-pink-500 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-white dark:bg-gray-800"></div>
            </div> */}
                      <img src="./img/bookmyspace.jpeg" className="h-16 rounded-full" alt="" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Book my space
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 overflow-y-scroll">
            <div className="space-y-6 ">
              {routes.map((nab, index) => (
                <Link
                  to={nab.path}
                  key={index}
                  onClick={closeMobileMenu}
                  className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  {nab.name}
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            {/* <div className="mt-8 relative">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3">
                <Search className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 outline-none"
                />
              </div>
            </div> */}

            {/* Auth Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>

              <button
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                <UserPlus className="w-5 h-5" />
                <span>SIGN UP</span>
              </button>
            </div>
          </nav>

          {/* Social Links */}
          <div className="px-6 py-6 border-t dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Follow us on:
            </p>
            <div className="flex justify-center space-x-6">
              <Facebook className="w-6 h-6 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors" />
              <Twitter className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-500 transition-colors" />
              <Youtube className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-700 transition-colors" />
              <Instagram className="w-6 h-6 text-pink-600 cursor-pointer hover:text-pink-700 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
