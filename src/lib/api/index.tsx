export type APIRequest = {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  headers?: Record<string, string>;
  data?: any;
  next?: RequestInit["next"];
};

export interface APIResponse<T> {
  data: T | null;
  error: boolean;
  errorUserMessage: string;
  debug?: any;
  status: number;
  headers?: Headers | null;
}

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.NODE_ENV !== "production") {
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return "http://localhost:3000";
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    if (process.env.VERCEL_URL.includes(process.env.PRODUCTION_URL!)) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return `https://${process.env.PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export default async function API<T = any>(
  request: APIRequest
): Promise<APIResponse<T>> {
  const baseUrl = getBaseUrl();
  const fullUrl = `${baseUrl}/api/${request.url}`;

  const isFormData = request.data instanceof FormData;

  console.log(`📡 API Request: ${request.method} ${fullUrl}`);

  if (request.data && !isFormData) {
    console.log(`📤 Request data:`, request.data);
  }

  let cookieHeader = "";
  if (typeof window === "undefined") {
    try {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      cookieHeader = cookieStore.toString();
    } catch (error) {
      console.log(`🍪 Could not access server cookies:`, error);
    }
  }

  try {
    const response = await fetch(fullUrl, {
      method: request.method,
      next: request.next,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...(cookieHeader ? { Cookie: cookieHeader } : {}),
        ...request.headers,
      },
      ...(request.method !== "GET" && request.data
        ? { body: isFormData ? request.data : JSON.stringify(request.data) }
        : {}),
    });

    console.log(`📊 API Response status: ${response.status} for ${fullUrl}`);

    const responseData = await response.json();

    if (!response.ok) {
      console.error("❌ API Response Error:", {
        status: response.status,
        url: fullUrl,
        method: request.method,
        responseData,
      });

      return {
        data: null,
        error: true,
        errorUserMessage: responseData.message || "Erro desconhecido.",
        debug: responseData,
        status: response.status,
        headers: response.headers,
      };
    }

    console.log(`✅ API Response success: ${request.method} ${fullUrl}`);

    if (request.url.includes("tickets") && request.method === "GET") {
      console.log(`🎫 Ticket response data:`, responseData);
    }

    return {
      data: responseData,
      error: false,
      errorUserMessage: "",
      debug: responseData,
      status: response.status,
      headers: response.headers,
    };
  } catch (error) {
    console.error(`❌ API Request failed for ${fullUrl}:`, error);

    return {
      data: null,
      error: true,
      errorUserMessage: "Erro de conexão. Tente novamente.",
      debug: error,
      status: 500,
      headers: null,
    };
  }
}
