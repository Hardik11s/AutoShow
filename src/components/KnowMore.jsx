import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const KnowMore = () => {
  const Counter = ({ target, duration, suffix, title }) => {
    return (
      <div className="cdhl_counter_wrapper">
        <motion.div
          className="counter clearfix counter-style-5"
          style={{
            "--icon_color": "#db2d2e",
            "--separator_color": "#db2d2e",
            "--label_color": "#FFFFFF",
            "--counter_color": "#FFFFFF",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="content">
            <CountUp end={target} duration={duration} suffix={suffix}>
              {({ countUpRef }) => (
                <span className="timer counter-animated" ref={countUpRef} />
              )}
            </CountUp>
            <h6 className="counter-title">{title}</h6>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="text-white relative">
      <img
        src="https://images.unsplash.com/photo-1584345760620-42314dc68d63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A black Lamborghini"
        className="w-full h-screen object-cover"
      />
      <div className="container mx-auto md:mx-10 top-10 absolute z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between bg-red-500 hover:bg-red-600 text-white font-bold py-8 px-6 md:px-16 rounded mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Counter
            target={3968}
            duration={10}
            suffix="k"
            title="Vehicles In Stock"
          />
          <Counter
            target={25}
            duration={1}
            suffix="+"
            title="Years Experience"
          />
          <Counter
            target={3999}
            duration={10}
            suffix="+"
            title="Satisfied Clients"
          />
          <Counter target={150} duration={1} suffix="+" title="Dealer Review" />
        </motion.div>
        <motion.h3
          className="elementor-heading-title elementor-size-default text-2xl md:text-3xl font-bold text-black mb-2 mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Want To Know More?
        </motion.h3>
      </div>
    </div>
  );
};

export default KnowMore;
