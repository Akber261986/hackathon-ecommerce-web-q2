"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ProductType } from "@/app/Types";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

const fetchProductsbyCategory = async () => {
  const query = `*[_type == "product" && "top" in category]{
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
const TopCatagories = () => {
  const { addToCart, isInCart, addToWishlist, isInWishlist } = useCart();
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
    <div>
      <div className="flex flex-col items-center gap-10 py-6 ">
        <h1 className="text-[#151875] font-sans text-4xl  font-bold text-center">
          Top Catagories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="group flex flex-col items-center "
            >
              <div className="bg-blue-500 rounded-full">
                <div className=" relative bg-[#eaedf7] px-10 pt-10 pb-2 rounded-full transform translate-x-0 group-hover:translate-x-3 duration-300 group-hover:-translate-y-2">
                  <div className="h-[200px]">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={178}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <Link
                    className="absolute bottom-4 right-[85px] invisible group-hover:visible"
                    href={`/product/${product._id}`}
                  >
                    <Button size={"sm"} variant={"green"}>
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="text-center flex flex-col items-center gap-3 text-[#151875]">
                <div className=" bottom-2 left-2 flex mt-4 gap-2">
                  <motion.button
                    onClick={() => addToCart(product)}
                    whileTap={{ scale: 0.9 }}
                    className={`relative p-1 rounded-full shadow hover:bg-gray-200 ${isInCart(product._id) ? "bg-[#b8f3b8] hover:bg-[#a5daa5]"  : ""}`}
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
                    className={`relative p-1 rounded-full shadow hover:bg-gray-200 ${isInWishlist(product._id) ? "bg-[#b8f3b8] hover:bg-[#a5daa5]"  : ""}`}
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
                <h1 className="text-lg font-bold">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <p className="">${product.price}.00 </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[url('/images/bg2.png')] bg-cover bg-center w-screen h-[20rem] flex flex-col items-center justify-center ">
        <div className="md:w-[35vw]  flex flex-col items-center gap-6">
          <h1 className="text-3xl text-center ">
            Get Leatest Update By Subscribe 0ur Newslater
          </h1>
          <Button variant={"destructive"} className="py-6 px-10">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopCatagories;
