"use client";

import Users from "@/app/ui/Users";
import Orders from "@/app/ui/Order";
import { useUser } from "@clerk/nextjs"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const  session  = useUser();

  const [allow, setAllow] = useState<boolean>(false);
  const [userId, setUserId] = useState("")
  const router = useRouter();

  useEffect(() => {
    if (session.user){
      setUserId(session.user.id)
    }
    const permissions = async () => {
      if (session?.user && userId === "user_2snFefrCfuQUBxiOIRNDTjaUbUo") {
        setAllow(true);
        router.push("dashboard")
        return
      } else {
        router.push("unauthorized");
      }
    }
    permissions()
  }, [router, session.user, userId]);

  return (
    <main className="h-screen ">
      {allow && (
        <div>
          <h1 className={` mb-4 text-xl md:text-2xl`}>Dashboard</h1>
          {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div> */}
          <div className="mt-6 flex flex-col md:flex-row gap-2 md:justify-around">
            <Orders />
            <Users />
          </div>
        </div>
      )}
    </main>
  );
}
