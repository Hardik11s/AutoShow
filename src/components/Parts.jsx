import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "./Preloader";
import PartCard from "./PartCard"; // Import the new PartCard component

const Parts = () => {
  const { types } = useParams();
  const [partData, setPartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartData = async () => {
      try {
        const response = await fetch(
          `https://carretailerbackend.vercel.app/api/part/gettypes/${types
            .toLowerCase()
            .replace(/\s+/g, "")}`
        ); // Added quotes around the URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPartData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Set a minimum loading time of 1 second
    const timer = setTimeout(() => {
      fetchPartData();
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [types]);

  if (loading) {
    return (
      <div className="text-white ml-[250px]">
        <Preloader />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen text-white p-6 flex flex-col items-center bg-white w-full">
      <h1 className="text-4xl font-bold mb-4 text-black pb-4 ">
        {types.toUpperCase()}
      </h1>
      {partData.length > 0 ? (
        <div className=" w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
          {partData.map((part) => (
            <PartCard key={part._id} part={part} /> // Use the PartCard component
          ))}
        </div>
      ) : (
        <p className="text-lg">No data found for the specified type.</p>
      )}
    </div>
  );
};

export default Parts;
