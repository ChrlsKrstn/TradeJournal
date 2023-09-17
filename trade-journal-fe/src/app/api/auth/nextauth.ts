import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const backendURL = "https://localhost:7090/";
export const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const credentialDetails = {
          username: credentials?.username,
          password: credentials?.password,
        };

        const resp = await fetch(backendURL + "/User/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentialDetails),
        });
        const user = await resp.json();
        if (user.is_success) {
          console.log("nextauth daki user: " + user.is_success);

          return user;
        } else {
          console.log("check your credentials");
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);