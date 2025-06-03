import React from "react";
import Footer from "../components/Footer";
import HeroHead from "../components/HeroHead";
import { motion } from "framer-motion";
import {
  BarChart3,
  BarChart4,
  CalendarClock,
  Cpu,
  DollarSign,
  HeartHandshake,
  Megaphone,
  MessageCircle,
  Settings,
  ShieldCheck,
  Star,
} from "lucide-react";
function Libraryowners() {
  return (
    <div className="dark">
      {/* Header */}
      <HeroHead text={"Owner Onboarding Benifits"} />
      <div className="py-22">
        <motion.div
          className="text-center mb-16 mt-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-500 font-semibold tracking-wider text-sm mb-4">
            SMART STUDY SPACE SOLUTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white  mx-auto max-w-2xl">
            <span className="font-black">Flexible</span> STUDY SPACE for{" "}
            <span className="font-black">Modern Professionals</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-50 mt-6 mx-auto max-w-2xl">
            Join us and transform your library into a thriving student hub with
            the power of technology.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <Megaphone className="w-10 h-10 text-blue-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Increased Visibility & Reach
            </h1>
            <p className="pt-10 text-lg">
              Get discovered by thousands of students searching for self-study
              spaces in your city. Our app serves as a powerful marketing tool,
              helping you attract new customers without spending on ads.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners1.webp" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row-reverse mt-20 lg:mt-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-10 lg:pr-32">
            <div>
              <BarChart4 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Higher Occupancy = More Revenue
            </h1>
            <p className="pt-10 text-lg">
              Fill up vacant seats, especially during off-peak hours. More
              bookings mean more consistent income throughout the day.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners2.jpeg" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <CalendarClock className="w-10 h-10 text-indigo-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Online Booking & Real-Time Seat Management
            </h1>
            <p className="pt-10 text-lg">
              Easily manage your library's seating and schedule. Students can
              see live seat availability, and you get a smart dashboard to
              manage operations seamlessly.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners4.webp" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row-reverse mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <BarChart3 className="w-10 h-10 text-yellow-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Data & Insights
            </h1>
            <p className="pt-10 text-lg">
              Track daily footfall, peak usage hours, and customer behavior. Use
              insights to optimize your services and improve operations.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners5.jpg" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <Star className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Reviews & Reputation Building
            </h1>
            <p className="pt-10 text-lg">
              Gain credibility through student reviews and ratings. A well-rated
              library naturally attracts more users.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners6.gif" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row-reverse mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <MessageCircle className="w-10 h-10 text-sky-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Direct Communication with Users
            </h1>
            <p className="pt-10 text-lg">
              Send notifications about new offers, upcoming changes, or
              facilities through the app directly to your customers.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners7.jpg" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <Settings className="w-10 h-10 text-gray-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Operational Support
            </h1>
            <p className="pt-10 text-lg">
              Optionally access services like cleaning staff coordination,
              vending machine partnerships, or cafe tie-ins to improve your
              offerings.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners8.webp" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row-reverse mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <ShieldCheck className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Secure Digital Payments
            </h1>
            <p className="pt-10 text-lg">
              No more handling cash. Get paid through the app with transparent
              transaction records and quick settlements.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners9.jpg" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <HeartHandshake className="w-10 h-10 text-rose-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Community & Loyalty Building
            </h1>
            <p className="pt-10 text-lg">
              Encourage repeat visits with loyalty programs, offers, and
              membership packages promoted through the app.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners10.png" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row-reverse mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <DollarSign className="w-10 h-10 text-green-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Centralized Pricing System
            </h1>
            <p className="pt-10 text-lg">
              We handle all pricing, promotions, and discount structures to
              ensure fairness and simplicity for both students and owners. This
              saves you the hassle of price management while ensuring you earn
              consistently through a system optimized for market demand.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners11.webp" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[55%] px-6 lg:pl-32 lg:pr-10">
            <div>
             <Cpu className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Stay Ahead with Tech
            </h1>
            <p className="pt-10 text-lg">
              Join a network of modern, tech-enabled libraries. Be part of the
              shift toward flexible, digital-first student spaces.
            </p>
          </div>
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
            <img src="./img/libraryowners12.webp" alt="" className="w-full" />
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Libraryowners;
