import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { api } from "./axios";

export async function getSession() {
  const requestHeaders = await headers();

  try {
    const res = await api.get("/auth/api/get-session", {
      headers: {
        cookie: requestHeaders.get("cookie") ?? "",
      },
    });

    return res.data;
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return session;
}

export async function requireGuest() {
  const session = await getSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return session;
}
