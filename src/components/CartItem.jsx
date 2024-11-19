import React, { useState, useEffect } from "react";

async function removeFromCart(_id, setCartItems, getcartItems) {
  console.log("now this is imp", _id);
  try {
    const response = await fetch(
      "https://carretailerbackend.vercel.app/api/cart/removefromcart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies with the request
        body: JSON.stringify({ partID: _id }), // Convert the body to JSON
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const items = await getcartItems();
    setCartItems(items);
    return response.json(); // Returning response in case you need it
  } catch (error) {
    console.log(error);
  }
}

const CartItem = ({
  item,
  onRemove,
  onUpdateQuantity,
  setCartItems,
  getcartItems,
}) => {
  const [quantity, setQuantity] = useState(item.quantity || 1); // Set default quantity

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(item._id, newQuantity); // Update quantity based on the item ID
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(item._id, newQuantity); // Update quantity based on the item ID
    } else {
      // Remove item if quantity is reduced to 0
      onRemove(item._id);
    }
  };

  return (
    <div className="flex items-center justify-between border-b py-4 px-6">
      {/* Image Section */}
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 rounded-md"
        />
        <div className="ml-4 w-60">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-gray-500">{item.category}</p>
          <p className="text-blue-600 font-bold">${item.price}</p>
        </div>
      </div>

      {/* Unit Price */}
      <p className="text-lg font-bold">₹{item.price}</p>

      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium p-2 rounded"
          onClick={() => {
            removeFromCart(item._id, setCartItems, getcartItems);
          }}
        >
          Remove from Cart
        </button>
        <div className="flex items-center">
          <button
            onClick={decreaseQuantity}
            className="bg-gray-200 p-2 rounded"
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="bg-gray-200 p-2 rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* Total Price */}
      <p className="text-lg font-bold text-purple-600">
        ₹{(quantity * item.price).toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
