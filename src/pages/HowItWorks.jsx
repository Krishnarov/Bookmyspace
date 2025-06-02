import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroHead from "../components/HeroHead";
import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  CheckCircle,
  RefreshCw,
  CalendarCheck,
  Slash,
  ShieldCheck,
  LocateFixed,
  BellRing,
} from "lucide-react";
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Open the app",
      description:
        "Launch the BookMySpace app to begin your smart library experience right from your phone or desktop.",
      icon: Search,
      details: [
        "Access the platform from web or mobile",
        "Explore featured collections and tools",
        "Get personalized book and room suggestions",
        "Start searching instantly with smart filters",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Choose any library nearby",
      description:
        "Browse a list of libraries closest to you and pick the one that best suits your needs for study or borrowing.",
      icon: Calendar,
      details: [
        "Locate libraries using GPS or pin code",
        "Check facilities offered at each branch",
        "Compare opening hours and popularity",
        "View user ratings and recommendations",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Book your seat for just today",
      description:
        "Need a study room urgently? Reserve your seat for today in seconds without long procedures.",
      icon: Calendar,
      details: [
        "Same-day booking for study spaces",
        "Check and reserve available slots instantly",
        "Choose preferred time and seating",
        "Receive immediate booking confirmation",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Go, study, succeed",
      description:
        "Arrive at your reserved space and dive into focused study with all facilities at your fingertips.",
      icon: Calendar,
      details: [
        "Show QR code or confirmation at entry",
        "Enjoy a distraction-free study zone",
        "Access books and resources in-room",
        "Stay productive with a planned schedule",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const features = [
    {
      icon: RefreshCw,
      title: "Break the Routine",
      description:
        "Choose a different library any day to keep your mind fresh and focused.",
    },
    {
      icon: CalendarCheck,
      title: "Per-Day Booking",
      description:
        "No full-month commitments. Pay only for the days you actually use.",
    },
    {
      icon: Slash,
      title: "Zero Wastage",
      description: "Skip a day? Don't pay. It's that simple and fair.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Study Spaces",
      description:
        "Peaceful, clean, and student-friendly environments guaranteed.",
    },
    {
      icon: LocateFixed,
      title: "Location-Based Discovery",
      description:
        "Find libraries near home, coaching, or college for maximum convenience.",
    },
    {
      icon: BellRing,
      title: "Smart Alerts",
      description:
        "Get alerts for due dates, expiring reservations, event invites, and new book arrivals.",
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
                The modern way to access and reserve library resources—fast,
                simple, and user-first.
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
              Book study rooms, borrow books, and manage your learning
              experience in just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="Library"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform"
              >
                Get Started Now
              </Link>
              <Link
                to="Library"
                className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 transform"
              >
                Learn More
              </Link>
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
