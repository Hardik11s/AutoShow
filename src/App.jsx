import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import ContactUs from "./pages/ContactUs";
import AllParts from "./pages/AllParts.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Part from "./components/Part.jsx";
import Parts from "./components/Parts.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import Detail from "./components/Detail.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import SellCar from "./pages/SellCar.jsx";
import Login from "./pages/Login.jsx";
import { Toaster } from "react-hot-toast";
import Mahindra from "./pages/Mahindra.jsx";
import Bmw from "./pages/Bmw.jsx";
import Verna from "./pages/Verna.jsx";
import Fortuner from "./pages/Fortuner.jsx";
import Hi from "./components/hi.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Custom Navbar component based on the route
const ConditionalNavbar = () => {
  const location = useLocation();
  const noNavbarRoutes = ["/", "/mahindra", "/bmw", "/verna", "/fortuner"];

  if (noNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  return <Navbar2 />;
};

// Custom Footer component based on the route
const ConditionalFooter = () => {
  const location = useLocation();
  const noFooterRoutes = ["/mahindra", "/bmw", "/verna", "/fortuner"];

  if (noFooterRoutes.includes(location.pathname)) {
    return null;
  }

  return <Footer />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ConditionalNavbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/part/:types/:model" element={<Part />} />
          <Route path="/parts/:types" element={<Parts />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/sellcar" element={<SellCar />} />
          <Route path="/mahindra" element={<Mahindra />} />
          <Route path="/bmw" element={<Bmw />} />
          <Route path="/verna" element={<Verna />} />
          <Route path="/fortuner" element={<Fortuner />} />
          <Route path="/hi" element={<Hi />} />
        </Routes>
        <ConditionalFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
