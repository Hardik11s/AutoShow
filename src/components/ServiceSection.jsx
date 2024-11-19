import React from "react";
import { motion } from "framer-motion";
import mechanic from "../assets/mechanic.jpg";

function ServiceSection() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 150 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
  };

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center bg-white p-8"
      initial="initial"
      whileInView="animate"
      variants={variants}
    >
      {/* Left Side - Image with Overlay */}
      <motion.div
        className="relative w-full md:w-1/2 p-4"
        variants={fadeInLeft}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={mechanic}
          alt="Service"
          className="w-full h-auto object-cover"
        />
        <motion.div
          className="absolute bottom-1/4 -right-10 bg-red-500 text-white p-7 text-center font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          We Provide <br /> Best Solution For All Your Automotive Needs

        </motion.div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="w-full md:w-1/2 p-4 md:p-8 ml-5"
        variants={fadeInRight}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Provide Best Solution For All Your Automotive Needs
        </h2>
        <p className="text-gray-500 mb-6">
        Looking for reliable, top-quality vehicles and spare parts? AutoShow is your go-to marketplace, dedicated to bringing the finest products and services under one roof.

        </p>
        <ul className="list-none space-y-2 mb-6 text-black">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>Buy and Sell Cars – Connect buyers and sellers with a seamless platform for trading top-quality, reliable vehicles.</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>
            Genuine Spare Parts – Discover a vast selection of verified spare parts, ensuring quality and compatibility with every purchase.

            </p>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>
            Vehicle Modification Guidance – Get expert modification suggestions tailored to your car model, enhancing performance and style.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>Detailed Product Information – Access comprehensive details on each product to make well-informed, confident decisions.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>One-Stop Auto Solution – From buying to customizing, our platform is designed to meet all the needs of car enthusiasts in one place.</p>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <motion.button
            className="bg-gray-800 text-white px-6 py-2 rounded-md"
            whileHover={{ scale: 1.1, backgroundColor: "#333" }}
          >
            Our Services
          </motion.button>
          <p className="text-red-500 font-semibold">+9328947223</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ServiceSection;
