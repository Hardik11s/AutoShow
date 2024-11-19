import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();

  const cars = [
    {
      name: "Mahindra Thar",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_(West_Godavari_District,AP,India_)_Djdavid.jpg/280px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_(West_Godavari_District,AP,India_)_Djdavid.jpg",
      link: "/mahindra",
      transmission: "Automatic",
      fuel: "Petrol",
      distance: "1300 km",
      price: "Rs12-18 Lakh*",
    },
    {
      name: "BMW Z4",
      imgSrc:
        "https://media.istockphoto.com/id/1478316595/photo/bmw-z4-sports-car.jpg?s=612x612&w=0&k=20&c=nGYzpISCYiet3VRN46XLeYGqVY9myZ3mC3kdFjZSUfQ=",
      link: "bmw",
      transmission: "Manual",
      fuel: "Petrol",
      distance: "780 km",
      price: "Rs85-92 Lakh*",
    },
    {
      name: "Hyundai Verna",
      imgSrc:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/7729/1616055133475/front-left-side-47.jpg?tr=w-664",
      link: "verna",
      transmission: "Automatic",
      fuel: "Petrol",
      distance: "1500 km",
      price: "Rs12-19 Lakh*",
    },
    {
      name: "Toyota Fortuner",
      imgSrc:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-664",
      link: "fortuner",
      transmission: "Automatic",
      fuel: "Petrol",
      distance: "1200 km",
      price: "Rs33.43-51.44 Lakh*",
    },
  ];

  return (
    <div className="text-center py-8 bg-black text-white w-screen ">
      <h2 className="text-3xl font-bold mb-4 text-red-600">Featured Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 w-screen">
        {cars.map((car, index) => (
          <motion.div
            key={index}
            className="p-2 border border-red-600 rounded-lg shadow-md bg-black hover:bg-red-600 transition-colors duration-300"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <Link to={car.link}>
              <motion.img
                src={car.imgSrc}
                alt={car.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <h4 className="text-xl font-semibold mb-2">
              <div className="hover:text-white">{car.name}</div>
            </h4>
            <ul className="text-white mb-2">
              <li>{car.transmission}</li>
              <li>{car.fuel}</li>
              <li>{car.distance}</li>
            </ul>
            <p className="text-lg font-medium text-red-400">{car.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
