import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Senha deve ter pelo menos 6 caracteres" },
        { status: 400 }
      );
    }

    const validUsers = [
      { email: "store@food.com", password: "123456", role: "store" },
      { email: "user@food.com", password: "123456", role: "customer" },
    ];

    const user = validUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { message: "Credenciais inválidas" },
        { status: 401 }
      );
    }

    const access_token = `mock_access_token_${Date.now()}_${user.role}`;
    const refresh_token = `mock_refresh_token_${Date.now()}_${user.role}`;

    return NextResponse.json({
      access_token,
      refresh_token,
      user: {
        email: user.email,
        role: user.role,
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
