import { NextRequest, NextResponse } from "next/server";
import { mockStores } from "./data";

export async function GET(_: NextRequest) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({
      stores: mockStores,
    });
  } catch (error) {
    console.error("Stores API error:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
