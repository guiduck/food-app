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

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_API_BASE_URL!;
  }

  return process.env.VERCEL_URL;
};

const BASE_URL = getBaseUrl();

export default async function API<T = any>(
  request: APIRequest
): Promise<APIResponse<T>> {
  const fullUrl = `${BASE_URL}/${request.url}`;

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
