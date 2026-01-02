import CredentialsProvider from "next-auth/providers/credentials";
import { retriveUser } from "../actions/server/auth";
import GoogleProvider from "next-auth/providers/google";
import { usersCollection } from "./dbconnect";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // eamil: { label: "email", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        const user = await retriveUser(credentials);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
    // ...add more providers here
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    const isExist = await usersCollection.findOne({email:user.email, provider: account.provider})
    if(isExist){
        return true
    }
    const newUser ={
        provider: account.provider,
        name: user.name,
        email: user.email,
        image: user.image,
        role: "user"
    }
    const result =await usersCollection.insertOne(newUser)

    return result.acknowledged
  },
  async redirect({ url, baseUrl }) {
     if (url.startsWith("/")) return `${baseUrl}${url}`;
    // allow same-origin URLs
    if (new URL(url).origin === baseUrl) return url;
    return baseUrl
},
  async session({ session, token, user }) {
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    return token
  }
}
};
