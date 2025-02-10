"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useClerk, useUser } from "@clerk/nextjs"; 

const Header = () => {
  const { cartItems, wishlistItems } = useCart();
  const session = useUser()
  const { signOut } = useClerk()

  const [show, setshow] = useState<boolean>(false);
  const [nav, setNav] = useState<string>("");
  const [profile, setProfile] = useState<string>("");

  const handleVisibilityBlog = () => {
    setshow(!show);
    setNav("blog");
  };

  const handleVisibilityPages = () => {
    setshow(!show);
    setNav("pages");
  };
  const handleVisibilityProfile = () => {
    setshow(!show);
    setProfile("profile");
  };

  return (
    <header className="font-sans ">
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
          <div className="flex items-center gap-1">
            <select
              id="sortBy"
              className="p-1 rounded text-sm bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="en" className="text-black">
                English
              </option>
              <option value="es" className="text-black">
                Español
              </option>
              <option value="ur" className="text-black">
                Urdu
              </option>
            </select>
          </div>
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

          <Link href={"/wishlist"}>
            <div className="flex items-center gap-1 relative">
              <p className="hidden sm:block">Wishlist</p>
              {wishlistItems.length > 0 && (
                <div className="w-5 h-5 bg-[#FB2E86] text-white text-center rounded-full absolute -right-3 -top-2">
                  {wishlistItems.length}
                </div>
              )}
              <Image
                src={"/icons/heart.svg"}
                alt="env"
                width={20}
                height={20}
              />
            </div>
          </Link>
          <Link href={"/cart"}>
            <div className="flex items-center gap-1 relative">
              {cartItems.length > 0 && (
                <div className="w-5 h-5 bg-[#FB2E86] text-white text-center rounded-full absolute -right-2 -top-2">
                  {cartItems.length}
                </div>
              )}
              <Image src={"/icons/cart.svg"} alt="env" width={24} height={24} />
            </div>
          </Link>
          {session.user ? (
            // Show profile and logout if user is logged in
            <div className="flex items-center gap-4 w-8 h-8  rounded-full relative">
              <button
                onClick={handleVisibilityProfile}
                className="flex items-center gap-1 "
              >
                <Image
                  src={session.user.imageUrl || "/images/user.png"}
                  alt="user"
                  width={250}
                  height={250}
                  className="rounded-full cursor-pointer"
                />
              </button>
              <div
                className={`flex flex-col justify-around gap-1 absolute top-11 right-0 bg-gray-800 w-72 h-96 py-2 shadow-lg rounded-lg ${show && profile == "profile" ? "block" : "hidden"} z-30`}
              >
                <div className="w-full flex flex-col items-center gap-2 py-4">
                  <div className="w-10 h-10 rounded-full bg-red-300">
                    <Image
                      src={ session.user.imageUrl ||"/images/user.png"}
                      alt="user"
                      width={250}
                      height={250}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p>{ session.user.fullName}</p>
                  <p>{session.user.primaryEmailAddress.emailAddress}</p>
                </div>
                <div className="flex flex-col items-start w-full space-y-2">
                  <Link
                    className="hover:bg-gray-600 w-full px-6 py-1"
                    href={"/user-profile"}
                    onClick={ handleVisibilityProfile }
                  >
                    <p>Profile</p>
                  </Link>
                  <Link
                    className="hover:bg-gray-600 w-full px-6 py-1"
                    href={"/dashboard"}
                    onClick={handleVisibilityProfile}
                  >
                    <p>Dashboard</p>
                  </Link>
                  <Link
                    className="hover:bg-gray-600 w-full px-6 py-1"
                    href={""}
                  >
                    <p>Summary</p>
                  </Link>
                  <Link
                    className="hover:bg-gray-600 w-full px-6 py-1"
                    href={""}
                  >
                    <p>Order</p>
                  </Link>
                  <button
                  onClick={() => signOut({ redirectUrl: '/' })}
                    className="flex items-center gap-1 bg-pink-500 hover:bg-pink-600 px-2 ml-5 py-1 rounded"
                  >
                    <p>Logout</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href={"/login"} className="flex items-center gap-1">
              <p>Login</p>
              <Image src={"/icons/user.svg"} alt="env" width={16} height={16} />
            </Link>
          )}
        </div>
      </div>

      {/* Main Header */}
      <div className="flex  items-center py-5 px-4 sm:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            <Image src={"/images/logo.png"} alt="Logo" width={98} height={34} />
          </Link>

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

              <ul className="p-4 shadow-sm shadow-slate-300 absolute top-6 left-4 space-y-2 hidden group-hover:block z-10 bg-white whitespace-nowrap">
                <li>
                  <Link
                    href={"/about"}
                    className="hover:text-[#FB2E86] whitespace-nowrap"
                  >
                    About
                  </Link>
                </li>
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
                <li>
                  <Link
                    href={"/pages/shopleftsider"}
                    className="hover:text-[#FB2E86]"
                  >
                    Shop left Sider
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={"/all"}
                className="group flex items-center gap-1 hover:text-[#FB2E86]"
              >
                <p>Products</p>
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
              <p className="group-hover:text-[#FB2E86]">Blog</p>
              <Image
                src={"/icons/arrow-down-p.svg"}
                alt="env"
                width={16}
                height={16}
                className="invisible group-hover:visible"
              />
              <ul className="p-4 shadow-sm shadow-slate-300 absolute top-6 left-4 space-y-2 hidden group-hover:block z-10 bg-white whitespace-nowrap">
                <li>
                  <Link
                    href={"/blog/blogpage"}
                    className="hover:text-[#FB2E86] whitespace-nowrap"
                  >
                    Blog page
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/blog/singleblog"}
                    className="hover:text-[#FB2E86] whitespace-nowrap"
                  >
                    Single Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/blog/faq"}
                    className="hover:text-[#FB2E86] whitespace-nowrap"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
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
          <div className="flex items-center justify-between border-2 border-[#E7E6EF] rounded self-end mx-4">
            <input
              type={"search"}
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
                  <li
                    onClick={handleVisibilityPages}
                    className="group relative"
                  >
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
                        show && nav === "pages" ? "block" : "hidden"
                      } whitespace-nowrap`}
                    >
                      <li>
                        <Link
                          href={"/about"}
                          className="hover:text-[#FB2E86] whitespace-nowrap"
                        >
                          About
                        </Link>
                      </li>
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
                      <li>
                        <Link
                          href={"/pages/shopleftsider"}
                          className="hover:text-[#FB2E86]"
                        >
                          Shop left Sider
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"/"} className="hover:text-[#FB2E86]">
                      Products
                    </Link>
                  </li>
                  <li onClick={handleVisibilityBlog} className="group relative">
                    <p className="group-hover:text-[#FB2E86] cursor-pointer">
                      Blog
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
                        show && nav == "blog" ? "block" : "hidden"
                      } whitespace-nowrap`}
                    >
                      <li>
                        <Link
                          href={"/blog/blogpage"}
                          className="hover:text-[#FB2E86] whitespace-nowrap"
                        >
                          Blog Page
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/blog/singleblog"}
                          className="hover:text-[#FB2E86] whitespace-nowrap"
                        >
                          Single Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/blog/faq"}
                          className="hover:text-[#FB2E86] whitespace-nowrap"
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
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
    </header>
  );
};

export default Header;
