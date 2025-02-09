"use client";

import { useUser } from "@clerk/nextjs"; 
import { useEffect, useState } from "react";
import { Order } from "@/app/Types";

const MyOrder = () => {
  const  session  = useUser();
  const [userId, setUserId] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user) {
      setUserId(session.user.id || "");
      setLoading(false)
      setOrders([])
    }
  }, [session.user]);
   
  return (
    <div>
      {/* user orders section */}
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">My Orders</h2>
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <li
                key={order.userId}
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
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
