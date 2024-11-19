import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

async function removeFromCart(id) {
  try {
    const response = await axios.post(
      `https://carretailerbackend.vercel.app/api/cart/removefromcart`,
      {
        partID: id,
      },
      {
        withCredentials: true,
      }
    );
    toast.success("Removed from cart");
    console.log(response.data);
  } catch (error) {
    toast.error("Error removing from cart");
    console.error(error);
  }
}

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  async function getCartItems() {
    try {
      const response = await fetch(
        "https://carretailerbackend.vercel.app/api/cart/getcart",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ₹{response.status}`);
      }

      const data = await response.json();
      setCartItems(data.parts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 w-screen">
      <div className="ml-20 max-w-screen-lg px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-black sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {!cartItems ? (
                <p className="text-white">Your cart is empty.</p>
              ) : (
                cartItems.map((part) => (
                  <div
                    key={part.id}
                    className="rounded-lg border border-gray-700 bg-red-500 p-4 shadow-sm dark:border-gray-700 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="w-20 shrink-0 md:order-1">
                        <img
                          className="h-20 w-20 dark:hidden rounded-md"
                          src={part.image}
                          alt={part.name}
                        />
                        <img
                          className="hidden h-20 w-20 dark:block"
                          src={part.image}
                          alt={part.name}
                        />
                      </a>

                      <label
                        htmlFor={`counter-input-₹{part.id}`}
                        className="sr-only"
                      >
                        Choose quantity:
                      </label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-white">
                            ₹{part.price}
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <button
                          className="text-base font-medium text-white hover:underline pb-1"
                          onClick={() => {Navigate("/detail", { state: { part } });}}
                        >
                          {part.name}
                        </button>
                        <br />
                        <a
                          href="#"
                          className="text-base font-medium text-white hover:underline"
                        >
                          Model: {part.model.toUpperCase()}
                        </a>

                        <div className="flex items-center gap-4">

                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-blue-800 hover:underline"
                            onClick={()=>{removeFromCart(part._id)
                                          setCartItems(cartItems.filter((cartItem) => cartItem._id !== part._id));}}  
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-700 bg-red-500 p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-white">Order summary</p>

              <div className="space-y-4">
                <div className="border-b border-gray-600"></div>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-black">
                    Total price
                  </dt>
                  <dd className="text-base font-semibold text-white">
                    ₹
                    {cartItems
                      .reduce(
                        (total, part) => total + part.price,
                        0
                      )
                      .toFixed(2)}
                  </dd>
                </dl>
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-red-600 px-4 py-2 text-base font-semibold text-white hover:bg-red-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
