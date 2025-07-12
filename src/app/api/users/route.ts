import { NextResponse } from "next/server";
import { createUser } from "@/services/auth/register";

const users: any[] = [];

export async function POST(request: Request) {
  try {
    const { email, password, role } = await request.json();

    const registrationResult = await createUser(email, password, role);

    if (!registrationResult.success) {
      const status = registrationResult.message?.includes("já existe")
        ? 409
        : 400;
      return NextResponse.json(
        { message: registrationResult.message },
        { status }
      );
    }

    return NextResponse.json(
      {
        message: "Usuário criado com sucesso!",
        user: registrationResult.user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);

    return NextResponse.json({
      users: usersWithoutPasswords,
      total: users.length,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
