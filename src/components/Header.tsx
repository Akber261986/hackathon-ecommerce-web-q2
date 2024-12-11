"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [show, setshow] = useState<boolean>(false);
  const handleVisibility = () => {
    setshow(!show);
  };
  return (
    <div className="font-sans ">
      {/* Upper Header */}
      <div className="flex flex-wrap items-center justify-center lg:justify-between bg-[#7E33E0] text-white px-4 sm:px-8">
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/envelope.svg"}
              alt="env"
              width={16}
              height={16}
            />
            <p>akbardal@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/phone.svg"}
              alt="phone"
              width={16}
              height={16}
            />
            <p>(0321)3011912</p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-3">
          <select
            id="sortBy"
            className="p-1 rounded text-sm bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="bestMatch" className="text-black">
              English
            </option>
            <option value="priceLowHigh" className="text-black">
              Sindhi
            </option>
            <option value="priceHighLow" className="text-black">
              Urdu
            </option>
          </select>
          <div className="flex items-center gap-1">
            <select
              id="sortBy"
              className="p-1 rounded text-sm bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch" className="text-black">
                USD
              </option>
              <option value="priceLowHigh" className="text-black">
                PKR
              </option>
              <option value="priceHighLow" className="text-black">
                EURO
              </option>
            </select>
          </div>
          <Link href={"/login"} className="flex items-center gap-1">
            <p>Login</p>
            <Image src={"/icons/user.svg"} alt="env" width={16} height={16} />
          </Link>
          <div className="flex items-center gap-1">
            <p>Wishlist</p>
            <Image src={"/icons/heart.svg"} alt="env" width={16} height={16} />
          </div>
          <div className="flex items-center gap-1">
            <Link href={"/cart"}>
              <Image src={"/icons/cart.svg"} alt="env" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex  items-center py-5 px-4 sm:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={"/images/logo.png"} alt="Logo" width={98} height={34} />
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex items-center space-x-8 text-[#0D0E43] font-semibold">
            <li>
              <Link
                href={"/"}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Home</p>
                <Image
                  src={"/icons/arrow-down-p.svg"}
                  alt="env"
                  width={16}
                  height={16}
                  className="invisible group-hover:visible"
                />
              </Link>
            </li>
            <li className="group relative flex items-center gap-1 ">
              <p className="group-hover:text-[#FB2E86]">Pages</p>
              <Image
                src={"/icons/arrow-down-p.svg"}
                alt="env"
                width={16}
                height={16}
                className="invisible group-hover:visible"
              />

              <ul className="p-4 shadow-sm shadow-slate-300 absolute top-6 left-4 space-y-2 hidden group-hover:block z-10 bg-white">
                <li>
                  <Link
                    href={"/pages/shopgrid"}
                    className="hover:text-[#FB2E86] whitespace-nowrap"
                  >
                    Shop Grid
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pages/shoplist"}
                    className="hover:text-[#FB2E86]"
                  >
                    Shop list
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={"/about"}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>About</p>
                <Image
                  src={"/icons/arrow-down-p.svg"}
                  alt="env"
                  width={16}
                  height={16}
                  className="invisible group-hover:visible"
                />
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Blog</p>
                <Image
                  src={"/icons/arrow-down-p.svg"}
                  alt="env"
                  width={16}
                  height={16}
                  className="invisible group-hover:visible"
                />
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Shop</p>
                <Image
                  src={"/icons/arrow-down-p.svg"}
                  alt="env"
                  width={16}
                  height={16}
                  className="invisible group-hover:visible"
                />
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Contact</p>
                <Image
                  src={"/icons/arrow-down-p.svg"}
                  alt="env"
                  width={16}
                  height={16}
                  className="invisible group-hover:visible"
                />
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="flex items-center justify-between border-2 border-[#E7E6EF] rounded self-end">
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-2 py-1 w-[calc(100%-80px)]"
            />
            <div className="bg-[#FB2E86] p-1">
              <Image
                src={"/icons/search.svg"}
                alt="Search"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Hamburger Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Image src={"/icons/ham.svg"} alt="menu" width={24} height={24} />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetDescription>
                <ul className="flex flex-col items-center gap-8 mt-16  text-[#0D0E43] font-semibold">
                  <li>
                    <Link href={"/"} className="hover:text-[#FB2E86]">
                      Home
                    </Link>
                  </li>
                  <li onClick={handleVisibility} className="group relative">
                    <p className="group-hover:text-[#FB2E86] cursor-pointer">
                      Pages
                    </p>
                    <Image
                      src={"/icons/arrow-down-p.svg"}
                      alt="env"
                      width={16}
                      height={16}
                      className="invisible group-hover:visible absolute top-1 -right-6"
                    />

                    <ul
                      className={`p-4 shadow-sm shadow-slate-300 absolute top-6 left-12 space-y-2 ${
                        show ? "block" : "hidden"
                      }`}
                    >
                      <li>
                        <Link
                          href={"/pages/shopgrid"}
                          className="hover:text-[#FB2E86] whitespace-nowrap"
                        >
                          Shop Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/pages/shoplist"}
                          className="hover:text-[#FB2E86]"
                        >
                          Shop list
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"/about"} className="hover:text-[#FB2E86]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href={"/blog"} className="hover:text-[#FB2E86]">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/pages/shoplist"}
                      className="hover:text-[#FB2E86]"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact"} className="hover:text-[#FB2E86]">
                      Contact
                    </Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
