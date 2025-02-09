import { client } from "@/sanity/lib/client";
import { UserResource } from "@clerk/types";

// Function to sync a Clerk user with Sanity
export async function syncUserWithSanity(user: UserResource) {
  if (!user) return null;

  // Check if the user already exists in Sanity
  const query = `*[_type == "user" && clerkId == $clerkId][0]`;
  const existingUser = await client.fetch(query, { clerkId: user.id });

  if (!existingUser) {
    // Create a new user in Sanity
    const newUser = {
      _type: "user",
      clerkId: user.id,
      name: user.firstName || "",
      email: user.primaryEmailAddress?.emailAddress || "",
      image: user.imageUrl || "",
    };

    await client.create(newUser);
  }
}
