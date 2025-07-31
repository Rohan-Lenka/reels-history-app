import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "123123",
      clientSecret: process.env.GOOGLE_SECRET || "321321",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "456456"
}