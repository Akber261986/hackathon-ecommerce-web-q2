

import { NextResponse } from "next/server";

export async function GET() {
  const mockUserData = {
    name: "John Doe",
    email: "johndoe@example.com",
    savedAddresses: [
      "123 Elm Street, Springfield, USA",
      "456 Oak Avenue, Metropolis, USA",
    ],
    orderHistory: [
      {
        id: "ORD001",
        date: "2025-01-01",
        total: 120.99,
        status: "Delivered",
      },
      {
        id: "ORD002",
        date: "2025-01-05",
        total: 75.49,
        status: "Processing",
      },
    ],
  };

  return NextResponse.json(mockUserData);
}
