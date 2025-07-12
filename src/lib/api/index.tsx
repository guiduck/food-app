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

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  return "http://localhost:3000";
}

export default async function API<T = any>(
  request: APIRequest
): Promise<APIResponse<T>> {
  const baseUrl = getBaseUrl();
  const fullUrl = `${baseUrl}/api/${request.url}`;

  if (process.env.NODE_ENV === "production") {
    console.log("API Request Debug:", {
      baseUrl,
      fullUrl,
      vercelUrl: process.env.VERCEL_URL,
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
      isClient: typeof window !== "undefined",
      requestUrl: request.url,
      method: request.method,
    });
  }

  const isFormData = request.data instanceof FormData;

  try {
    const response = await fetch(fullUrl, {
      method: request.method,
      next: request.next,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...request.headers,
      },
      ...(request.method !== "GET" && request.data
        ? { body: isFormData ? request.data : JSON.stringify(request.data) }
        : {}),
    });

    const responseData = await response.json();

    if (!response.ok) {
      if (process.env.NODE_ENV === "production") {
        console.error("API Response Error:", {
          status: response.status,
          statusText: response.statusText,
          url: fullUrl,
          responseData,
        });
      }

      return {
        status: response.status,
        data: null,
        error: true,
        errorUserMessage: responseData?.message || "Erro desconhecido.",
        debug: responseData,
      };
    }

    return {
      status: response.status,
      data: responseData,
      error: false,
      errorUserMessage: "",
      headers: response.headers,
    };
  } catch (error) {
    if (process.env.NODE_ENV === "production") {
      console.error("API Fetch Error:", {
        url: fullUrl,
        error: error,
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      });
    }

    return {
      status: 500,
      data: null,
      error: true,
      errorUserMessage: "Erro no servidor.",
      headers: null,
      debug: error,
    };
  }
}
