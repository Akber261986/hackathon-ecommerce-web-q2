"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice} = useCart();
 

  return (
    <div className="text-[#101750] font-sans">
      <div className="bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <p className="flex gap-2">
          <span>Home.</span>
          <span>Page.</span>
          <span className="text-[#FB2E86]">Shopping Cart</span>
        </p>
      </div>
      <div className="p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Table */}
        <div className="lg:col-span-2">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border">Product</th>
                <th className="p-4 border">Price</th>
                <th className="p-4 border">Quantity</th>
                <th className="p-4 border">Total</th>
                <th className="p-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.slug} className="text-center">
                  <td className="p-2 md:p-4 border flex flex-col md:flex-row items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      {/* <p className="text-sm text-gray-500">
                        Color: {item.color}, Size: {item.size}
                      </p> */}
                    </div>
                  </td>
                  <td className="p-4 border">${item.price.toFixed(2)}</td>
                  <td className="p-2 border">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.slug, Number(e.target.value))
                      }
                      className="w-16 px-2 py-1 border rounded-md"
                      min="1"
                    />
                  </td>
                  <td className="p-4 border">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td onClick={()=>removeFromCart(item.slug)} className="p-2 border text-center content-center cursor-pointer text-red-500">
                    Remove
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md">
              Update Cart
            </button>
            <button onClick={clearCart} className="px-4 py-2 bg-pink-500 text-white rounded-md">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="p-6 bg-gray-50 rounded-md shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <p className="flex justify-between mb-2">
              <span>Subtotal:</span> <span>${getTotalPrice().toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span>Shipping:</span> <span>${(cartItems.length > 0 ? 15 : 0).toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-4">
              <span>Totals:</span>
              <span>${(cartItems.length > 0 ? (getTotalPrice() + 15) : 0 ).toFixed(2)}</span>
            </p>
            <Link href={"chekout"}>
              <button className="w-full py-2 bg-green-500 text-white rounded-md">
                Proceed To Checkout
              </button>
            </Link>
          </div>
          {/* Shipping Calculator */}
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Calculate Shipping</h2>
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full mb-3 px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Mirpur, Dhaka - 1200"
              className="w-full mb-3 px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full mb-4 px-3 py-2 border rounded-md"
            />
            <button className="w-full py-2 bg-blue-500 text-white rounded-md">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
