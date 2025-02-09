
import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-01-15",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, 
});


async function uploadImage(imageBase64: string) {
  try {
    const response = await client.assets.upload("image", Buffer.from(imageBase64, "base64"), {
      contentType: "image/png",
      filename: "profile-picture.png",
    });

    return response._id; // Return the Sanity image asset ID
  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, location, image } = body;
    const { userId } = body

    if (!name || !email) {
      return NextResponse.json({ error: "Name and Email are required." }, { status: 400 });
    }

    let imageRef = null;
    if (image) {
      imageRef = await uploadImage(image);
    }

    const updatedDoc = await client
      .patch(userId) 
      .set({
        name,
        email,
        mobile,
        location,
        ...(imageRef ? { image: { _type: "image", asset: { _ref: imageRef } } } : {}),
      })
      .commit();

    return NextResponse.json({ success: true, data: updatedDoc }, { status: 200 });
  } catch (error) {
    console.error("Sanity update error:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
