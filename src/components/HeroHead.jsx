import React from "react";
import Header from "./Header";

export default function HeroHead({ text }) {
    const IMG_URI = import.meta.env.VITE_BG_URI;
  return (
    <div>
      <header
        className="p-32 relative overflow-hidden"
        style={{
          backgroundImage: ` linear-gradient(to right, #9d1df8bb, #4026e8be), url(${IMG_URI}/img/books1.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navigation */}
        <Header calr="text-white" />

        {/* Hero Section */}
        <div className="relative z-10 text-center py-20 px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-black mb-4">{text}</h1>
          <div className="flex items-center justify-center space-x-4 mt-10 text-lg">
            <span>Home</span>
            <span>/</span>
            <span className="text-purple-200">{text}</span>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-lg rotate-45"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 border border-white"></div>
        </div>
      </header>
    </div>
  );
}
