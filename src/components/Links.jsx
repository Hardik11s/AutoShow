import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/DropDownMenu"; // Ensure this path is correct
import "font-awesome/css/font-awesome.min.css";
import axios from 'axios';
import toast from "react-hot-toast";


async function logout(setLoggedin){
  try {
    const res=axios.get('https://carretailerbackend.vercel.app/api/auth/logout',{
      withCredentials:true
    })
    toast.success("Logged out");
    console.log(res.data);
    setLoggedin(false);

    
}
  catch (error) {
    console.log(error);
  }
}

async function isloggedin(setLoggedin){
  try {
    const me=await axios.get('https://carretailerbackend.vercel.app/api/auth/getme',{
      withCredentials:true
  })
    console.log("is login",me.data);
    if(me.data){
      setLoggedin(true);
    }
    
  } 
  catch (error) {
    console.log(error);
  }
}


const Links = () => {
  const navigate = useNavigate();

  const [isExteriorOpen, setIsExteriorOpen] = useState(false);
  const [isInteriorOpen, setIsInteriorOpen] = useState(false);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    async function checkLogin(){
      try {
        await isloggedin(setLoggedin);
      } catch (error) {
        console.log(error);
      }
  }
  checkLogin();
  }, []);

  const handleMouseEnterExterior = () => setIsExteriorOpen(true);
  const handleMouseLeaveExterior = () => setIsExteriorOpen(false);
  const handleMouseEnterInterior = () => setIsInteriorOpen(true);
  const handleMouseLeaveInterior = () => setIsInteriorOpen(false);

  const interiorItems = [
    { label: "Speakers", onClick: () => navigate("parts/speakers") },
    {
      label: "Steering Covers",
      onClick: () => navigate("parts/steeringcovers"),
    },
    { label: "Mats", onClick: () => navigate("parts/mats") },
    { label: "Seat Covers", onClick: () => navigate("parts/seatcovers") },
    { label: "Arm Rests", onClick: () => navigate("parts/armrests") },
    { label: "Headrests", onClick: () => navigate("parts/headrests") },
    { label: "Car Batteries", onClick: () => navigate("parts/carbatteries") },
    { label: "dash cams", onClick: () => navigate("parts/dashcams") },
    { label: "First Aid Kits", onClick: () => navigate("parts/firstaidkits") },
    {
      label: "Catalytic Converters",
      onClick: () => navigate("parts/catalyticconverters"),
    },
  ];

  const exteriorItems = [
    {
      label: "Tyre",
      onClick: () => navigate(`parts/tyres`),
    },
    { label: "Alloy Wheel", onClick: () => navigate("parts/alloywheels") },
    { label: "Headlight", onClick: () => navigate("parts/headlights") },
    { label: "Car Covers", onClick: () => navigate("parts/carcovers") },
    { label: "Windshields", onClick: () => navigate("parts/Windshields") },
    { label: "Car Wraps", onClick: () => navigate("parts/carwraps") },
    { label: "Front Bumpers", onClick: () => navigate("parts/frontbumpers") },
    { label: "Rear Bumpers", onClick: () => navigate("parts/rearbumpers") },
  ];

  const handleNavigation = () => {
    if (!loggedin) {
      navigate("/login");
    }
    else{

    }
  };

  const gotoCart = () => {
    navigate("/cart");
  };

  const gotoAboutUs = () => {
    navigate("/aboutus");
  };

  const gotoContactUs = () => {
    navigate("/contactus");
  };

  const gotoHome = () => {
    navigate("/");
  };

  const gotoAddCar = () => {
    navigate("/sellcar");
  };

  return (
    <div className="w-full  flex items-end justify-end">
      <nav className=" ">
        <ul className="flex space-x-6  font-roboto text-xs sm:text-sm mr-8 bg-black">
          <li
            className="hover:text-gray-300 mt-8 cursor-pointer hidden md:flex"
            onClick={gotoHome}
          >
            Home
          </li>
          <DropdownMenu
            title="Interior"
            items={interiorItems}
            isOpen={isInteriorOpen}
            onMouseEnter={handleMouseEnterInterior}
            onMouseLeave={handleMouseLeaveInterior}
          />
          <DropdownMenu
            title="Exterior"
            items={exteriorItems}
            isOpen={isExteriorOpen}
            onMouseEnter={handleMouseEnterExterior}
            onMouseLeave={handleMouseLeaveExterior}
          />
          <li
            className="hover:text-gray-300 mt-8 cursor-pointer"
            onClick={gotoAboutUs}
          >
            About Us
          </li>
          <li
            className="hover:text-gray-300 mt-8 cursor-pointer"
            onClick={gotoContactUs}
          >
            Contact Us
          </li>
          <li
            className="mt-3 cursor-pointer relative rounded-full border border-gray-400 p-1 flex items-center justify-center"
            onClick={gotoCart}
          >
            <i className="hover:text-white fa-solid fa-cart-shopping text-lg sm:text-xl text-gray-300"></i>
           
          </li>
          <li
            className="hover:text-gray-300 mt-8 cursor-pointer"
            onClick={gotoAddCar}
          >
            Sell Car
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            {loggedin ? (<button
              className=" mt-6 py-2 rounded-md text-xs sm:text-sm font-medium mr-1"
              onClick={()=>{logout(setLoggedin)}}
            >
              Logout
            </button>):(<button className=" mt-6 py-2 rounded-md text-xs sm:text-sm font-medium mr-1" onClick={()=>navigate('/login')}>Login</button>)}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Links;
