import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Preloader from "../components/Preloader.jsx";
import car from "../assets/car.png";
import Navbar from "../components/Navbar"; // Import your new Navbar component
import MainContent from "../components/MainContent";
import animatecar from "../assets/animatecar.png";
import brake from "../assets/brake.png";
import accelarator from "../assets/accelarator.png";
import ServiceSection from "../components/ServiceSection";
import PartnersSection from "../components/PartersSection";
import KnowMore from "../components/KnowMore";
import AllParts from "./AllParts.jsx";
import Featured from "../components/Featured";
import Chatbot from "../components/AI.jsx";
import NewsletterForm from "../components/Newsletter.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(false); // Adjust this state as needed

  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* Navbar */}
      <Navbar loggedin={loggedin} />

      {/* Main Section */}
      <section className="relative ">
        {/* Red and Black Split Background */}
        <div className="flex min-h-96">
          <div
            className="w-3/5 bg-[#DB2D2E] flex justify-end text-9xl tracking-widest pt-2   font-serif "
            style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}
          >
            Aut
          </div>
          <div
            className="  bg-black flex justify-start text-9xl w-full text-white tracking-widest pt-2 font-serif"
            style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)" }}
          >
            oShow
          </div>
        </div>

        {/* Car Image */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-full max-w-4xl z-10"
          initial={{ x: "100%", y: "80%", scale: 0.5 }}
          animate={{ x: "-50%", y: "26%", scale: 0.9 }}
          whileInView={{ scale: 1.01 }} // Scale up when in view
          transition={{ duration: 1, delay: 0.2 }} // Main transition settings
          // Optional: Scale up on hover
        >
          <img src={car} alt="Car" className="w-full object-cover -mb-24" />
        </motion.div>
      </section>
      <section className="w-full">
        <MainContent />
      </section>
      <div className="fixed bottom-0 right-0 flex">
        <motion.img
          src={brake}
          alt="Brake"
          className="w-18 h-28 mr-6 object-cover bg-transparent z-100 transition-transform duration-100 cursor-pointer"
          onClick={() => window.scrollBy({ top: 300, behavior: "smooth" })}
          whileHover={{ scale: 0.8 }} // Scale up on hover
        />
        <motion.img
          src={accelarator}
          alt="Accelerator"
          className="w-18 h-28 mr-6 object-cover bg-transparent z-100 transition-transform duration-100 cursor-pointer"
          onClickCapture={() =>
            window.scrollBy({ top: -300, behavior: "smooth" })
          }
          whileHover={{ scale: 0.8 }} // Scale up on hover
        />
      </div>
      <section>
        <ServiceSection />
      </section>
      <section id="allparts">
        <AllParts />
      </section>
      <section>
        <PartnersSection />
      </section>
      <section className="w-screen">
        <Featured />
      </section>
      {/* <AiHelperButton /> */}
      <section>
        <KnowMore />
      </section>
      <section>
        <NewsletterForm />
      </section>
      <section>
        <Chatbot />
      </section>
    </div>
  );
};

export default Home;
