"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/app/Types";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
const fetchProductsbyCategory = async () => {
  const query = `*[_type == "product" && "shopgrid" in category]{
      _id,
      name,
      price,
      discountedPrice,
      rating,
      description,
      colors ,
      tags,
      stockLevel,
      "image": image.asset->url,
    }`;
  const res = await client.fetch(query);
  return res;
};
const ShopingGrid = () => {
  const { addToCart, addToWishlist, isInCart, isInWishlist } = useCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchProductsbyCategory();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="font-sans text-[#151875]">
      <div className="bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">Shop grid Default</h1>
        <p className="flex gap-2">
          <span>Home</span>
          <span>. Page</span>
          <span className="text-[#FB2E86]">. Shop grid Default</span>
        </p>
      </div>
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8 text-[#3F509E]">
        <div>
          <h1 className="text-2xl font-semibold mb-2 text-[#151875]">
            Ecommerce Accesories & Fashion Item
          </h1>
          <p className="text-sm mb-4">About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="text-sm font-medium">
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-sm font-medium">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium">
              View:
            </label>
            <Image
              src={"/icons/squires.svg"}
              alt={"squires"}
              width={12}
              height={12}
            />
            <Image
              src={"/icons/fa-solid_list.svg"}
              alt={"squires"}
              width={12}
              height={12}
            />
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white group p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative p-4 h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={150}
                  height={200}
                  className=""
                />
                <div className="absolute bottom-2 left-2 flex flex-col gap-2 invisible group-hover:visible">
                  <motion.button
                    onClick={() => addToCart(product)}
                    whileTap={{ scale: 0.9 }}
                    className={`relative p-1 rounded-full shadow hover:bg-gray-200 ${isInCart(product._id) ? "bg-[#b8f3b8] hover:bg-[#a5daa5]" : ""}`}
                  >
                    {isInCart(product._id) ? (
                      <Image
                        src={"/icons/Cart-g.svg"}
                        alt={"cart"}
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={"/icons/cart-b.svg"}
                        alt={"cart"}
                        width={24}
                        height={24}
                      />
                    )}

                    {/* Confetti effect */}
                    {isInCart(product._id) && (
                      <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 right-0 flex justify-center"
                      >
                        ✨ 💥 🌟
                      </motion.div>
                    )}
                  </motion.button>
                  <Link
                    href={`/product/${product._id}`}
                    className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-full shadow hover:bg-gray-200"
                  >
                    <button>
                      <Image
                        src={"/icons/view.svg"}
                        alt={"heart"}
                        width={20}
                        height={20}
                      />
                    </button>
                  </Link>
                  <motion.button
                    onClick={() => addToWishlist(product)}
                    whileTap={{ scale: 0.9 }}
                    className={`relative p-1 rounded-full shadow hover:bg-gray-200 ${isInWishlist(product._id) ? "bg-[#b8f3b8] hover:bg-[#a5daa5]" : ""}`}
                  >
                    {isInWishlist(product._id) ? (
                      <Image
                        src={"/icons/heart-g.svg"}
                        alt={"heart"}
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src={"/icons/heart-b.svg"}
                        alt={"heart"}
                        width={24}
                        height={24}
                      />
                    )}

                    {/* Confetti effect */}
                    {isInWishlist(product._id) && (
                      <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 right-0 flex justify-center"
                      >
                        ✨ 💥 🌟
                      </motion.div>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Name */}
              <h3 className="mt-4 text-center text-lg font-medium text-gray-800">
                {product.name}
              </h3>
              {/* Color Indicators */}
              <div className="mt-2 flex justify-center gap-1">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className={`w-3 h-3 bg-[${color}] rounded-full`}
                  ></span>
                ))}
              </div>
              {/* Price */}
              <div className="mt-2 flex items-center justify-center space-x-2">
                <span className="text-lg font-bold">${product.price}.00</span>
                <span className="text-red-500 line-through">
                  ${product.discountedPrice}.00
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopingGrid;
