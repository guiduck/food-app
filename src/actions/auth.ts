"use server";

import { loginUser } from "@/services/auth/login";
import { registerUser } from "@/services/auth/register";
import { cookies } from "next/headers";

const validUsers = {
  store: { email: "store@food.com", password: "123456", role: "store" },
  customer: { email: "user@food.com", password: "123456", role: "customer" },
};

export async function registerAndLogin(data: {
  email: string;
  password: string;
  role: "store" | "customer";
}) {
  const registerRes = await registerUser(data);

  if (registerRes.error) {
    return registerRes;
  }

  const user = validUsers[data.role];

  const loginRes = await loginUser(user);

  if (loginRes.error || !loginRes.data?.access_token) return loginRes;

  const cookie = await cookies();
  cookie.set("access_token", loginRes.data.access_token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return { error: false, data: null, errorUserMessage: "", status: 200 };
}
