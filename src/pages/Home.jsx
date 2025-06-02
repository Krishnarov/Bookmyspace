import React, { useRef, useEffect, useState } from "react";
import { Play, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Header from "../components/Header";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import TiltCard from "../components/TiltCard";
import HomeFooter from "../components/HomeFooter";
import { Link } from "react-router-dom";

// Animated Course Card Component
const CourseCard = ({
  title,
  courseCount,
  bgColor,
  bgImg,
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl p-8 cursor-pointer ${bgColor} transition-all duration-300 ${className}`}
      style={{ minHeight: "200px" }}
    >
      {/* Background Image on Hover */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
          opacity: isHovered ? 0.3 : 0,
        }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-end"
        variants={hoverVariants}
      >
        <motion.h3
          className="text-white text-2xl font-bold mb-2"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-white/90 text-sm font-medium"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {courseCount} COURSE
        </motion.p>
      </motion.div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
function Home() {
  const courses = [
    {
      title: "Break the Routine",
      courseCount: "Choose a different library any day to keep your mind fresh and focused.",
      bgColor: "bg-gradient-to-br from-purple-300 to-purple-800",
      bgImg:
        "./img/Break.webp",
    },
    {
      title: "Per-Day Booking",
      courseCount: "No full-month commitments. Pay only for the days you actually use.",
      bgColor: "bg-gradient-to-br from-green-300 to-green-700",
      bgImg:
        "./img/Booking.jpg",
    },
    {
      title: "Zero Wastage",
      courseCount: "Skip a day? Don't pay. It's that simple and fair.",
      bgColor: "bg-gradient-to-br from-blue-300 to-blue-600",
      bgImg:
        "./img/Zero.jpg",
    },
    {
      title: "Verified Study Spaces",
      courseCount: "Peaceful, clean, and student-friendly environments guaranteed.",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
      bgImg:
        "./img/Verified.jpg",
    },
    {
      title: "Location-Based Discovery",
      courseCount: "Find libraries near home, coaching, or college for maximum convenience.",
      bgColor: "bg-gradient-to-br from-orange-300 to-orange-700",
      bgImg:
        "./img/Location.jpg",
    },
    {
      title: "Training Halls",
      courseCount: 48,
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      bgImg:
        "./img/Training.jpeg",
    },
    {
      title: "Virtual Offices",
      courseCount: 22,
      bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
      bgImg:
        "./img/Virtual.jpg",
    },
    {
      title: "Interview Rooms",
      courseCount: 18,
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      bgImg:
        "./img/Interview.jpg",
    },
  ];
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [Theme, setTheme] = useState("dark");
  useEffect(() => setTheme(localStorage.getItem("theme")));

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const IMG_URI = import.meta.env.VITE_BG_URI;
    const testimonials = [
    {
      id: 1,
      title: "The perfect study spot",
      content:
        "BookMySpace helped me reserve peaceful spots during exams. No more full libraries and long queues!",
      name: "Aditi Sharma",
      role: "B.Tech Student",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format",
      rating: 5,
    },
    {
      id: 2,
      title: "Book access made easy",
      content:
        "Finding and issuing books has never been easier. The search and booking features are smooth and fast.",
      name: "Rahul Mehta",
      role: "MCA Student",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format",
      rating: 5,
    },
    {
      id: 3,
      title: "Love the digital interface",
      content:
        "Clean UI, responsive design, and the ability to manage my reservations from my phone – absolutely love it.",
      name: "Priya Verma",
      role: "Library Member",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face&auto=format",
      rating: 5,
    },
    {
      id: 4,
      title: "Excellent Support",
      content:
        "At the Training ExLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "LISA CHEN",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face&auto=format",
      rating: 5,
    },
    {
      id: 5,
      title: "Outstanding Results",
      content:
        "At the Training ExLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "DAVID KUMAR",
      role: "Full Stack Developer",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=60&h=60&fit=crop&crop=face&auto=format",
      rating: 5,
    },
    {
      id: 6,
      title: "Professional Training",
      content:
        "At the Training ExLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "EMMA TAYLOR",
      role: "Software Engineer",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face&auto=format",
      rating: 5,
    },
  ];


  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
  };

  const goToSlide = (slideIndex) => {
    setDirection(slideIndex > currentSlide ? 1 : -1);
    setCurrentSlide(slideIndex);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-colors duration-300 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Elements */}
        <div className="absolute bg-green-element">
          <div className="w-full h-full bg-gradient-to-bl rounded-full"></div>
        </div>

        {/* Purple blob bottom left */}
        <motion.div
          animate={{
            y: [50, 60, 50],
            x: [-0, -55, -50],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute bottom-[20%] right-[50%] w-48 h-48 "
        >
          <img src="./img/hm4-slider-shape2.png" alt="" />
        </motion.div>
        <motion.div
          animate={{
            y: [50, 60, 50],
            x: [-50, -55, -50],
            opacity: 0.7,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute bottom-[10%] left-0 w-48 h-48 bg-purple-300 rounded-full Purpleblob"
        />
        {/* Decorative dots */}
        <div className="absolute bottom-20 right-20 grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-emerald-200 rounded-full opacity-50"
            ></div>
          ))}
        </div>

        {/* Plus icons */}
        <div className="absolute bottom-10 right-10 text-pink-400 text-2xl">
          +
        </div>
        <div className="absolute top-20 right-32 text-pink-400 text-2xl">+</div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            {/* Left Content */}
            <motion.div
              className="space-y-8 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 ">
                <p className="text-pink-500 font-semibold tracking-wider text-sm">
                  LEARN WITH BOOK MY SPACE
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 leading-tight">
                  Find Your Ideal{" "}
                  <span className="text-gray-700 dark:text-gray-200">
                    Library Space,
                  </span>{" "}
                  Anytime, Anywhere
                </h1>
                <p className="text-gray-600 dark:text-gray-50 text-lg leading-relaxed max-w-md">
                  Explore and book top-rated libraries in your city without any
                  monthly commitment. Just choose your preferred space and pay
                  per day — it's that easy!
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Link to="Library" className="hero-signup text-white px-8 py-4 rounded-full font-semibold transition-colors">
                  REGISTER LIBRARY
                </Link>
                <button className="bg-pink-500 hover:bg-pink-600 text-white w-14 h-14 rounded-full flex items-center justify-center transition-colors">
                  <Play className="w-6 h-6 ml-1" fill="white" />
                </button>
              </div>
            </motion.div>

            {/* Right Content - Laptop Mockup */}
            <motion.div
              className="relative hidden md:block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-600 rounded-t-2xl p-2 shadow-2xl transform rotate-2">
                <div className="bg-white  dark:bg-gray-600  rounded-t-xl overflow-hidden">
                  {/* Browser Bar */}
                  <div className="bg-gray-100  dark:bg-gray-600 px-4 py-2 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 h-80 relative">
                    {/* Header in mockup */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        {/* <div className="w-6 h-6 bg-pink-500 rounded"></div> */}
                        <img
                          src="./img/bookmyspace.jpeg"
                          className="h-8 rounded-full"
                          alt=""
                        />
                        <span className="font-bold text-sm">Book my space</span>
                      </div>
                      <div className="flex space-x-4 text-xs">
                        <span>LIBRARIES</span>
                        <span>EXPLORE</span>
                        <span>BOOK NOW</span>
                        <span>SUPPORT</span>
                        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Main content in mockup */}
                    <div className="flex items-center space-x-6">
                      <img src="./img/girl-b2.png" className="w-60" alt="" />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">
                          Your Study Spot
                        </h2>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-50 mb-1">
                          Nearby, Affordable, Peaceful
                        </h3>
                        <p className="text-lg text-gray-800 dark:text-gray-50 mb-4">
                          Book Now — No Monthly Charges
                        </p>
                        <Link to="Library" className="bg-pink-500 text-white px-4 py-2 rounded text-sm font-medium">
                          Explore Libraries
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section
        className={`bg-white dark:bg-gray-700 py-20 m w-full `}
        style={{
          backgroundImage:
            Theme === "dark"
              ? "none"
              : `url(${import.meta.env.VITE_BG_URI}/img/home4-course-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-pink-500 font-semibold tracking-wider text-sm mb-4">
               WHY CHOOSE US
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mx-auto max-w-2xl">
              <span className="font-black">Simplifying</span> Your Search for{" "}
              <span className="font-black">Perfect Spaces</span> Anytime, Anywhere
            </h2>
            <p className="text-gray-600 dark:text-gray-50 mt-6 mx-auto max-w-2xl">
              Discover a seamless way to book co-working spaces, studios, conference rooms, and more — all in one place.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TiltCard>
                <div className="bg-white dark:bg-gray-900 py-20 px-10">
                  <div className="flex justify-center pb-10 ">
                    <img src="./img/hm4-intro-icon1.png" alt="" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                   Explore Diverse Spaces
                  </h3>
                  <p className="text-gray-600 dark:text-gray-50 mb-6">
                    From co-working desks to event halls, find the perfect space for work, meetings, shoots, or workshops.
                  </p>
                  <Link to="Library"
                    className="text-pink-500 font-semibold hover:text-pink-700 transition-colors duration-300"
                  >
                     BROWSE NOW
                  </Link>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
              }}
            >
              <TiltCard>
                <div className="bg-white dark:bg-gray-900 py-20 px-10">
                  <div className="flex justify-center pb-10">
                    <img src="./img/hm4-intro-icon2.png" alt="" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Easy & Instant Booking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-50 mb-6">
                    Real-time availability, instant confirmation, and flexible schedules — booking a space has never been easier.
                  </p>
                  <Link to="Library"
                    className="text-pink-500 font-semibold hover:text-pink-700 transition-colors duration-300 "
                  >
                    BOOK A SPACE
                  </Link>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
              }}
            >
              <TiltCard>
                <div className="bg-white dark:bg-gray-900 py-20 px-10">
                  <div className="flex justify-center pb-10">
                    <img src="./img/hm4-intro-icon3.png" alt="" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-4">
                    Verified Listings
                  </h3>
                  <p className="text-gray-600 dark:text-gray-50 mb-6">
                    Every space is handpicked and verified to ensure a top-notch experience every time you book.
                  </p>
                  <Link to="Library"
                    className="text-pink-500 font-semibold hover:text-pink-700 transition-colors duration-300"
                  >
                     SEE LOCATIONS
                  </Link >
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>

          {/* Course Category Section with Animated Grid */}
          <motion.div
            className="text-center mb-16 mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
             Choose a<span className="font-black"> Space</span> By{" "}
              <span className="font-black">Category</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-white mt-6 mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
            Everything you need to maximize your study productivity with flexibility and convenience.
            </motion.p>
          </motion.div>

          {/* Animated Course Grid */}
          <div className="container mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Programming - Takes full height on left */}
              <div className="lg:row-span-2">
                <CourseCard
                  title={courses[0].title}
                  courseCount={courses[0].courseCount}
                  bgColor={courses[0].bgColor}
                  bgImg={courses[0].bgImg}
                  delay={0.1}
                  className="h-full"
                />
              </div>

              {/* Development */}
              <CourseCard
                title={courses[1].title}
                courseCount={courses[1].courseCount}
                bgColor={courses[1].bgColor}
                bgImg={courses[1].bgImg}
                delay={0.2}
              />

              {/* Interior */}
              <div className="lg:row-span-2">
                <CourseCard
                  title={courses[2].title}
                  courseCount={courses[2].courseCount}
                  bgColor={courses[2].bgColor}
                  bgImg={courses[2].bgImg}
                  delay={0.3}
                  className="h-full"
                />
              </div>

              {/* Health */}
              <CourseCard
                title={courses[3].title}
                courseCount={courses[3].courseCount}
                bgColor={courses[3].bgColor}
                bgImg={courses[3].bgImg}
                delay={0.4}
              />

              {/* Business */}
              <div className="lg:row-span-2">
                <CourseCard
                  title={courses[4].title}
                  courseCount={courses[4].courseCount}
                  bgColor={courses[4].bgColor}
                  bgImg={courses[4].bgImg}
                  delay={0.5}
                  className="h-full"
                />
              </div>
              {/* Design - Takes full height */}
              <div className="lg:row-span-2">
                <CourseCard
                  title={courses[5].title}
                  courseCount={courses[5].courseCount}
                  bgColor={courses[5].bgColor}
                  bgImg={courses[5].bgImg}
                  delay={0.6}
                  className="h-96"
                />
              </div>
              {/* Photography */}
              <CourseCard
                title={courses[6].title}
                courseCount={courses[6].courseCount}
                bgColor={courses[6].bgColor}
                bgImg={courses[6].bgImg}
                delay={0.7}
              />

              {/* Music - Takes full height on right */}
              <CourseCard
                title={courses[7].title}
                courseCount={courses[7].courseCount}
                bgColor={courses[7].bgColor}
                bgImg={courses[7].bgImg}
                delay={0.8}
                className=""
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className=""
        style={{
          backgroundImage:
            Theme === "dark"
              ? "none"
              : `url(${import.meta.env.VITE_BG_URI}/img/home4-about-bg.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="min-h-screen relative overflow-hidden">
          {/* Floating Background Elements */}

          {/* Main Content */}
          <motion.div
            className="pt-24 pb-16 px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                {/* Images Section */}
                <motion.div
                  className="relative"
                  variants={imageVariants}
                  style={{ y: y1 }}
                >
                  <div className="relative">
                    {/* Main large image */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src="./img/home4-about-img2.jpg"
                        alt="Woman learning with laptop"
                        className="w-80 h-96 object-cover rounded shadow"
                      />
                    </motion.div>
                    <div className=" absolute left-0 ">
                      <img src="./img/home4-about-dots.png" alt="" />
                    </div>
                    {/* Overlapping smaller image */}
                    <motion.div
                      className="absolute -bottom-8 right-20 z-20"
                      style={{ y: y2 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src="./img/home4-about-img1.jpg"
                        alt="Student with books"
                        className="w-64 h-80 object-cover shadow border-4 border-white"
                      />
                    </motion.div>

                    {/* Floating card */}
                    <motion.div
                      className="absolute bottom-8 -left-4 bg-white rounded-2xl p-4 shadow-lg z-30"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [-2, 2, -2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          ✓
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          Space Booked!
                        </span>
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute -top-20 -left-4 z-30"
                      animate={{
                        rotate: [-2, 2, -2],
                        y: [50, 60, 50],
                        x: [-50, -55, -50],
                        opacity: 0.7,
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <img src="./img/hm4-slider-shape2.png" alt="" />
                    </motion.div>
                    <motion.div
                      className="absolute -top-20 -right-4 z-30"
                      animate={{
                        rotate: [-2, 2, -2],
                        y: [50, 60, 50],
                        x: [-50, -55, -50],
                        opacity: 0.7,
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <img src="./img/hm4-slider-shape1.png" alt="" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="space-y-8"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.p
                      className="text-red-500 font-semibold text-sm tracking-wider uppercase mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                     Flexible Study spaces
                    </motion.p>

                    <motion.h1
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                       Book Your Perfect{" "}
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                         Study Space {" "}
                      </span>in Minutes
                    </motion.h1>
                  </motion.div>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-600 dark:text-gray-50 text-lg leading-relaxed">
                       Discover and book Study spaces, meeting rooms, or event areas with real-time availability. Perfect for remote teams, freelancers, and startups.
                    </p>

                    <p className="text-gray-600 dark:text-gray-50 text-lg leading-relaxed">
                      Join thousands of professionals using BookMySpace to find flexible and affordable spaces with just a few clicks.
                    </p>
                  </motion.div>
                  <Link to="Library" className="hero-signup text-white px-8 py-4 rounded-full font-semibold transition-colors">
                    Get Started

                  </Link>

                  {/* Stats */}
                  <motion.div
                    className="flex flex-wrap gap-8 pt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {[
                      { number: "10K+", label: "Spaces Listed" },
                { number: "25+", label: "Cities Covered" },
                { number: "4.9★", label: "User Rating" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-2xl font-bold text-gray-900 dark:text-white ">
                          {stat.number}
                        </div>
                        <div className="text-gray-600 dark:text-white  text-sm">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mb-16 mt-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-500 font-semibold tracking-wider text-sm mb-4">
            SMART Study space SOLUTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white  mx-auto max-w-2xl">
            <span className="font-black">Flexible</span> Study spaces for{" "}
            <span className="font-black">Modern Professionals</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-50 mt-6 mx-auto max-w-2xl">
             Book My Space helps freelancers, startups, and businesses find ideal coworking spaces and meeting rooms across locations with ease and flexibility.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[50%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <img src="./img/hm4-feature-icon1.jpg" alt="" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
             Seamless space booking experience
            </h1>
            <p className="pt-10 text-lg">
               Easily discover, compare, and reserve coworking spaces, conference rooms, and private offices that suit your professional needs—all in a few clicks.
            </p>
          </div>
          <div className="w-full lg:w-[50%] mt-10 lg:mt-0">
            <img src="./img/home4-feature-img1.png" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row-reverse mt-20 lg:mt-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[50%] px-6 lg:pl-10 lg:pr-32">
            <div>
              <img src="./img/hm4-feature-icon2.jpg" alt="" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
             Work from anywhere, anytime
            </h1>
            <p className="pt-10 text-lg">
              Whether you're traveling or working remotely, Book My Space lets you access a network of professional spaces anytime, anywhere—on-demand.
            </p>
          </div>
          <div className="w-full lg:w-[50%] mt-10 lg:mt-0">
            <img src="./img/hm4-feature-img2.png" alt="" className="w-full" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-[50%] px-6 lg:pl-32 lg:pr-10">
            <div>
              <img src="./img/hm4-feature-icon3.jpg" alt="" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-5">
              Boost your productivity and network
            </h1>
            <p className="pt-10 text-lg">
              Join a vibrant community of professionals, enjoy productive environments, and enhance your career growth through flexible Study spaces tailored to your needs.
            </p>
          </div>
          <div className="w-full lg:w-[50%] mt-10 lg:mt-0">
            <img src="./img/hm4-feature-img3.png" alt="" className="w-full" />
          </div>
        </motion.div>
      </section>
      <section
        className=" overflow-hidden lg:h-screen mt-20 "
        style={{
          backgroundImage:
            Theme === "dark"
              ? "none"
              : `url(${import.meta.env.VITE_BG_URI}/img/home4-fact-bg.png)`,
          // backgroundImage: `url(${
          //   import.meta.env.VITE_BG_URI
          // }/img/home4-fact-bg.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="relative mt-42 mb-20 dark:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="hidden lg:block absolute left-[4%] top-[46%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img1.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute left-[15%] top-[22%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img2.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute left-[24%] top-[45%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img3.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute left-[29%] top-[9%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img4.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute left-[38%] top-[40%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img5.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute left-[39%] top-[15%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img6.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute left-[41%] bottom-[0%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img7.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute right-[49%] top-[20%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img8.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute rigth-[42%] bottom-[22%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img9.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute right-[38%] top-[0%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img10.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute right-[33%] bottom-[12%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img11.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute right-[28%] top-[15%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img12.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute right-[15%] top-[40%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img14.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute right-[9%] top-[20%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img15.jpg"
              alt=""
            />
          </div>
          <div className="hidden lg:block absolute right-[2%] top-[30%]">
            <img
              className="rounded-circle"
              src="./img/home4-fact-img16.jpg"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          className="text-center mb-16 mt-20 px-4 lg:mt-96"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-500 font-semibold tracking-wider text-sm mb-4">
            WHAT MAKES US SPECIAL
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mx-auto max-w-2xl">
            Join  <span className="font-black"> Over 5 Million</span>Learners Today
          </h2>
          <p className="text-gray-600 dark:text-gray-50 mt-6 mx-auto max-w-2xl">
            Unlock your potential with expert-led courses, flexible learning, and real-world projects tailored just for you.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row justify-around mt-20 gap-8 sm:gap-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-green-400">
                1008
              </h1>
              <p>Expert-Curated Courses</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-pink-400">
                225
              </h1>
              <p>Certified Instructors</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
                500K
              </h1>
              <p>SGlobal Students</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <motion.section
        className="w-full min-h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to right, #9d1df8bb, #4026e8be), url(${IMG_URI}/img/home4-banner-bg-style.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center max-w-3xl px-4">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
            Take the first step toward your future. Enroll at Larna and start mastering the skills you love — from anywhere, anytime!!
          </p>
          <Link to="Library" className="hero-signup text-white px-8 py-4 rounded-full font-semibold transition-colors">
            SIGN UP NOW
          </Link >
        </div>
      </motion.section>

      <section
        className="bg-white dark:bg-gray-900 transition-colors duration-300"
        style={{
          backgroundImage:
            Theme === "dark"
              ? "none"
              : `url(${
                  import.meta.env.VITE_BG_URI
                }/img/hm4-testimonial-dotted.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-16 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12 px-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                 Hear From Our{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  Learners
                </span>{" "}

              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
               Discover how Larna has transformed the learning journey for thousands of students around the globe.
              </p>
            </motion.div>

            {/* Testimonials Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-colors duration-300"
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-colors duration-300"
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>

              {/* Testimonials Slider */}
              <div className="relative h-96 px-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                    }}
                    className="absolute inset-0 grid md:grid-cols-3 gap-8"
                  >
                    {getCurrentTestimonials().map((testimonial, index) => (
                      <motion.div
                        key={testimonial.id}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 relative cursor-pointer group transition-all duration-300 border border-gray-100 dark:border-gray-700"
                      >
                        {/* Animated Background Gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />

                        <div className="relative z-10">
                          {/* Animated Quote Icon */}
                          <motion.div
                            className="text-6xl text-gray-200 dark:text-gray-600 font-serif mb-4 leading-none transition-colors duration-300"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: index * 0.1 + 0.3,
                              duration: 0.6,
                              ease: "easeOut",
                            }}
                          >
                            "
                          </motion.div>

                          {/* Title */}
                          <motion.h3
                            className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            {testimonial.title}
                          </motion.h3>

                          {/* Content */}
                          <motion.p
                            className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            {testimonial.content}
                          </motion.p>

                          {/* Rating */}
                          <motion.div
                            className="flex gap-1 mb-6"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: index * 0.1 + 0.6,
                              duration: 0.4,
                            }}
                          >
                            {renderStars(testimonial.rating)}
                          </motion.div>

                          {/* Author */}
                          <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.7 }}
                          >
                            <motion.img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-transparent ring-2 ring-gray-200 dark:ring-gray-600 transition-all duration-300"
                              whileHover={{
                                scale: 1.1,
                                borderColor: "#3b82f6",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm transition-colors duration-300">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                                {testimonial.role}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Animated Dots Indicator */}
              <motion.div
                className="flex justify-center gap-3 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {Array.from(
                  { length: Math.ceil(testimonials.length / 3) },
                  (_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-gray-800 dark:bg-gray-300 w-8"
                          : "bg-gray-300 dark:bg-gray-600 w-3 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}

export default Home;
