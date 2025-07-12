import API from "@/lib/api";

export async function registerUser(payload: {
  email: string;
  password: string;
  role: "store" | "customer";
}) {
  return await API({ url: "users", method: "POST", data: payload });
}
