import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const query = category
    ? `*[_type == "allproducts" && "${category}" in category]{
        slug,
        name,
        price,
        oldPrice,
        code,
        image,
        rating,
        category,
        isSale,
        description,
        colors,
        stock,
        size,
      }`
    : `*[_type == "allproducts"]{
        slug,
        name,
        price,
        oldPrice,
        code,
        image,
        rating,
        category,
        isSale,
        description,
        colors,
        stock,
        size,
      }`;

  try {
    const products = await client.fetch(query);
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
