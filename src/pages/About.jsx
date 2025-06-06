import Footer from "../components/Footer";
import HeroHead from "../components/HeroHead";
import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
function About() {

const { theme, toggleTheme } = useTheme(); 
  const stats = [
    {
      icon: <BookOpen className="w-12 h-12 text-emerald-500" />,
      number: "1000+",
      label: "Online Courses",
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      number: "50000+",
      label: "Students Enrolled",
    },
    {
      icon: <Award className="w-12 h-12 text-emerald-500" />,
      number: "350+",
      label: "Expert Instructors",
    },
    {
      icon: <Clock className="w-12 h-12 text-pink-500" />,
      number: "10000+",
      label: "Hours Content",
    },
  ];

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
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
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
    <div className="min-h-screen dark:bg-gray-900">
      {/* Header */}
      <HeroHead text={"About"} />
      <section>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Mission Section */}
        <div className="relative mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-cyan-400 transform rotate-12"></div>
            <div className="absolute top-20 right-0 text-pink-400 text-6xl">×</div>
            <div className="absolute -bottom-12 left-1/4 w-4 h-4 bg-green-400 rounded-full"></div>
            
            {/* Image Container */}
            <div className="relative flex-shrink-0">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl dark:shadow-gray-800">
                <img 
                  src="./img/librery-10.jpg"
                  alt="Teacher helping student"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative patterns around image */}
              <div className="absolute -top-4 -left-4 w-20 h-8 bg-gradient-to-r from-pink-200 to-transparent rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 max-w-xl">
              <div className="mb-6">
                <span className="text-cyan-500 font-semibold text-sm tracking-wider uppercase">
                  Our Mission
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Empowering People to Discover and Book Spaces Seamlessly
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                BookMySpace is a smart booking platform designed for students who are looking for peaceful, distraction-free private study spaces across Lucknow. Whether you're preparing for competitive exams, college tests, or simply want a focused environment, BookMySpace connects you with the best self-study libraries in the city — instantly and effortlessly.
                </p>
                
                <p>
               We believe every student deserves access to a productive study environment. With just a few taps, you can discover, compare, and book libraries
that match your timing, location, and budget — all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 right-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-green-400 transform -rotate-12"></div>
            <div className="absolute bottom-16 -left-8 w-6 h-6 bg-pink-400 rounded-full"></div>
            <div className="absolute -bottom-8 right-1/4 text-pink-400 text-4xl">×</div>
            
            {/* Image Container */}
            <div className="relative flex-shrink-0">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl dark:shadow-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Student studying outdoors"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative patterns around image */}
              <div className="absolute -top-6 -right-6 w-24 h-6 bg-gradient-to-l from-green-200 to-transparent rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 grid grid-cols-4 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 max-w-xl">
              <div className="mb-6">
                <span className="text-cyan-500 font-semibold text-sm tracking-wider uppercase">
                  Our Vision
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Redefining Space Utilization for a Smarter Future
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                Redefining Study Spaces for a Smarter Tomorrow
We envision a future where access to quiet, well-equipped library spaces is effortless, transparent, and customized to every student’s or learner’s needs.


                </p>
                
                <p>
                 
By leveraging innovation and user-focused design, BookMySpace strives to be the most trusted platform for discovering and booking library spaces—helping learners everywhere study smarter and succeed faster.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
      </section>
            {/* Header Section */}
      {/* <section>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                <span className="text-gray-700 dark:text-gray-200">
                  10,000+
                </span>{" "}
                <span className="text-gray-600 dark:text-gray-300">
                  Books Available in
                </span>{" "}
                <span className="text-gray-800 dark:text-gray-100">
                  BookMySpace Library
                </span>
                <br />
                <span className="text-gray-600 dark:text-gray-300">
                  Empowering
                </span>{" "}
                <span className="text-gray-800 dark:text-gray-100">
                  Readers & Learners
                </span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Explore a vast collection of books across genres. Manage your time, reserve your space, and enjoy a modern digital library experience tailored for students and professionals.
              </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        className="dark:bg-gray-800"
        style={{
          backgroundImage:
            theme === "dark"
              ? "none"
              : `url(${
                  import.meta.env.VITE_BG_URI
                }/img/hm4-testimonial-dotted.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">

            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                What Our{" "}
                <span className="text-black dark:text-white">Readers</span> Say
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Thousands of students and professionals trust BookMySpace to reserve their favorite reading spot and access books with ease.
              </p>
            </motion.div>

 
            <div className="relative">
    
              <motion.button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg dark:shadow-gray-900/50"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#f9fafb",
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
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg dark:shadow-gray-900/50"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#f9fafb",
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
                        className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg dark:shadow-gray-900/50 relative cursor-pointer group"
                      >

                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-600 dark:to-gray-800 rounded-xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />

                        <div className="relative z-10">

                          <motion.div
                            className="text-6xl text-gray-200 dark:text-gray-600 font-serif mb-4 leading-none"
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


                          <motion.h3
                            className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            {testimonial.title}
                          </motion.h3>


                          <motion.p
                            className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            {testimonial.content}
                          </motion.p>

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

                
                          <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.7 }}
                          >
                            <motion.img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-transparent"
                              whileHover={{
                                scale: 1.1,
                                borderColor: "#3b82f6",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-500 dark:text-gray-400 text-sm">
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
                          ? "bg-gray-800 dark:bg-gray-200 w-8"
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
      </section> */}

      {/* <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
        <div className="w-full flex justify-center">
          <img
            src="./img/brand-logo1.png"
            alt="Brand Logo 1"
            className="dark:brightness-0 dark:invert max-w-full h-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <img
            src="./img/brand-logo2.png"
            alt="Brand Logo 2"
            className="dark:brightness-0 dark:invert max-w-full h-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <img
            src="./img/brand-logo3.png"
            alt="Brand Logo 3"
            className="dark:brightness-0 dark:invert max-w-full h-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <img
            src="./img/brand-logo4.png"
            alt="Brand Logo 4"
            className="dark:brightness-0 dark:invert max-w-full h-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <img
            src="./img/brand-logo5.png"
            alt="Brand Logo 5"
            className="dark:brightness-0 dark:invert max-w-full h-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <img
            src="./img/brand-logo6.png"
            alt="Brand Logo 6"
            className="dark:brightness-0 dark:invert max-w-full h-auto max-h-12 sm:max-h-14 md:max-h-16 object-contain"
          />
        </div>
      </div>
    </section> */}


      <Footer />
    </div>
  );
}

export default About;
