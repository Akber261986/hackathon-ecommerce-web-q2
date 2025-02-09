// import { createClient } from "next-sanity";
// import { NextResponse } from "next/server";

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   useCdn: false, // Important: Set to false for authenticated requests
//   apiVersion: "2024-01-01",
//   token: process.env.SANITY_API_TOKEN, // Required for mutations
// });

// export async function POST(req: Request) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file") as File;

//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//       alert("No file uploaded");
//     }

//     // Convert File to Buffer
//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     // Upload image to Sanity
//     const asset = await client.assets.upload("image", buffer, {
//       filename: file.name,
//     });

//     return NextResponse.json({ imageUrl: asset.url }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Upload failed", details: error }, { status: 500 });
//   }
// }