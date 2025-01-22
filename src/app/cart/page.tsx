"use client";

import { useCart } from "@/context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Cart = () => {
  const {
    cartItems,
    updateCartItemQuantity,
    getTotalPrice,
    clearCart,
    removeFromCart,
  } = useCart();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [shippingCosts, setShippingCosts] = useState(0);
  // const [message, setMessage] = useState<string>("");

  // useEffect(() => {
  //   if (shippingCost > 0) {
  //     setMessage(`Shipment calculated successfully`);
  //     setTimeout(() => {
  //       setMessage("");
  //     }, 4000);
  //   }
  // }, [shippingCost]);

  return (
    <div className="text-[#101750] font-sans">
      {/* <div className="bg-[#F6F5FF] py-16 px-4 sm:px-8">
        {message && (
          <div
            className={`text-center text-green-500 bg-[#cef5ce] dark:bg-[#363333] fixed right-4 top-10 transform duration-500 ease-out origin-right ${message ? "scale-100" : ""} rounded-lg shadow-md dark:shadow-[#a6ff95] font-bold px-8 md:px-10 py-5 z-10 flex gap-4`}
          >
            <Image
              src={"/icons/circle-check-solid.svg"}
              alt="check"
              width={20}
              height={20}
            />
            <p className="scrolLineGreen">{message}</p>
          </div>
        )}
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <p className="flex gap-2">
          <span>Home.</span>
          <span>Page.</span>
          <span className="text-[#FB2E86]">Shopping Cart</span>
        </p>
      </div> */}
      <div className="p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Table */}
        <div className="lg:col-span-2">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="p-4 border">Product</th>
                <th className="p-4 border hidden sm:block">Price</th>
                <th className="p-4 border">Quantity</th>
                <th className="p-4 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="text-center">
                  <td className="p-2 md:p-4 border flex flex-col md:flex-row items-center space-x-4">
                    <div className="relative">
                      <div
                        onClick={() => removeFromCart(item._id)}
                        className="w-4 h-4 flex items-center justify-center rounded-full bg-black text-white absolute -right-6 md:-right-3 md:-top-3 cursor-pointer"
                      >
                        x
                      </div>
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={500}
                        height={500}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="sm:hidden">${item.price}.00</p>
                      {/* <p className="text-sm text-start text-gray-500">
                        {item.colors?.find((color) => (
                          <span
                            key={color}
                            className={`w-3 h-3 ${color[1]} rounded-full`}
                          ></span>
                        ))}
                      </p> */}
                    </div>
                  </td>
                  <td className="p-4 border hidden sm:table-cell">
                    ${item.price}.00
                  </td>
                  <td className="p-2 border">
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-center text-xl text-[#BEBFC2]">
                      {/* Decrement Button */}
                      <button
                        onClick={() => {
                          const currentItem = cartItems.find(
                            (cartItem) => cartItem._id === item._id
                          );
                          if (currentItem && currentItem.quantity > 1) {
                            updateCartItemQuantity(
                              item._id,
                              currentItem.quantity - 1
                            );
                          }
                        }}
                        className="bg-[#E7E7EF] w-10 h-10 content-center"
                      >
                        -
                      </button>

                      {/* Display Current Quantity */}
                      <span className="bg-gray-100 w-10 sm:w-20 h-10 flex items-center justify-center">
                        {item.quantity}
                      </span>

                      {/* Increment Button */}
                      <button
                        onClick={() => {
                          const currentItem = cartItems.find(
                            (cartItem) => cartItem._id === item._id
                          );
                          if (
                            currentItem &&
                            currentItem.quantity < item.stockLevel
                          ) {
                            updateCartItemQuantity(
                              item._id,
                              currentItem.quantity + 1
                            );
                          }
                        }}
                        className="bg-[#E7E7EF] w-10 h-10 content-center"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-4 border">
                    ${(item.price * item.quantity)}.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md">
              Update Cart
            </button>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-pink-500 text-white rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="flex flex-col justify-between gap-4">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="p-6 bg-gray-50 rounded-md shadow-md space-y-6">
            <p className="flex justify-between mb-2">
              <span>Subtotal:</span> <span>${getTotalPrice()}</span>
            </p>
            {/* <p className="flex justify-between mb-2">
              <span>Shipping:</span> <span>${shippingCosts}</span>
            </p> */}
            <p className="flex justify-between mb-4">
              <span>Totals:</span>
              <span>${getTotalPrice() + shippingCosts}</span>
            </p>
            <p className="flex items-center  text-sm text-[#C1C8E1]">
                  <input
                    type="checkbox"
                    className="mr-2 accent-[#22c55e] focus:ring-[#22c55e] checked:text-[#fff]"
                  />
                  Shipping & taxes calculated at checkout.
                </p>
            <Link href={"chekout"}>
              <button className="w-full py-2 bg-green-500 text-white rounded-md mt-6">
                Proceed To Checkout
              </button>
            </Link>
          </div>
          {/* Shipping Calculator */}
          <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Calculate Shipping</h2>
            <input
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              placeholder="Pakistan, Bangladesh"
              className="w-full mb-3 px-3 py-2 border rounded-md"
            />
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Karachi, Dhaka"
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
