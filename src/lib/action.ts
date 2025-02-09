// "use server";
// import { client } from "@/sanity/lib/client";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth" // Import NextAuth config

// export async function saveOrder(totalPrice: number, status: string) {
//   const session = await getServerSession(authOptions);
//   if (!session || !session.user ) throw new Error("User not authenticated");
  
//   const order = {
//     _type: "order",
//     userId: session.user,
//     totalPrice,
//     status,
//     createdAt: new Date().toISOString(),
//   };
//   return await client.create(order);
// }

// export async function getUserOrders(userId: string) {
//   if (!userId) return [];

//   const query = `*[_type == "order" && userId == "${userId}"] | order(_createdAt desc)`;
//   const params = { userId };

//   return await client.fetch(query, params);
// }
