'use client'

import { client } from "@/sanity/lib/client";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
interface ProductType {
  _id: string;
  price: number;
  image: string;
}
const fetchData = async () => {
  const quary = `*[_type == "product" && "Luxury Flower Shell Sofa Chair" == name][0]{
      _id,
      price,
      "image": image.asset->url,
  }`
  const res = await client.fetch(quary)
  return res
}
const Hero = () => {
  const {t} = useLanguage()
  const [product, setProduct] = useState<ProductType | null>(null)
  useEffect(()=>{
    const fetchedData = async () => {
      const res = await fetchData()
      setProduct(res)
    }
    fetchedData()
  }, [])
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-[#F2F0FF] px-4 sm:px-10 md:px-40">
      <div className="space-y-7 px-4 md:px-10">
      <div className="">
        <Image
          src={"/images/lamp.png"}
          alt="lamp"
          width={225}
          height={225}
          className="absolute top-0 left-0 hidden md:block"
        />
      </div>
        <p className="text-[#FB2E86]">Best Furniture For Your Castle....</p>
        <h1 className="text-4xl text-[#151875] font-bold">{t("New Furniture Collection Trends in 2020")}</h1>
        <p className="text-[#8A8FB9]">
          {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.")}
        </p>
        <Button variant={"destructive"}>Shop Now</Button>
      </div>
      <div className="relative bg-[#ECD2FA35] rounded-full flex ">
        {product && (
          <Image
            src={product.image}
            alt="chair"
            width={600}
            height={600}
            className="z-10"
          />
        )}
        <Image
          src={"/images/offtag.png"}
          alt="chair"
          width={135}
          height={135}
          className="hidden md:block absolute top-6 -right-28 w-[8rem] z-10"
        />
        <div className="bg-[#ECD2FA35] w-full h-full rounded-full absolute top-0 -right-10"></div>
      </div>
      
    </div>
  );
};

export default Hero;
