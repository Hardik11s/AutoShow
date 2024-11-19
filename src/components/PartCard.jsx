import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

async function addToCart(id) {
  try {
    const response = await axios.post(
      "https://carretailerbackend.vercel.app/api/cart/addtocart",
      { partID: id },
      { withCredentials: true }
    );
    toast.success("Added to cart");
  } catch (error) {
    console.error(error);
    toast.error("Error adding to cart");
  }
}

const PartCard = ({ part }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-lightblue-700 hover:bg-deepskyblue-500 transition duration-300 transform hover:scale-105 pb-4 px-2 text-center">
      <div className="relative bg-zinc-100 rounded shadow-lg w-full max-w-md mb-4 h-full">
        {/* Wrapper for the image and "Add to Cart" text */}
        <div className="relative group">
          <img
            src={part.image}
            alt={part.name}
            className="w-full h-60 rounded mb-4 object-cover"
          />
          {/* "Add to Cart" text with icon */}
          <div className="absolute inset-0 flex items-center justify-center space-x-2 text-white bg-red-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
            <button
              onClick={() => addToCart(part._id)}
              className="w-10 h-10 bg-red-700 hover:bg-red-800 text-white flex items-center justify-center rounded transition duration-300"
            >
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button
              onClick={() => navigate("/detail", { state: { part } })}
              className="w-10 h-10 bg-red-700 hover:bg-red-800 text-white flex items-center justify-center rounded transition duration-300"
            >
              <i className="fas fa-link"></i>
            </button>
          </div>
        </div>
        <div className="absolute top-3 right-2 bg-red-500 text-white px-2 py-1 rounded">
          <span className="line-through text-gray-500 mr-2 text-md">
            ₹{part.price + 2000}
          </span>
          <span className="text-2xl">₹{part.price}</span>
        </div>
        <div className="bg-zinc-100">
          <p className=" text-lg mx-4 mt-4 mb-3 text-red-500">
            Model: {part.model.toUpperCase()}
          </p>

          <h2 className="bg-zinc-100 text-xl text-black font-semibold mx-4 tracking-wide">
            {part.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PartCard;
