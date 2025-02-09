"use client";

import Image from "next/image";
import { ProductType } from "@/app/Types";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import Pagination from "@/components/Pagination";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
  const { addToCart, addToWishlist, isInCart, isInWishlist } = useCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products?page=${currentPage}&limit=4`);
        const data = await res.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  return (
    <div>
      <div className="flex flex-col items-center gap-10 py-6">
        <h1 className="text-[#151875] font-sans text-4xl  font-bold text-center">
          Featured Products
        </h1>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="group bg-white pb-4 border rounded-xl shadow-md hover:shadow-lg transition-shadow hover:bg-[#00009D] hover:text-white relative"
              >
                {/* Image */}
                <div className=" p-16 h-72 bg-gray-100 rounded-t-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-[200px] mb-8"
                  />
                  <Link
                    className="absolute bottom-36 invisible group-hover:visible"
                    href={`/product/${product._id}`}
                  >
                    <Button variant={"green"}>View Details</Button>
                  </Link>
                  <div className="absolute top-2 left-2  space-x-2">
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
                    <button
                      onClick={() => router.push(`/product/${product._id}`)}
                      className="p-1 bg-white rounded-full shadow hover:bg-gray-200"
                    >
                      <Image
                        src={"/icons/view.svg"}
                        alt={"view"}
                        width={24}
                        height={24}
                      />
                    </button>
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
                <h3 className="mt-4 text-center text-lg font-bold text-[#F701A8] font-lato group-hover:text-white">
                  {product.name}
                </h3>
                {/* Color Indicators */}
                <div className="mt-2 flex justify-center gap-1">
                  <span className="w-[14px] h-1 bg-[#05E6B7] rounded-full"></span>
                  <span className="w-[14px] h-1 bg-[#F701A8] rounded-full"></span>
                  <span className="w-[14px] h-1 bg-[#00009D] rounded-full group-hover:bg-[#FFEAC1]"></span>
                </div>

                {/* Price */}
                <div className="mt-2 flex flex-col items-center justify-center ">
                  <span className="text-lg font-bold">
                    {product.productCode}
                  </span>
                  <span className="text-lg font-bold">${product.price}.00</span>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
