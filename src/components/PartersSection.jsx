import React from "react";
import { motion } from "framer-motion";

function PartnersSection() {
  const logoUrl =
    "https://img.freepik.com/premium-vector/car-logo-vector-design-sketch_501705-4.jpg";

  const partners = Array(10).fill(logoUrl); // Duplicate the logo for continuous effect

  const variants = {
    initial: {
      opacity: 0,
      x: "100%", // Start from outside the right
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1.5, // Move to the original position
      transition: {
        duration: 0.5, // Duration for the entrance animation
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white py-12 text-gray-500">
      <h2 className="text-center text-xl font-semibold mb-8">
        -------------------------OUR PARTNERS & SUPPORTERS------------------
      </h2>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex flex-nowrap"
          style={{ x: "100%" }} // Start from right for continuous scrolling
          whileInView="animate"
          animate={{ x: ["100%", "-100%"] }} // Animate from right to left
          transition={{ duration: 20, ease: "linear", loop: Infinity }}
        >
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center mx-4"
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }} // Repeat entrance animation
            >
              <img
                src={logo}
                alt={`Company ${index + 1} Logo`}
                className="w-40 h-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default PartnersSection;
