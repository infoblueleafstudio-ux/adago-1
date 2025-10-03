const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN as string;
const apiKey = process.env.MICROCMS_API_KEY as string;

export async function mcGet<T>(endpoint: string, query: Record<string, unknown> = {}): Promise<T> {
  if (!serviceDomain || !apiKey) {
    throw new Error("Missing MICROCMS env. Set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY in .env.local");
  }

  const params = new URLSearchParams(query as Record<string, string>).toString();
  const url = `https://${serviceDomain}.microcms.io/api/v1/${endpoint}${params ? `?${params}` : ""}`;

  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": apiKey },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`microCMS error ${res.status}`);
  }

  return res.json();
}


