import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Signup() {
  const [formDataSignup, setFormDataSignup] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setFormDataSignup({ ...formDataSignup, [name]: value });
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'https://carretailerbackend.vercel.app/api/auth/signup',
        formDataSignup,
        {
          withCredentials: true,
        }
      );
      toast.success("Signup Successful");
      navigate('/login');
    } catch (error) {
      const errorMessage = error.response?.data?.msg || 'Error signing up';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen "
    style={{
      backgroundImage:
        "url('https://w0.peakpx.com/wallpaper/384/436/HD-wallpaper-pink-aesthetic-anime-car-80s-aesthetic-anime.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
  }}>
      <div className="w-full p-8 space-y-6 bg-white bg-opacity-60 rounded-lg shadow-md md:max-w-xl mx-4 md:mx-0">
        <h2 className="text-2xl font-semibold text-center text-red-500">Sign Up</h2>
        <form onSubmit={handleSubmitSignup} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formDataSignup.fullName}
              onChange={handleChangeSignup}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formDataSignup.email}
              onChange={handleChangeSignup}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formDataSignup.password}
              onChange={handleChangeSignup}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-sm text-black mt-4">
          Already have an account?{' '}
          <button className="text-red-500 hover:underline" onClick={()=>navigate('/login')}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
