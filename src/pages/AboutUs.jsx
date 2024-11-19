import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <section id="about" className="py-10 bg-black text-white w-screen">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold uppercase">About Us</h2>
          <h3 className="text-gray-400 text-lg mt-2">
            Some information about our AutoShow.
          </h3>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-red-500 h-full"></div>
          </div>

          <ul className="space-y-20">
            {/* First Item */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <div className="flex pr-20 items-center">
                <div className="text-right w-1/2 pr-10">
                  <h4 className="font-semibold text-2xl">Values And Beliefs</h4>
                  <p className="text-gray-300 mt-2">
                    We prioritize treating our customers like royalty. Our
                    strong sales result from our low-profit model, which keeps
                    customers satisfied with our affordable prices.
                  </p>
                </div>
                <motion.div
                  className="mr-10"
                  variants={circleVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold z-10">1</span>
                  </div>
                </motion.div>
              </div>
            </motion.li>

            {/* Second Item */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-end items-center">
                <div className="flex items-center justify-end space-x-4 w-1/2 mr-10">
                  <motion.div
                    className="relative flex flex-col items-center"
                    variants={circleVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold z-10">2</span>
                    </div>
                  </motion.div>
                  <div className="text-left flex flex-col pl-5">
                    <h4 className="font-semibold text-2xl">
                      Build A Connection
                    </h4>
                    <p className="text-gray-300 mt-2">
                      We're all about building connections. Whether you're
                      buying, selling, or modifying cars, join our community
                      where enthusiasts connect and thrive.
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>

            {/* Third Item */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <div className="flex pr-20 items-center">
                <div className="text-right w-1/2 pr-10">
                  <h4 className="font-semibold text-2xl">Be Interesting!</h4>
                  <p className="text-gray-300 mt-2">
                    We're dedicated to keeping the automotive world captivating.
                    Explore with us and experience the thrill of the ride!
                  </p>
                </div>
                <motion.div
                  className="mr-10"
                  variants={circleVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold z-10">3</span>
                  </div>
                </motion.div>
              </div>
            </motion.li>

            {/* Final Item */}
            <motion.li
              className="flex justify-center items-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <div className="">
                <motion.div
                  className="relative"
                  variants={circleVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-28 h-28 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold text-center shadow-lg">
                    <h4 className="text-sm">
                      Be Part
                      <br /> Of Our
                      <br /> Community!
                    </h4>
                  </div>
                </motion.div>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
