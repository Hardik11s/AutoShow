import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const names = [
    { name: "Raghav", link: "https://www.instagram.com/raghavmaheshwari03" },
    { name: "Hardik", link: "https://www.instagram.com/hardik.sh_/" },
    { name: "Vilansh", link: "https://www.instagram.com/vilanshsharma" },
  ];
  return (
    <motion.div
      className="bg-black w-full pt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          {/* Exterior Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative group cursor-pointer">
              Exterior
              <span className="absolute left-0 bottom-[-10px] bg-red-500 h-0.5 w-12 transition-all duration-300 group-hover:w-24"></span>
            </h4>
            <ul>
              {[
                "Tyres",
                "Alloy Wheels",
                "Headlights",
                "Car Covers",
                "Car Wraps",
                "Windshields",
                "Windshield Washer Fluids",
                "Front Bumpers",
                "Rear Bumpers",
              ].map((item) => (
                <li key={item} className="mb-3 cursor-pointer">
                  <Link
                    to={`/parts/${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Interior Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative group cursor-pointer">
              Interior
              <span className="absolute left-0 bottom-[-10px] bg-red-500 h-0.5 w-12 transition-all duration-300 group-hover:w-24"></span>
            </h4>
            <ul>
              {[
                "Seat Covers",
                "Speakers",
                "Steering Covers",
                "Mats",
                "Arm Rests",
                "Headrests",
                "Car Batteries",
                "Dash Cams",
                "First Aid Kits",
                "Catalytic Converters",
              ].map((item) => (
                <li key={item} className="mb-3 cursor-pointer">
                  <Link
                    to={`/parts/${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative group cursor-pointer">
              Company
              <span className="absolute left-0 bottom-[-10px] bg-red-500 h-0.5 w-12 transition-all duration-300 group-hover:w-24"></span>
            </h4>
            <ul>
              {["About Us", "Contact Us"].map((item) => (
                <li key={item} className="mb-3 cursor-pointer">
                  <Link
                    to={`/parts/${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative group cursor-pointer">
              Follow Us
              <span className="absolute left-0 bottom-[-10px] bg-red-500 h-0.5 w-12 transition-all duration-300 group-hover:w-24"></span>
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaWhatsapp />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
              ].map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-white w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110 duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-center text-gray-400 pb-3">
          <h5>
            <a href="#" className="text-white">
              🌐
            </a>{" "}
            Copyright © 2024 AutoShow All Rights Reserved
          </h5>
          <small className="text-sm">
            ♥ Built By
            {names.map((person, index) => (
              <a
                key={index}
                href={person.link}
                className="text-white hover:text-red-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.name}
              </a>
            ))}
          </small>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
