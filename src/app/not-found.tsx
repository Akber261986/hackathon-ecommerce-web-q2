import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Custom404: React.FC = () => {
  return (
    <div className="text-[#152970] font-sans">
      <div className="pt-16 ml-8 lg:ml-36 space-y-2">
        <h1 className="text-4xl font-bold">404 Not Found</h1>
        <div className="flex item center gap-2 ">
          <Link href={"/"}>Home</Link>

          <p className="text-[#FB2E86]">404 Not Found</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <Image src={"/images/404.jpg"} alt="404" width={913} height={668} className=""/>
        <p className="text-2xl font-bold">Opps! The page you requested was not found!</p>
        <Link href={"/"}>
          <Button variant={"destructive"} className="px-10 py-6">
            Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
