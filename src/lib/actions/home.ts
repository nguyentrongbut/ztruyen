'use server';

// ** Configs
import { CONFIG_API_OUT_SIDE } from '@/configs/api';

async function fetchData(url: string, revalidate?: number) {
    try {
        const res = await fetch(url, {
            method: 'GET',
            ...(revalidate
                ? { next: { revalidate } }
                : { cache: 'no-store' }),
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${url}: ${res.statusText}`);
        }

        const data = await res.json();
        return data?.data?.items || [];
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function getListHome() {
    return fetchData(`${CONFIG_API_OUT_SIDE.HOME.INDEX}`, 60); // cache 60s
}

export async function getListPublishing() {
    return fetchData(`${CONFIG_API_OUT_SIDE.STATUS.PUBLISHING}?sort_field=updatedAt`, 60);
}

export async function getListComplete() {
    return fetchData(`${CONFIG_API_OUT_SIDE.STATUS.COMPLETE}?sort_field=updatedAt`, 60);
}

export async function getListComingSoon() {
    return fetchData(`${CONFIG_API_OUT_SIDE.STATUS.COMING_SOON}?sort_field=updatedAt`, 60);
}

export async function getListNew() {
    return fetchData(`${CONFIG_API_OUT_SIDE.STATUS.NEW}?sort_field=updatedAt`, 30);
}

export async function getListGenre() {
    return fetchData(`${CONFIG_API_OUT_SIDE.GENRE.INDEX}`, 3600);
}
