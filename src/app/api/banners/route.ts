import { NextRequest, NextResponse } from "next/server";
import { Banner } from "@/types/store";

const mockBanners: Banner[] = [
  {
    id: 1,
    title: "Rango Barato no dia das crianças",
    image: "/images/banners/home.png",
    link: "/",
  },
];

export async function GET(_: NextRequest) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200));

    return NextResponse.json({
      banners: mockBanners,
    });
  } catch (error) {
    console.error("Banners API error:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
