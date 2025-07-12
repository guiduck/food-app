import { NextRequest, NextResponse } from "next/server";
import { mockStoreDetails } from "../data";
import { isStoreOpen } from "@/services/stores";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const { slug } = await params;
    const storeData = mockStoreDetails[slug];

    if (!storeData) {
      return NextResponse.json(
        { message: "Loja não encontrada" },
        { status: 404 }
      );
    }

    const storeWithOpenStatus = {
      ...storeData,
      isOpen: isStoreOpen({ closingTime: storeData.closingTime } as any),
    };

    return NextResponse.json({
      store: storeWithOpenStatus,
    });
  } catch (error) {
    console.error("Store details API error:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
