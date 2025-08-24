'use server';

import { urlOutSide } from '@/lib/actions/url';

async function fetchData(endpoint: string, revalidate?: number) {
    try {
        const res = await fetch(`${urlOutSide}${endpoint}`, {
            method: 'GET',
            ...(revalidate
                ? { next: { revalidate } }
                : { cache: 'no-store' }),
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${endpoint}: ${res.statusText}`);
        }

        const data = await res.json();
        return data?.data?.items || [];
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function getListHome() {
    return fetchData('/home', 60); // cache 60s
}

export async function getListPublishing() {
    return fetchData('/danh-sach/dang-phat-hanh?sort_field=updatedAt', 60);
}

export async function getListComplete() {
    return fetchData('/danh-sach/hoan-thanh?sort_field=updatedAt', 60);
}

export async function getListComingSoon() {
    return fetchData('/danh-sach/sap-ra-mat?sort_field=updatedAt', 60);
}

export async function getListNew() {
    return fetchData('/danh-sach/truyen-moi?sort_field=updatedAt', 30);
}

export async function getListGenre() {
    return fetchData('/the-loai', 3600);
}
