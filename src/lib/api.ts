export type ApiOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

// Base URL can be configured later via env when integrating backend
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

export async function fetchJson<T = unknown>(path: string, options: ApiOptions = {}): Promise<T> {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const { body, headers, method = body ? "POST" : "GET", cache, next } = options;

  const requestBody = body == null ? undefined : (typeof body === "string" ? body : JSON.stringify(body));

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers ?? {}),
    },
    body: requestBody as BodyInit | undefined,
    cache,
    next,
  } as RequestInit);

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed: ${res.status} ${res.statusText} ${text}`.trim());
  }

  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return (await res.json()) as T;
  }
  return (await res.text()) as unknown as T;
}
