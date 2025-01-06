// import { NextRequest, NextResponse } from "next/server";
// import { Shippo } from "shippo";

// const shippoClient = new Shippo({
//   apiKeyHeader: process.env.SHIPPO_API_KEY,
//   shippoApiVersion: "2018-02-08",
// });
// export async function POST(req: NextRequest) {
//   try {
//     const { country, city, items } = await req.json();

//     // Prepare the parcel data (example weights and dimensions)
//     const parcel = {
//       length: "10",
//       width: "8",
//       height: "6",
//       distance_unit: "in",
//       weight: items.reduce(
//         (total: number, item: { weight: number; quantity: number }) =>
//           total + item.weight * item.quantity,
//         0
//       ).toString(),
//       mass_unit: "lb",
//     };

//     // Prepare the address data
//     const fromAddress = {
//       name: "Your Store Name",
//       street1: "215 Clayton St.",
//       city: "San Francisco",
//       state: "CA",
//       zip: "94117",
//       country: "US",
//       phone: "4151234567",
//       email: "support@yourstore.com",
//     };

//     const toAddress = {
//       city,
//       country,
//     };

//     // Create a shipment with Shippo
//     const shipment = await shippoClient.shipment.create({
//       address_from: fromAddress,
//       address_to: toAddress,
//       parcels: [parcel],
//       async: false,
//     });

//     // Extract the cheapest rate
//     const rates = shipment.rates;
//     if (!rates || rates.length === 0) {
//       return NextResponse.json({ shippingCost: 0 });
//     }

//     const cheapestRate = rates.reduce((prev:any, curr:any) =>
//       parseFloat(prev.amount) < parseFloat(curr.amount) ? prev : curr
//     );

//     return NextResponse.json({ shippingCost: parseFloat(cheapestRate.amount) });
//   } catch (error: any) {
//     console.error("Error calculating shipping:", error);
//     return NextResponse.json({ error: "Failed to calculate shipping", details: error.message });
//   }
// }
