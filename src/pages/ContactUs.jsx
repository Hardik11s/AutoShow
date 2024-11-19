import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';
import { toast } from "react-hot-toast";


function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://carretailerbackend.vercel.app/api/email/contact', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      toast.success('Mail Sent Successfully.');

    } catch (error) {
      console.log(error);
      toast.error('Failed to send email.');
    }
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.div
      className="bg-white p-8 flex flex-col md:flex-row w-screen h-full "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="md:w-2/3 p-4"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-2xl font-bold mb-4 text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Have Questions? Get In Touch!
        </motion.h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
                placeholder="example@example.com"
              />
            </motion.div>

            {/* Additional fields similarly */}
          </div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
              placeholder="Your message here..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        className="md:w-1/3 p-4 bg-black rounded-md shadow-md h-full mt-20"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-red-600 ">
          Contact Details
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="text-white">
            Have questions or need assistance? Our team is here to help! Reach out to us via phone or email, and we’ll ensure you get the support you need for a smooth experience with AutoShow.
            </p>
          </div>
          <div>
            <p className="text-white">Send email</p>
            <a
              href="mailto:support@example.com"
              className="text-red-600 underline"
            >
              contact.autoshow@gmail.com
            </a>
          </div>
        
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ContactUs;
