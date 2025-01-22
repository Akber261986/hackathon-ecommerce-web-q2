"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Product } from "../../../data/products";

const WishListPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const res = await fetch(`/api/products?limit=4`);
            const data = await res.json();
            setProducts(data.products);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchProducts();
      }, []);
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();
  return (
    <div className="p-6">
      {wishlistItems.length === 0 ? (
        <p className="place-self-center">Your Wishlist is empty.</p>
      ) : (
        <div>
          <div className="w-full flex justify-between py-14 ">
            <div className="text-xl">
              Wishlist {`(${wishlistItems.length})`}
            </div>
            <Button className="py-6 px-8 border-[#7D8184]" variant={"outline"}>
              Move All To Bag
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <div key={item._id}>
                <div className="w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
                  <button
                    className="place-self-end mt-3 mr-3 bg-white rounded-full p-2"
                    onClick={() => removeFromWishlist(item._id)}
                  >
                    <Image
                      src={"/icons/icon-delete.svg"}
                      alt={"bag"}
                      width={20}
                      height={80}
                    />
                  </button>
                  <div className="w-[178px] h-[129px] p-4 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item._id}
                      width={178}
                      height={129}
                    />
                  </div>
                  <Button
                    className="w-full self-end rounded-t-none"
                    onClick={() => addToCart(item)}
                  >
                    <Image
                      src={"/icons/Cart-w.svg"}
                      alt={"bag"}
                      width={20}
                      height={80}
                    />
                    Add To Cart
                  </Button>
                </div>
                <div className="text-sm mt-4">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-red-500">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <div className="w-full flex justify-between pt-14 pb-6 ">
          <div className="text-xl flex items-center gap-2">
            <div className="w-5 h-10 rounded-md bg-red-500"></div>
            <p>Just For You</p>
          </div>
          <Button className="py-6 px-8 border-[#7D8184]" variant={"outline"}>
            See All
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product)=>(
            <div>
            <div className="relative w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
              <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">
                -35%
              </div>
              <button className="place-self-end mt-3 mr-3 bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <div className="w-[178px] h-[129px] p-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={178}
                  height={129}
                />
              </div>
              <Button className="w-full self-end rounded-t-none">
                <Image
                  src={"/icons/Cart-w.svg"}
                  alt={"cart"}
                  width={20}
                  height={80}
                />
                Add To Cart
              </Button>
            </div>
            <div className="text-sm mt-4 space-y-2">
              <h2 className="font-bold">{product.name}</h2>
              <p className="text-red-500">${product.price}</p>
              <p>
                <span className="text-yellow-400 text-xl">
                  {"★".repeat(4)}
                  {"☆".repeat(1)}
                </span>{" "}
                <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
