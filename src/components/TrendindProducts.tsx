'use client'

import Image from "next/image";
import { Product } from "../../data/products";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
const fetchProductsbyCategory = async () => {
  const query = `*[_type == "product" && category == "Chair"][10...19]{
      _id,
      name,
      price,
      "image": image.asset->url,
      discountPercentage,
      category,
      stockLevel,
    }`
  const allProducts = await client.fetch(query)
  return allProducts
  
}
const fetchdata = async () => {
  const query = `*[_type == "product" && category == "Executive"][0...3]{
      _id,
      name,
      price,
      "image": image.asset->url,
      discountPercentage,
      category,
      stockLevel,
    }`
  const res = await client.fetch(query)
  return res
  
}
const TrendindProducts = () => {
  const {addToCart} = useCart()
  const [products, setProducts] = useState<Product[]>([])
  const [executive, setExecutive] = useState<Product[]>([])
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const products = await fetchProductsbyCategory()
          const executiveProducts = await fetchdata()
          setProducts(products)
          setExecutive(executiveProducts)
        } catch (error) {
          console.error("Error fetching products:", error)
        }
      }
      fetchProducts()
    }, [])
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
                  <button onClick={()=> addToCart(product)} className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-full shadow hover:bg-gray-200">
                    <Image
                      src={"/icons/cart-b.svg"}
                      alt={"heart"}
                      width={20}
                      height={20}
                    />
                  </button>
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
                  <button className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-full shadow hover:bg-gray-200">
                    <Image
                      src={"/icons/heart-b.svg"}
                      alt={"heart"}
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
              <div className="text-center flex flex-col items-center gap-3 text-[#151875]">
                <h1 className="text-lg font-bold">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <p className="">${product.price}.00 </p>
                  <p className="opacity-30 line-through">${product.discountPercentage}.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row justify-center gap-28 mt-10">
        <div className="h-60 bg-[#FFF6FB] p-4 relative">
          <h1 className="text-2xl font-semibold font-[Josefin Sans] text-[#151875]">
            23% off in all products
          </h1>
          <button className="text-[#F52B70] underline text-sm font-semibold text-start">
            Shop Now
          </button>
          <Image
            src={"/images/image15.png"}
            alt="Logo"
            width={150}
            height={178}
            className="absolute bottom-0 right-0"
          />
        </div>
        <div className="h-60 bg-[#EEEFFB] p-4 relative">
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
        </div>
        <div className="h-60 flex flex-col justify-between">
          {executive.map((product)=>(
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
