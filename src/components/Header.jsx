import React, { useEffect, useState } from "react";
import {
  Search,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Moon,
  Sun,
} from "lucide-react";
import routes from "../route/routes";
import { Link } from "react-router-dom";

function Header({ calr }) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("");

// Initialize theme on component mount
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme);
  } 
}, []);

useEffect(() => {
  const html = document.documentElement;

  if (theme === "dark") {
    html.classList.add("dark");
    html.setAttribute("data-theme", "dark");
  } else {
    html.classList.remove("dark");
    html.setAttribute("data-theme", "light");
  }

  localStorage.setItem("theme", theme);
}, [theme]);

const toggleDarkMode = () => {
  setTheme((prev) => (prev === "light" ? "dark" : "light"));
};


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-gray-950 shadow-md"
            : `bg-transparent ${calr}`
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-white dark:bg-gray-800"></div>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Book my space
          </span>
        </div>

        <nav className="hidden md:flex space-x-8">
          {routes.map((nab, index) => (
            <Link
              to={nab.path}
              key={index}
              className="hover:text-pink-500 font-medium text-gray-700 dark:text-gray-50 transition-colors"
            >
              {nab.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer text-gray-700 dark:text-gray-50 hover:text-pink-500 transition-colors" />

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-orange-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          <button className="hover:text-pink-500 font-medium text-gray-700 dark:text-gray-50 transition-colors">
            Login
          </button>

          <button className="hero-signup text-white px-8 py-4 rounded-full font-semibold transition-colors">
            SIGN UP
          </button>

          <div className="flex space-x-2">
            <Facebook className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors" />
            <Twitter className="w-5 h-5 text-blue-400 cursor-pointer hover:text-blue-500 transition-colors" />
            <Youtube className="w-5 h-5 text-red-600 cursor-pointer hover:text-red-700 transition-colors" />
            <Instagram className="w-5 h-5 text-pink-600 cursor-pointer hover:text-pink-700 transition-colors" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
