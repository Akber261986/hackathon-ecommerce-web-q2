"use client";

import Tabs from "@/components/Tabs";
import RelatedProducts from "@/components/RelatedProducts";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../data/products";
import { useState, useEffect } from "react";
const fetchProductsbyId = async (
  _id: string
): Promise<Product | null> => {
  const query = `*[_type == "product" && _id == $_id][0]{
    _id,
    name,
    price,
    discountPercentage,
    code,
    image,
    rating,
    category,
    isSale,
    description,
    colors,
    stockLevel,
    size,
  }`;
  const allProducts = await client.fetch(query, { _id });

  return allProducts;
};

type ProductDetailsProps = {
  params: {
    _id: string;
  };
};
export default function ProductDetailsPage({ params }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const randomNum = Math.floor(Math.random() * 10);

  const { _id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductsbyId(_id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [_id]);

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl">Product loading ...</div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-20 space-y-8 font-sans text-[#151875]">
      <div className="py-10 md:py-20 space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold">Product Details</h1>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Link href={"/"} className="hover:underline text-gray-500">
            Home
          </Link>
          <p className="text-gray-500">/ Pages</p>
          <p className="text-[#FB2E86] font-medium">Product Details</p>
        </div>
      </div>

      {/* Product Details Section */}

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Images Section */}
        <div className="w-full flex-1 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex gap-2 md:flex-col justify-between md:py-6">
            <Image
              width={600}
              height={600}
              src={urlFor(product.image).url()}
              alt={product.name}
              className="w-20 h-20 md:w-28 md:h-28 rounded-lg cursor-pointer bg-gray-200"
            />
            <Image
              width={600}
              height={600}
              src={urlFor(product.image).url()}
              alt={product.name}
              className="w-20 h-20 md:w-28 md:h-28 rounded-lg cursor-pointer bg-gray-200"
            />
            <Image
              width={600}
              height={600}
              src={urlFor(product.image).url()}
              alt={product.name}
              className="w-20 h-20 md:w-28 md:h-28 rounded-lg cursor-pointer bg-gray-200"
            />
          </div>
          <Image
            width={600}
            height={600}
            src={urlFor(product.image).url()}
            alt="Main Product"
            className="w-full md:w-3/4 h-auto md:h3/4 rounded-lg bg-gray-200 p-8"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`${
                    index < 4 ? "text-yellow-400" : "text-gray-300"
                  } text-lg`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2">{`(${(randomNum + 1) * 4})`}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="text-xl font-semibold">${product.price}.00</p>
            <p className="text-red-600 font-semibold line-through">
              ${product.discountPercentage}.00
            </p>
          </div>
          <div className="font-semibold flex items-center gap-2">
            <p>Color</p>
            <div
              // className={`${product.colors[randomNum1] == "Yellow" ? "bg-yellow-400" : "bg-red-500"} w-4 h-4 rounded-full`}
            ></div>
          </div>
          <p className="text-[#A9ACC6] leading-7">
            High-quality plywood chair with ergonomic design. Corporis
            architecto dicta, in voluptate eius cupiditate vitae, soluta.
          </p>
          <button
            onClick={() => addToCart(product)}
            className="font-semibold flex items-center gap-8 "
          >
            <p className={`${product.stockLevel == 0 ? "text-red-500" : ""}`}>{product.stockLevel > 0 ? "Add to Cart" : "Out of Stock"}</p>
            <Image
              width={20}
              height={20}
              src="/icons/heart-b.svg"
              alt="Add to Wishlist"
            />
          </button>

          <p className="font-semibold">Tags</p>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <p className="font-semibold">Share</p>
            <Link href="https://facebook.com" className="hover:opacity-80">
              <Image
                width={20}
                height={20}
                src="/images/fb.png"
                alt="Facebook"
              />
            </Link>
            <Link href="https://instagram.com" className="hover:opacity-80">
              <Image
                width={20}
                height={20}
                src="/images/instagram.png"
                alt="Instagram"
              />
            </Link>
            <Link href="https://twitter.com" className="hover:opacity-80">
              <Image
                width={20}
                height={20}
                src="/images/twitter.png"
                alt="Twitter"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs and Related Products */}
      <Tabs />
      <RelatedProducts />
    </div>
  );
}
