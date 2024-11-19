import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useHistory
import Preloader from "./Preloader";
import PartCard from "./PartCard"; // Import the new PartCard component
import { useNavigate } from "react-router-dom";

const Part = () => {
  const { types, model } = useParams(); // Extract both types and model from URL parameters
  const navigate = useNavigate();
  const [partData, setPartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartData = async () => {
      try {
        const response = await fetch(
          `https://carretailerbackend.vercel.app/api/part/gettypes/${types}` // Update the API URL to include model
        );
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
  }, [types, model]); // Include model in the dependency array

  if (loading)
    return (
      <div className="text-white ml-[250px]">
        <Preloader />
      </div>
    );
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen text-white p-6 flex flex-col items-center bg-white w-screen">

      <h1 className="text-4xl font-bold mb-4 text-black p-4">
        {types.toUpperCase()} for {model.toUpperCase()}
      </h1>
      {partData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-screen-lg">
          {model
            ? partData.map((part) => {
                if (part.model === model || part.model == "universal") {
                  return <PartCard key={part._id} part={part} />;
                }
                return null; // Return null if the model doesn't match
              })
            : partData.map((part) => <PartCard key={part._id} part={part} />)}
        </div>
      ) : (
        <p className="text-lg">No data found for the specified type.</p>
      )}
    </div>
  );
};

export default Part;
