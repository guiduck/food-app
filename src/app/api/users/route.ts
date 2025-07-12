import { NextResponse } from "next/server";

const users: any[] = [];

export async function POST(request: Request) {
  try {
    const { email, password, role } = await request.json();

    if (!email || !password || !role) {
      return NextResponse.json(
        { message: "Email, senha e tipo de usuário são obrigatórios." },
        { status: 400 }
      );
    }

    if (!["store", "customer"].includes(role)) {
      return NextResponse.json(
        { message: "Tipo de usuário inválido." },
        { status: 400 }
      );
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        { message: "Usuário já existe com este email." },
        { status: 409 }
      );
    }

    const newUser = {
      id: users.length + 1,
      email,
      password,
      role: role as "store" | "customer",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      {
        message: "Usuário criado com sucesso!",
        user: userWithoutPassword,
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
