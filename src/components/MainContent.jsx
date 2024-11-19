import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const MainContent = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text = "We Provide the Best Solutions for Car Parts";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white pt-20 px-3 py-7">
      <div className="flex">
        <div className="mt-2 flex flex-col items-center justify-start text-black text-5xl font-bold text-center mb-6 ">
          <Typewriter
            words={[text]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className="text-center mb-8 text-gray-600 text-lg max-w-xl mt-10 mx-4" >
        Welcome to AutoShow – Your one-stop destination for premium cars and genuine spare parts. Discover unmatched quality, reliability, and service, tailored to make your automotive journey smooth and hassle-free.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full px-4 mt-10">
        <Section title="Unbeatable Local Prices" />
        <Section title="Trusted, Secure, and Verified" />
        <Section title="Expert Vehicle Customization Guide" />
        <Section title="Prompt and Reliable Delivery" />
      </div>
    </div>
  );
};

const Section = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`bg-white border border-gray-200 rounded-lg p-6 shadow-inner transition-shadow duration-300 ${
        isHovered ? "bg-gray-50 shadow-2xl scale-105" : "shadow-inner"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.07 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        <i className="glyph-icon flaticon-travel"></i>
        {title}
      </h2>
      <p className="text-gray-500 mb-4 ">
      "Explore the best deals in town! Get top-quality cars and spare parts at prices tailored to your budget, without compromising on quality."
      </p>
      <motion.button
        className="inline-block text-red-600 hover:text-blue-800 font-medium transition duration-200"
        initial={{ x: 0 }} // Initial position
        animate={{ x: isHovered ? 10 : -110 }} // Animate based on hover state
        transition={{ type: "tween", duration: 0.1 }}
      >
        <motion.span
          initial={{ x: 0 }} // Initial position
          animate={{ x: isHovered ? 10 : -120, opacity: isHovered ? 1 : 0 }} // Animate based on hover state
          transition={{ type: "tween", duration: 0.2 }}
        >
          Read More
        </motion.span>{" "}
        →
      </motion.button>
    </motion.div>
  );
};

export default MainContent;
