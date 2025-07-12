import { APIResponse } from "@/lib/api";

const users: any[] = [];

export async function createUser(
  email: string,
  password: string,
  role: "store" | "customer"
): Promise<{
  success: boolean;
  user?: { id: number; email: string; role: string; createdAt: string };
  message?: string;
}> {
  if (!email || !password || !role) {
    return {
      success: false,
      message: "Email, senha e tipo de usuário são obrigatórios.",
    };
  }

  if (!["store", "customer"].includes(role)) {
    return {
      success: false,
      message: "Tipo de usuário inválido.",
    };
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return {
      success: false,
      message: "Usuário já existe com este email.",
    };
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

  return {
    success: true,
    user: userWithoutPassword,
  };
}

// For server actions - direct registration without HTTP requests
export async function registerUser(payload: {
  email: string;
  password: string;
  role: "store" | "customer";
}): Promise<APIResponse<{ user: any }>> {
  try {
    const registrationResult = await createUser(
      payload.email,
      payload.password,
      payload.role
    );

    if (!registrationResult.success) {
      return {
        data: null,
        error: true,
        errorUserMessage: registrationResult.message || "Erro no registro",
        status: registrationResult.message?.includes("já existe") ? 409 : 400,
      };
    }

    return {
      data: {
        user: registrationResult.user!,
      },
      error: false,
      errorUserMessage: "",
      status: 201,
    };
  } catch (error) {
    console.error("Registration service error:", error);
    return {
      data: null,
      error: true,
      errorUserMessage: "Erro interno do servidor",
      status: 500,
    };
  }
}
