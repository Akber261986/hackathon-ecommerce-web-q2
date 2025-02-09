"use client";

import { Order } from "@/app/Types";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const fetchOrder = async () => {
  const quary = `*[_type == "order"]{
        userId,
        totalPrice,
        status,
        createdAt,
    }`;
  const res = await client.fetch(quary);
  return res;
};
export default function Orders() {
  const [order, setOrder] = useState<Order[]>([]);
  useEffect(() => {
    const fetchedData = async () => {
      const data = await fetchOrder();
      setOrder(data);
    };
    fetchedData();
  }, []);
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Orders</h1>
      <ul>
        {order.map((order, idx) => (
          <li
            key={idx}
            className="p-4 mb-2 border rounded-lg shadow-sm"
          >
            <p>
              Total Price: <strong>${order.totalPrice}</strong>
            </p>
            <p>
              Status: <span className="text-blue-500">{order.status}</span>
            </p>
            <p>Ordered On: {new Date(order.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
