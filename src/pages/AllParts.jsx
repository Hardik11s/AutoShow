import React, { useState } from "react";
import { motion } from "framer-motion";
import Exterior from "../components/Exterior";
import Interior from "../components/Interior";

const AllParts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [renderKey, setRenderKey] = useState(Date.now());

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    console.log("Searching for:", searchQuery);
    setRenderKey(Date.now());
  };

  const parentVariants = {
    initial: {
      opacity: 0,
      y: 300,
      x: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.6,
      },
    },
  };

  const childVariants = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-red-600 to-red-400 text-white p-6 flex flex-col items-center rounded-lg"
      initial="initial"
      whileInView="animate"
      variants={parentVariants}
    >
      {/* Title Animation */}
      <motion.h1
        className="text-5xl font-bold text-center mb-8 text-black"
        variants={parentVariants}
        whileInView="animate"
      >
        All Parts
      </motion.h1>

      {/* Search Bar Animation */}
      <motion.div
        className="flex items-center w-full max-w-md mb-8"
        variants={parentVariants}
        initial="initial"
        animate="animate"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by Car model..."
          className="flex-1 p-3 rounded-l-lg bg-black text-white text-lg"
        />
        <motion.button
          onClick={handleSearchClick}
          className="p-3 rounded-r-lg bg-blue-500 hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            viewBox="0 0 25 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.42-1.42l4.38 4.37a1 1 0 11-1.42 1.42l-4.37-4.38zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Description Animation */}
      <motion.h2
        className="text-lg text-center mb-6 max-w-2xl text-black"
        variants={parentVariants}
      >
        Explore our extensive range of spare parts tailored to meet the specifications of your vehicle. Find high-quality, compatible parts for every model, ensuring performance, reliability, and a perfect fit for your needs.
      </motion.h2>

      {/* Components Animation */}
      <motion.div
        className="w-full max-w-4xl space-y-6"
        key={renderKey}
        initial="initial"
        animate="animate"
        variants={parentVariants}
      >
        <motion.div variants={childVariants}>
          <Exterior searchQuery={searchQuery} />
        </motion.div>
        <motion.div variants={childVariants}>
          <Interior searchQuery={searchQuery} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AllParts;
