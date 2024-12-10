import Link from "next/link";
import Image from "next/image";
import React from "react";

const ProductDetails: React.FC = () => {
  return (
    <div className="flex items-center text-[#151875]">
      {/* Images Section */}
      <div className="flex gap-4 ">
        <div className=" flex flex-col justify-between">
          {["bag1a", "bag1b", "bag1c"].map((url, idx) => (
            <Image
              width={200}
              height={200}
              key={idx}
              src={`/images/${url}.jpg`}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full rounded-lg cursor-pointer"
            />
          ))}
        </div>
        <Image
          width={200}
          height={200}
          src="/images/bag1.jpg"
          alt="Main Product"
          className="w-full rounded-lg"
        />
      </div>
      {/* Details Section */}
      <div className="w-full md:w-1/2 space-y-4 p-6">
        <h1 className="text-2xl font-bold">Playwood Arm Chair</h1>
        <div className="flex items-center">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="ml-2 text-gray-500">(25 reviews)</span>
        </div>
        <div className="flex gap-4">
          <p className=" font-semibold">$210.00</p>
          <p className=" text-red-600 font-semibold line-through">$210.00</p>
        </div>
        <p className=" font-semibold">Color</p>
        <p className="text-[#A9ACC6] leading-8">
          High-quality playwood chair with ergonomic design <br /> Corporis
          architecto dicta, in voluptate eius cupiditate vitae, soluta.
        </p>
        <button className="font-semibold flex items-center gap-8">
          <p>Add to Cart</p>
          <Image
            width={20}
            height={20}
            src="/icons/heart-b.svg"
            alt="Main Product"
          />
        </button>
        <p className=" font-semibold">Tags</p>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <p className=" font-semibold">Share</p>
          <Link href="facebook.com" className="text-blue-500 hover:underline">
            <Image
              width={50}
              height={50}
              src="/images/facebook.jpg"
              alt="fb"
              className="w-4 h-4"
            />
          </Link>
          <Link href="facebook.com" className="text-blue-500 hover:underline">
            <Image
              width={50}
              height={50}
              src="/images/instagram.png"
              alt="fb"
              className="w-4 h-4"
            />
          </Link>
          <Link href="facebook.com" className="text-blue-500 hover:underline">
            <Image
              width={50}
              height={50}
              src="/images/twitter.png"
              alt="fb"
              className="w-4 h-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
