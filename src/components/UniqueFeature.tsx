'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { ProductType } from "@/app/Types";
const fetchData = async () => {
  const quary = `*[_type == "product" && "B&B Italian Sofa" == name][0]{
       _id,
       name,
       price,
       "image": image.asset->url,
   }`
   const res = await client.fetch(quary)
   return res
 }
const UniqueFeature =  () => {
  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    const fetchedData = async () =>{
      try {
        const res = await fetchData()
        setProduct(res)
      } catch (error) {
        console.log("Data could't fetched", error)
      }
    } 
    fetchedData()
  }, [])
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#F2F0FF]">
      <div>
       {product && <Image src={product?.image} alt="sofa" width={600} height={600} />}
      </div>
      <div className="space-y-7 px-10">
        <h1 className="text-3xl text-[#151875] font-sans font-bold">
        Stylish Golden Metal Legs Mint Blue Fabric Velvet Sofa Leisure Armchair
        </h1>
        <div className="text-[#ACABC3] space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-[#F52B70]"></div>
            <p>All frames constructed with hardwood solids and laminates</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-[#2B2BF5]"></div>
            <p>Reinforced with double wood dowels, glue, screw</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-[#2BF5CC]"></div>
            <p>Arms, backs and seats are structurally reinforced</p>
          </div>
        </div>
        <div className="flex  items-center gap-4">
        <Button variant={"destructive"} className="py-6">Add To Cart</Button>
        <p className="text-[#151875] font-bold">{product?.name} <br />${product?.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeature;
