'use client'

import { useUser } from '@clerk/nextjs';
import NavLinks from '@/app/ui/userProfile/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useState } from "react";


export default function SideNav() {
  const session = useUser()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(()=>{
    if (session.user){
      setName(session.user.fullName)
      setEmail(session.user.primaryEmailAddress.emailAddress)
      setImage(session.user.imageUrl)
    }
  },[session])
  console.log(session.user);
  
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
    <div className=" md:w-1/4 py-4 rounded-lg bg-white ">
        <div className="flex items-center gap-3">
          <Image
            src={image || "/images/user.png"}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden w-full h-10 grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button  className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
