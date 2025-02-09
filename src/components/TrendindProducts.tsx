"use client";

import Image from "next/image";
import { ProductType } from "@/app/Types";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";


const fetchProductsbyCategory = async () => {
  const query = `*[_type == "product" && "trending" in category]{
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
  const allProducts = await client.fetch(query);
  return allProducts;
};
const fetchdata = async () => {
  const query = `*[_type == "product" && "executive" in category]{
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
const TrendindProducts = () => {

  const { addToCart, addToWishlist, isInCart, isInWishlist } = useCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [executive, setExecutive] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchProductsbyCategory();
        const executiveProducts = await fetchdata();
        setProducts(products);
        setExecutive(executiveProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center gap-10 py-6 mt-6">
        <h1 className="text-[#151875] font-sans text-4xl  font-bold text-center">
          Trending Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center shadow-sm shadow-gray-300  group"
            >
              <div className="bg-[#F6F7FB] px-10 pt-10 pb-2 relative">
                <div className="h-[178px]">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={178}
                    height={178}
                  />
                </div>
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
                    <button >
                      <Image
                        src={"/icons/view.svg"}
                        alt={"view"}
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
              <div className="text-center flex flex-col items-center gap-3 text-[#151875]">
                <h1 className="text-lg font-bold">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <p className="">${product.price}.00 </p>
                  <p className="opacity-30 line-through">
                    ${product.discountedPrice}.00
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center flex-col lg:flex-row justify-center gap-28 mt-10">
        {executive.slice(3).map((product) => (
          <div key={product._id} className="h-60 bg-[#FFF6FB] p-4 relative">
            <h1 className="text-2xl font-semibold font-[Josefin Sans] text-[#151875]">
              23% off in all products
            </h1>
            <button className="text-[#F52B70] underline text-sm font-semibold text-start">
              Shop Now
            </button>
            <Image
              src={product.image}
              alt="Logo"
              width={150}
              height={178}
              className="absolute bottom-0 right-0"
            />
          </div>
        ))}
        {/* <div className="h-60 bg-[#EEEFFB] p-4 relative">
          <h1 className="text-2xl font-semibold font-[Josefin Sans] text-[#151875]">
            23% off in all products
          </h1>
          <button className="text-[#F52B70] underline text-sm font-semibold text-start">
            View Collection
          </button>
          <Image
            src={"/images/image16.png"}
            alt="Logo"
            width={178}
            height={178}
            className="absolute bottom-0 right-0"
          />
        </div> */}
        <div className="h-60 flex flex-col justify-between">
          {executive.slice(0, 3).map((product) => (
            <div key={product._id} className="flex  items-center ">
              <div className="bg-[#F6F7FB] p-1 ">
                <div className="">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={50}
                    height={64}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 text-[#151875]">
                <h1 className="text-base font-bold">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <p className="">${product.price}.00 </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendindProducts;
