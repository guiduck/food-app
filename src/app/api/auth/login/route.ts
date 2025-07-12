import { NextRequest, NextResponse } from "next/server";
import { authenticateUser } from "@/services/auth/login";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const authResult = await authenticateUser(email, password);

    if (!authResult.success) {
      return NextResponse.json(
        { message: authResult.message },
        { status: 401 }
      );
    }

    const access_token = `mock_access_token_${Date.now()}_${
      authResult.user!.role
    }`;
    const refresh_token = `mock_refresh_token_${Date.now()}_${
      authResult.user!.role
    }`;

    return NextResponse.json({
      access_token,
      refresh_token,
      user: {
        email: authResult.user!.email,
        role: authResult.user!.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
