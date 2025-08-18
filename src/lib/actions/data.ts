'use server';

const url = `${process.env.NEXT_PUBLIC_API_URL_OUT_SIDE}`;

async function fetchData(endpoint: string) {
    try {
        const res = await fetch(`${url}${endpoint}`, {
            method: 'GET',
            cache: 'no-cache',
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
    return fetchData('/home');
}

export async function getListPublishing() {
    return fetchData('/danh-sach/dang-phat-hanh?sort_field=updatedAt');
}

export async function getListComplete() {
    return fetchData('/danh-sach/hoan-thanh?sort_field=updatedAt');
}

export async function getListComingSoon() {
    return fetchData('/danh-sach/sap-ra-mat?sort_field=updatedAt');
}

export async function getListNew() {
    return fetchData('/danh-sach/truyen-moi?sort_field=updatedAt');
}

export async function getListGenre() {
    return fetchData('/the-loai');
}
