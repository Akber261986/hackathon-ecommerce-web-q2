import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false, // Important: Set to false for authenticated requests
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN, // Required for mutations
});


export async function POST(req: Request) {
  try {
    const { name, email, password, image } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Check if user already exists in Sanity
    const query = `*[_type == "user" && email == $email][0]`;
    const existingUser = await client.fetch(query, { email });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in Sanity
    const newUser = await client.create({
      _type: "user",
      name,
      email,
      password: hashedPassword,
      image: image || undefined,
    });

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });

  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}