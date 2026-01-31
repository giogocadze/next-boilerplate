export type ApiError = {
  message: string;
  status: number;
  details?: unknown;
};

type FetcherOptions = RequestInit & {
  baseUrl?: string;
};

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? '';

export async function fetcher<T>(path: string, options: FetcherOptions = {}): Promise<T> {
  const { baseUrl = DEFAULT_BASE_URL, headers, ...rest } = options;

  const url = path.startsWith('http') ? path : `${baseUrl}${path}`;

  const res = await fetch(url, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(headers ?? {}),
    },
  });

  const contentType = res.headers.get('content-type') ?? '';
  const isJson = contentType.includes('application/json');

  const data = isJson ? await res.json().catch(() => null) : await res.text().catch(() => null);

  if (!res.ok) {
    const err: ApiError = {
      message:
        (data && typeof data === 'object' && 'message' in data && typeof data.message === 'string'
          ? data.message
          : res.statusText) || 'Request failed',
      status: res.status,
      details: data,
    };

    throw err;
  }

  return data as T;
}
