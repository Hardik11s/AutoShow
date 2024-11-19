import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Login() {
  const [formDataLogin, setFormDataLogin] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setFormDataLogin({ ...formDataLogin, [name]: value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'https://carretailerbackend.vercel.app/api/auth/login',
        formDataLogin,
        {
          withCredentials: true,
        }
      );
      toast.success("Login Successful");
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data?.msg || 'Error logging in';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen"
    style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/car-aesthetic-gradient-wallpaper-background-4k_941493-869.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}
    >

      <div className="w-full max-w-lg p-8 space-y-6 bg-white bg-opacity-60 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-red-500">Login</h2>
        <form onSubmit={handleSubmitLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formDataLogin.email}
              onChange={handleChangeLogin}
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
              value={formDataLogin.password}
              onChange={handleChangeLogin}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-center text-sm text-black mt-4">
          Don’t have an account?{' '}
          <button href="/signup" className="text-red-500 hover:underline" onClick={()=>navigate('/signup')}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
