import React, { useState } from "react";
import logo from "../assets/logo.png";
import Links from "./Links";
import { useNavigate } from "react-router-dom";

const Navbar = ({ loggedin }) => {

  const navigate = useNavigate();
  
  return (
    <header className="flex justify-between items-center bg-black text-white">
      <div className="text-2xl font-bold px-5  h-[85px] ">
        <img
          className="h-16 w-40 border border-white rounded-lg mt-[0.1rem] hover:cursor-pointer" 
          src={logo}
          alt="Logo"
          onClick={() => navigate("/")}

        />
      </div>
      <Links />
    </header>
  );
};

export default Navbar;
