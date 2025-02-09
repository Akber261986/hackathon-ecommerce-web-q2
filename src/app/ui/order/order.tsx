"use client";
import { useEffect, useState } from "react";

interface Order {
  _id: string;
  totalPrice: number;
  status: string;
  createdAt: string;
}

export default function Profile({ userId }: { userId: string }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const res = await fetch(`/api/getOrders?userId=${userId}`);
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders);
      }
    }

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="p-4 mb-2 border rounded-lg shadow-sm">
              <p>Total Price: <strong>${order.totalPrice}</strong></p>
              <p>Status: <span className="text-blue-500">{order.status}</span></p>
              <p>Ordered On: {new Date(order.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}
