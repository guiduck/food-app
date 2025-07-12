"use server";

import { cookies } from "next/headers";
import { LocationData } from "@/types/location";

export async function saveLocation(locationData: LocationData) {
  try {
    const cookieStore = await cookies();

    cookieStore.set("user_location", JSON.stringify(locationData), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      httpOnly: false,
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving location:", error);
    throw new Error("Erro ao salvar localização");
  }
}

export async function getLocationFromCookies(): Promise<LocationData | null> {
  try {
    const cookieStore = await cookies();
    const locationCookie = cookieStore.get("user_location");

    if (!locationCookie?.value) {
      return null;
    }

    return JSON.parse(locationCookie.value) as LocationData;
  } catch (error) {
    console.error("Error reading location cookie:", error);
    return null;
  }
}
