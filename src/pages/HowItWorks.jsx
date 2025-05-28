
import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroHead from "../components/HeroHead";
export default function HowItWorks() {

  return (
    <div className="dark">
      {/* Header */}
      <HeroHead text={"How It Works"} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        how its works
      </div>

      <Footer />
    </div>
  );
}