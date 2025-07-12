import { APIResponse } from "@/lib/api";

// Shared authentication logic
export async function authenticateUser(
  email: string,
  password: string
): Promise<{
  success: boolean;
  user?: { email: string; role: string };
  message?: string;
}> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!email || !password) {
    return {
      success: false,
      message: "Email e senha são obrigatórios",
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Senha deve ter pelo menos 6 caracteres",
    };
  }

  const validUsers = [
    { email: "store@food.com", password: "123456", role: "store" },
    { email: "user@food.com", password: "123456", role: "customer" },
  ];

  const user = validUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Credenciais inválidas",
    };
  }

  return {
    success: true,
    user: {
      email: user.email,
      role: user.role,
    },
  };
}

export async function loginUser(payload: {
  email: string;
  password: string;
}): Promise<APIResponse<{ access_token: string; refresh_token: string }>> {
  try {
    const authResult = await authenticateUser(payload.email, payload.password);

    if (!authResult.success) {
      return {
        data: null,
        error: true,
        errorUserMessage: authResult.message || "Erro de autenticação",
        status: 401,
      };
    }

    const access_token = `mock_access_token_${Date.now()}_${
      authResult.user!.role
    }`;
    const refresh_token = `mock_refresh_token_${Date.now()}_${
      authResult.user!.role
    }`;

    return {
      data: {
        access_token,
        refresh_token,
      },
      error: false,
      errorUserMessage: "",
      status: 200,
    };
  } catch (error) {
    console.error("Login service error:", error);
    return {
      data: null,
      error: true,
      errorUserMessage: "Erro interno do servidor",
      status: 500,
    };
  }
}
