// app/api/reviews/route.ts

import { NextResponse } from "next/server";

let mockReviews = [
  {
    id: "1",
    name: "Alice Johnson",
    rating: 5,
    comment: "Amazing product! Highly recommend it.",
    date: "2025-01-10",
  },
  {
    id: "2",
    name: "Bob Smith",
    rating: 4,
    comment: "Great quality, but shipping took a bit longer.",
    date: "2025-01-12",
  },
];

export async function GET() {
  return NextResponse.json(mockReviews);
}

export async function POST(request: Request) {
  const newReview = await request.json();
  newReview.id = (mockReviews.length + 1).toString(); // Generate a new ID
  newReview.date = new Date().toISOString().split("T")[0]; // Add current date
  mockReviews.push(newReview);
  return NextResponse.json(newReview, { status: 201 });
}
