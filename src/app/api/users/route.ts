import { client } from "@/sanity/lib/client"
import { NextResponse } from "next/server"

export async function GET() {
     const quary = `*[_type == "user"]{
            _id,
            name,
            email,
            "image": image.asset->url,
        }`
        const res = await client.fetch(quary)
        return NextResponse.json(res)
}