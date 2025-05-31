import Footer from "../components/Footer";
import HeroHead from "../components/HeroHead";
import React, { useState } from "react";
import {
  Check,
  X,
  BookOpen,
  GraduationCap,
  Building,
  Users,
  Database,
  Clock,
  Search,
  BarChart3,
  Shield,
  Wifi,
} from "lucide-react";

const PricingCard = ({ plan, isPopular = false }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const savings = plan.monthlyPrice * 12 - plan.annualPrice;

  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
        isPopular
          ? "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-500 shadow-xl"
          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <GraduationCap className="w-4 h-4" />
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center">
        <div className="mb-4">
          <plan.icon
            className={`w-12 h-12 mx-auto ${
              isPopular
                ? "text-emerald-500"
                : "text-gray-400 dark:text-gray-500"
            }`}
          />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {plan.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {plan.description}
        </p>

        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Up to {plan.capacity} books • {plan.users} users
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className={`text-sm ${
                !isAnnual
                  ? "text-gray-900 dark:text-white font-semibold"
                  : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isAnnual ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                isAnnual
                  ? "text-gray-900 dark:text-white font-semibold"
                  : "text-gray-500"
              }`}
            >
              Annual
            </span>
          </div>

          <div className="text-center">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <span className="text-gray-600 dark:text-gray-400 ml-2">
              /{isAnnual ? "year" : "month"}
            </span>
            {isAnnual && savings > 0 && (
              <div className="text-emerald-500 text-sm font-semibold mt-1">
                Save ${savings}/year
              </div>
            )}
          </div>
        </div>

        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            isPopular
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
              : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
          }`}
        >
          {plan.buttonText}
        </button>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
          Core Features:
        </h4>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              ) : (
                <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              )}
              <span
                className={`text-sm ${
                  feature.included
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-400 dark:text-gray-500 line-through"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      icon: Database,
      title: "Catalog Management",
      description:
        "Complete book cataloging with ISBN, barcode scanning, and metadata management",
    },
    {
      icon: Users,
      title: "Member Management",
      description:
        "Track member registrations, renewals, fines, and borrowing history",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description:
        "Powerful search capabilities across titles, authors, subjects, and categories",
    },
    {
      icon: Clock,
      title: "Circulation Control",
      description:
        "Issue, return, reserve books with automated due date tracking",
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description:
        "Comprehensive reports on circulation, inventory, and member activity",
    },
    {
      icon: Wifi,
      title: "Online Access",
      description:
        "Web-based OPAC for members to search and reserve books remotely",
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Everything You Need to Manage Your Library
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I migrate data from my existing library system?",
      answer:
        "Yes, we provide free data migration services for all plans. Our team will help you transfer your existing book catalog, member records, and circulation history.",
    },
    {
      question: "Is training provided for library staff?",
      answer:
        "All plans include comprehensive training materials and video tutorials. Professional and Enterprise plans include live training sessions and ongoing support.",
    },
    {
      question: "Can members access the system online?",
      answer:
        "Yes, all plans include a web-based Online Public Access Catalog (OPAC) where members can search books, check availability, and manage their accounts.",
    },
    {
      question: "What happens if I exceed my book or user limits?",
      answer:
        "You can easily upgrade your plan at any time. We'll notify you when you're approaching your limits and help you choose the best upgrade option.",
    },
    {
      question: "Do you provide barcode scanners and hardware?",
      answer:
        "We can recommend compatible barcode scanners and receipt printers. Professional and Enterprise plans include hardware consultation and setup assistance.",
    },
    {
      question: "Is my library data secure?",
      answer:
        "Yes, we use bank-level encryption and secure cloud hosting. All plans include daily backups, and Enterprise plans offer additional security features and compliance options.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Pricing() {
  const plans = [
    {
      name: "Community",
      description: "Perfect for small community libraries and reading rooms",
      capacity: "5,000",
      users: "Up to 500",
      monthlyPrice: 49,
      annualPrice: 490,
      icon: BookOpen,
      buttonText: "Start Free Trial",
      features: [
        { text: "Book catalog management", included: true },
        { text: "Member registration & profiles", included: true },
        { text: "Basic circulation (issue/return)", included: true },
        { text: "Simple search functionality", included: true },
        { text: "Basic reports", included: true },
        { text: "Email notifications", included: true },
        { text: "Online member portal", included: true },
        { text: "Barcode scanning", included: false },
        { text: "Advanced reporting", included: false },
        { text: "Multi-branch support", included: false },
        { text: "API access", included: false },
        { text: "Priority support", included: false },
      ],
    },
    {
      name: "Academic",
      description: "Ideal for schools, colleges, and academic institutions",
      capacity: "25,000",
      users: "Up to 2,500",
      monthlyPrice: 149,
      annualPrice: 1490,
      icon: GraduationCap,
      buttonText: "Start Free Trial",
      features: [
        { text: "Advanced catalog management", included: true },
        { text: "Student & faculty profiles", included: true },
        { text: "Full circulation control", included: true },
        { text: "Advanced search & filters", included: true },
        { text: "Comprehensive reporting", included: true },
        { text: "SMS & email notifications", included: true },
        { text: "Online reservation system", included: true },
        { text: "Barcode scanning", included: true },
        { text: "Fine management", included: true },
        { text: "Multi-department support", included: true },
        { text: "Basic API access", included: true },
        { text: "Priority email support", included: true },
      ],
    },
    {
      name: "Enterprise",
      description: "For large public libraries and multi-branch systems",
      capacity: "Unlimited",
      users: "Unlimited",
      monthlyPrice: 399,
      annualPrice: 3990,
      icon: Building,
      buttonText: "Contact Sales",
      features: [
        { text: "Enterprise catalog management", included: true },
        { text: "Advanced member management", included: true },
        { text: "Complete circulation suite", included: true },
        { text: "AI-powered search", included: true },
        { text: "Custom reports & analytics", included: true },
        { text: "Multi-channel notifications", included: true },
        { text: "Full online services", included: true },
        { text: "Advanced barcode features", included: true },
        { text: "Automated fine processing", included: true },
        { text: "Multi-branch management", included: true },
        { text: "Full API access", included: true },
        { text: "24/7 phone & email support", included: true },
      ],
    },
  ];

  return (
    <div className="dark">
      {/* Header */}
      <HeroHead text={"Pricing"} />

      {/* <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4"> */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        {/* Header */}

        {/* Feature Grid */}
        <FeatureGrid />

        {/* Pricing Section */}
        <div className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Choose Your Library Management Plan
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                All plans include free setup, data migration, training
                materials, and 30-day money-back guarantee
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {plans.map((plan, index) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  isPopular={index === 1}
                />
              ))}
            </div>

            {/* Features Comparison */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Feature Comparison
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold min-w-[200px]">
                          Features
                        </th>
                        {plans.map((plan) => (
                          <th
                            key={plan.name}
                            className="px-6 py-4 text-center text-gray-900 dark:text-white font-semibold min-w-[120px]"
                          >
                            {plan.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {plans[0].features.map((_, featureIndex) => (
                        <tr
                          key={featureIndex}
                          className="border-b border-gray-100 dark:border-gray-700"
                        >
                          <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                            {plans[0].features[featureIndex].text}
                          </td>
                          {plans.map((plan) => (
                            <td
                              key={plan.name}
                              className="px-6 py-4 text-center"
                            >
                              {plan.features[featureIndex].included ? (
                                <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden">
                  {plans.map((plan, planIndex) => (
                    <div
                      key={plan.name}
                      className={`p-6 ${
                        planIndex !== plans.length - 1
                          ? "border-b border-gray-200 dark:border-gray-700"
                          : ""
                      }`}
                    >
                      {/* Plan Header */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        {plan.name}
                      </h3>

                      {/* Features List */}
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center justify-between"
                          >
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {feature.text}
                            </span>
                            <div className="flex-shrink-0 ml-3">
                              {feature.included ? (
                                <Check className="w-5 h-5 text-emerald-500" />
                              ) : (
                                <X className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <FAQ />

            {/* CTA Section */}
            <div className="text-center mt-16 py-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Library?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join over 2,000+ libraries worldwide using our management
                system. Start your free trial today with complete data migration
                support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-8">
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start 30-Day Free Trial
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                No credit card required • Free setup & migration • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <Footer />
    </div>
  );
}
