export async function fetchAPI<T>(
    url: string,
    options: RequestInit = {},
    revalidate?: number
): Promise<T> {
    const res = await fetch(url, {
        ...options,
        ...(revalidate
            ? { next: { revalidate } }
            : { cache: "no-store" }),
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${url}, status: ${res.status}`);
    }

    return res.json();
}
