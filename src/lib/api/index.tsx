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
  // Client-side: use relative URLs
  if (typeof window !== "undefined") {
    return "";
  }

  // Server-side: construct absolute URL
  // Priority order: VERCEL_URL -> NEXT_PUBLIC_SITE_URL -> localhost
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Development fallback
  return "http://localhost:3000";
}

async function tryFetchWithFallback(
  url: string,
  options: RequestInit
): Promise<Response> {
  try {
    // First attempt: standard fetch
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.warn("🔄 First fetch attempt failed, trying fallback...", {
      url,
      error: error instanceof Error ? error.message : "Unknown error",
    });

    // Fallback: try with localhost if we're on server side and have VERCEL_URL
    if (
      typeof window === "undefined" &&
      process.env.VERCEL_URL &&
      url.includes(process.env.VERCEL_URL)
    ) {
      const fallbackUrl = url.replace(
        `https://${process.env.VERCEL_URL}`,
        "http://localhost:3000"
      );
      console.log("🔄 Trying fallback URL:", fallbackUrl);

      try {
        const fallbackResponse = await fetch(fallbackUrl, options);
        return fallbackResponse;
      } catch (fallbackError) {
        console.error("❌ Fallback also failed:", {
          fallbackUrl,
          error:
            fallbackError instanceof Error
              ? fallbackError.message
              : "Unknown error",
        });
        throw error; // Throw original error
      }
    }

    throw error;
  }
}

export default async function API<T = any>(
  request: APIRequest
): Promise<APIResponse<T>> {
  const baseUrl = getBaseUrl();
  const fullUrl = `${baseUrl}/api/${request.url}`;

  // Always log in production, and in development for debugging
  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "development"
  ) {
    console.log("🔍 API Request Debug:", {
      timestamp: new Date().toISOString(),
      baseUrl,
      fullUrl,
      requestUrl: request.url,
      method: request.method,
      environment: process.env.NODE_ENV,
      vercelUrl: process.env.VERCEL_URL,
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
      isClient: typeof window !== "undefined",
      hasData: !!request.data,
      dataType: request.data ? typeof request.data : "none",
    });
  }

  const isFormData = request.data instanceof FormData;

  try {
    const response = await tryFetchWithFallback(fullUrl, {
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
      console.error("❌ API Response Error:", {
        timestamp: new Date().toISOString(),
        status: response.status,
        statusText: response.statusText,
        url: fullUrl,
        responseData,
        headers: Object.fromEntries(response.headers.entries()),
      });

      return {
        status: response.status,
        data: null,
        error: true,
        errorUserMessage: responseData?.message || "Erro desconhecido.",
        debug: responseData,
      };
    }

    if (process.env.NODE_ENV === "production") {
      console.log("✅ API Success:", {
        timestamp: new Date().toISOString(),
        status: response.status,
        url: fullUrl,
        dataReceived: !!responseData,
      });
    }

    return {
      status: response.status,
      data: responseData,
      error: false,
      errorUserMessage: "",
      headers: response.headers,
    };
  } catch (error) {
    console.error("💥 API Fetch Error:", {
      timestamp: new Date().toISOString(),
      url: fullUrl,
      error: error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : "Unknown",
      cause: error instanceof Error ? error.cause : undefined,
    });

    return {
      status: 500,
      data: null,
      error: true,
      errorUserMessage: "Erro no servidor.",
      headers: null,
      debug: {
        error: error instanceof Error ? error.message : "Unknown error",
        type: "FETCH_ERROR",
        url: fullUrl,
      },
    };
  }
}
