import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(request: Request) {
  try {
    const { slug, stock } = await request.json();

    if (!slug || stock === undefined) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    // Update stock in Sanity
    await client.patch(slug).set({ stock }).commit();

    return NextResponse.json({ message: "Stock updated successfully" });
  } catch (error) {
    console.error("Error updating stock:", error);
    return NextResponse.json(
      { error: "Failed to update stock" },
      { status: 500 }
    );
  }
}
