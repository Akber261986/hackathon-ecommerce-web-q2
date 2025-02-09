"use client";

import React, { useEffect, useState } from "react";
import { User } from "../Types";
import Image from "next/image";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/users`);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-bold mb-2">Customers</h1>
      {users.map((user) => (
        <div key={user._id} className="flex items-center gap-4 p-2 shadow-lg">
          <div className=" rounded-full">
              <Image src={user.image || "/images/user.png"} alt={user.name} width={100} height={100} className="rounded-full w-10 h-10 " />
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase">{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
