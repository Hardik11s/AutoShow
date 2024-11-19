import React, { useState } from "react";
import logo from "../assets/Verna/image-removebg-preview (1).jpg"
import Links from "./Links";
const Navbar = ({ loggedin }) => {
  return (
    <header className="flex justify-between items-center bg-transparent  bg-[#161920] ">
      <div className="text-1xl font-bold px-5 bg-[#DB2D2E] w-3/5 h-16 py-1 mr-6 ">
        <img
          className="h-14 w-40 border border-white rounded-lg hover:cursor-pointer"
          src={logo}
          alt="Logo"
        />
      </div>

      <Links />
    </header>
  );
};

export default Navbar;
