import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { client } from "@/sanity/lib/client";
import { User } from "@/app/Types";

// Extend the session user type
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string;
      email?: string;
      image?: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }
      
        const query = `*[_type == "user" && email == $email][0]{
            _id, 
            name, 
            email, 
            password, 
            'image': image.asset->url
        }`;
        const user:User = await client.fetch(query, { email: credentials.email });
      
        if (!user) {
          throw new Error("User not found");
        }
      
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) {
          throw new Error("Invalid password");
        }
      
        return {
          id: user._id, 
          name: user.name,
          email: user.email,
          image: user.image ?? "",
        };
      }
      
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Store the user ID in the token
      }
      return token;
    },
  
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string; // Assign the user ID from token
      }
      return session;
    },
  },
  
  
  

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

// ✅ Explicitly export authOptions
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
