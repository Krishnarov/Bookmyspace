import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroHead from "../components/HeroHead";
import {
  Search,
  Calendar,
  CheckCircle,
  BookOpen,
  Users,
  Clock,
  MapPin,
  Smartphone,
  Bell,
  Shield,
} from "lucide-react";
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Search & Browse",
      description:
        "Explore our extensive collection of books, study spaces, and resources using our advanced search filters.",
      icon: Search,
      details: [
        "Search by title, author, genre, or ISBN",
        "Filter by availability, location, and format",
        "Browse curated collections and recommendations",
        "View real-time availability status",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Select & Reserve",
      description:
        "Choose your preferred books or study spaces and make instant reservations with just a few clicks.",
      icon: Calendar,
      details: [
        "Select multiple items at once",
        "Choose pickup date and time",
        "Reserve study rooms and quiet spaces",
        "Get instant confirmation",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Visit & Enjoy",
      description:
        "Visit the library at your scheduled time and enjoy seamless access to your reserved items and spaces.",
      icon: CheckCircle,
      details: [
        "QR code for quick check-in",
        "Automated space access",
        "Extended borrowing periods",
        "Digital receipt and tracking",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Digital Catalog",
      description:
        "Access our complete collection online with real-time availability updates.",
    },
    {
      icon: Users,
      title: "Community Features",
      description:
        "Connect with fellow readers, join book clubs, and share recommendations.",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description:
        "Make reservations anytime and manage your library account around the clock.",
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description:
        "Reserve items from any of our branch locations across the city.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description:
        "Fully responsive design works perfectly on all your devices.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Get reminders for due dates, new arrivals, and available reservations.",
    },
  ];

  return (
    <div className="dark">
      {/* Header */}
      <HeroHead text={"How It Works"} />

      {/* <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4"> */}
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Main Steps Section */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Steps Navigation */}
                <div className="space-y-6">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = activeStep === index;

                    return (
                      <div
                        key={step.id}
                        className={`cursor-pointer transition-all duration-300 ${
                          isActive ? "scale-105" : "hover:scale-102"
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <div
                          className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                            isActive
                              ? "border-blue-500 bg-white dark:bg-gray-800 shadow-xl shadow-blue-500/20"
                              : "border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600"
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`p-3 rounded-xl bg-gradient-to-r ${step.color} flex-shrink-0`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span
                                  className={`text-sm font-bold px-2 py-1 rounded-full ${
                                    isActive
                                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                                      : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                                  }`}
                                >
                                  Step {step.id}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {step.description}
                              </p>
                              {isActive && (
                                <div className="space-y-2 animate-fadeIn">
                                  {step.details.map((detail, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                                    >
                                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                      {detail}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Visual Representation */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800/30">
                    <div className="text-center">
                      <div
                        className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${steps[activeStep].color} mb-6`}
                      >
                        {React.createElement(steps[activeStep].icon, {
                          className: "w-12 h-12 text-white",
                        })}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {steps[activeStep].description}
                      </p>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="space-y-3">
                          {steps[activeStep].details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 text-left"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
                  <div
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose BookMySpace?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Discover the features that make our library management system
                  the perfect choice for modern learners and readers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Library Experience?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have already discovered the
                convenience of BookMySpace. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
                  Get Started Now
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 transform">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out;
            }
          `}</style>
        </div>
      {/* </div> */}

      <Footer />
    </div>
  );
}
