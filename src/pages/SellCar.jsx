import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";

function SellCar() {
  const [formType, setFormType] = useState("");

  // Form data for selling a car
  const [carFormData, setCarFormData] = useState({
    registrationNumber: "",
    brand: "",
    model: "",
    kilometers: "",
    image: "", // Assuming file upload
    price: "",
  });

  // Form data for selling a spare part
  const [sparePartFormData, setSparePartFormData] = useState({
    name: "",
    type: "",
    model: "",
    image: "",
    price: "",
  });

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "car") {
      setCarFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (formType === "sparePart") {
      setSparePartFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e, formType) => {
    const { name, files } = e.target;
    if (formType === "car") {
      setCarFormData((prev) => ({
        ...prev,
        [name]: files[0], // Assuming only one file is uploaded
      }));
    } else if (formType === "sparePart") {
      setSparePartFormData((prev) => ({
        ...prev,
        [name]: files[0], // Assuming only one file is uploaded
      }));
    }
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    const dataToSend = formType === "car" ? carFormData : sparePartFormData;
    console.log(dataToSend);

    if(formType === "car") {
    try {
      const response = await axios.post(
        "https://carretailerbackend.vercel.app/api/email/sellcar",
        dataToSend
      );
      toast.success("Mail Sent Successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email.");
    }
  }
  else if(formType === "sparePart") {
    try {
      const response = await axios.post(
        "https://carretailerbackend.vercel.app/api/email/sellcarpart",
        dataToSend
      );
      toast.success("Mail Sent Successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email.");
    }
  }

    // Reset form after submission
    if (formType === "car") {
      setCarFormData({
        registrationNumber: "",
        brand: "",
        model: "",
        totalKilometers: "",
        image: "",
        price: "",
      });
    } else if (formType === "sparePart") {
      setSparePartFormData({
        name: "",
        type: "",
        model: "",
        image: "",
        price: "",
      });
    }
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  return (
    <div
      className="min-h-screen bg-black text-black flex flex-col items-center justify-center p-8 w-screen"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/09/52/66/45/360_F_952664596_cBLm1WS8UKxuo1Vnapq27kPXV2XcNU3H.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="flex space-x-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-4xl font-extrabold text-center shadow-lg">
          Wanna Sell Your Car?
        </h1>
        <motion.button
          onClick={() => handleFormTypeChange("car")}
          className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Sell Car
        </motion.button>
        <motion.button
          onClick={() => handleFormTypeChange("sparePart")}
          className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Sell Spare Part
        </motion.button>
      </motion.div>

      {formType && (
        <motion.form
          className="w-full max-w-2xl p-8 rounded-lg shadow-2xl space-y-6 backdrop-blur-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => handleSubmit(e, formType)}
        >
          <h3 className="text-2xl font-bold text-red-500 text-center">
            {formType === "car" ? "Car Details" : "Spare Part Details"}
          </h3>

          {formType === "car" && (
            <>
              <label className="block">
                <span className="text-white font-semibold">
                  Registration Number:
                </span>
                <input
                  type="text"
                  name="registrationNumber"
                  value={carFormData.registrationNumber}
                  onChange={(e) => handleChange(e, "car")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Brand:</span>
                <input
                  type="text"
                  name="brand"
                  value={carFormData.brand}
                  onChange={(e) => handleChange(e, "car")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Model:</span>
                <input
                  type="text"
                  name="model"
                  value={carFormData.model}
                  onChange={(e) => handleChange(e, "car")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">
                  Total Kilometers:
                </span>
                <input
                  type="number"
                  name="kilometers"
                  value={carFormData.kilometers}
                  onChange={(e) => handleChange(e, "car")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">
                  Car Photos link:
                </span>
                <input
                  type="url"
                  name="image"
                  value={carFormData.image}
                  onChange={(e) => handleChange(e, "car")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">
                  Expected Price:
                </span>
                <input
                  type="number"
                  name="price"
                  value={carFormData.price}
                  onChange={(e) => handleChange(e, "car")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
            </>
          )}

          {formType === "sparePart" && (
            <>
              <label className="block">
                <span className="text-white font-semibold">
                  Spare Part Name:
                </span>
                <input
                  type="text"
                  name="name"
                  value={sparePartFormData.name}
                  onChange={(e) => handleChange(e, "sparePart")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Type:</span>
                <input
                  type="text"
                  name="type"
                  value={sparePartFormData.type}
                  onChange={(e) => handleChange(e, "sparePart")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Model:</span>
                <input
                  type="text"
                  name="model"
                  value={sparePartFormData.model}
                  onChange={(e) => handleChange(e, "sparePart")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">
                  Spare Part Photo link:
                </span>
                <input
                  type="url"
                  name="image"
                  value={sparePartFormData.image} 
                  onChange={(e) => handleChange(e, "sparePart")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Price:</span>
                <input
                  type="number"
                  name="price"
                  value={sparePartFormData.price}
                  onChange={(e) => handleChange(e, "sparePart")}
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block"></label>
            </>
          )}

          <motion.button
            type="submit"
            className="w-full bg-red-600 text-white rounded-lg py-3 mt-4 hover:bg-red-700 transition"
          >
            Submit
          </motion.button>
        </motion.form>
      )}
    </div>
  );
}

export default SellCar;