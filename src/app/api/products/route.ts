import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const start = (page - 1) * limit;
  const end = start + limit;

  try {
    // Fetch paginated products from Sanity
    const products = await client.fetch(
      `*[_type == "product" && "featured" in category] | order(_createdAt desc) [${start}...${end}] {
        _id,
        name,
        "image": image.asset->url,
        price,
        discountedPrice,
        productCode,
        colors,
        stockLevel,
        rating,
        quantity,
      }`
    );

    // Fetch total count of products
    const totalCount = await client.fetch(
      `count(*[_type == "product" && "featured" in category])`
    );

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      products,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

