'use client';

import { useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed right-4 top-20 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold">Shopping Cart</h2>
      <ul className="mt-4 space-y-2">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <span>{item.title}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <span className="font-semibold">Total: </span>
        ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
