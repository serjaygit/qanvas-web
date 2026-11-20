import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  basePath: "/auth/api",

  fetchOptions: {
    credentials: "include",
  },
});

export const { signIn, signUp, signOut, deleteUser, useSession } = authClient;
