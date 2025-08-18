'use server'

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const url = `${process.env.NEXT_PUBLIC_API_URL_OUT_SIDE}`;

export async function getListHome() {
    try {
        const res = await fetch(`${url}/home`, {
            method: 'GET',
            cache: 'no-cache',
        })

        if (!res.ok) {
            throw new Error(`Failed to fetch list home: ${res.statusText}`);
        }

        const data = await res.json();

        return data?.data?.items;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function getListPublishing() {
    try {
        const res = await fetch(`${url}/danh-sach/dang-phat-hanh?sort_field=updatedAt`, {
            method: 'GET',
            cache: 'no-cache',
        })

        if (!res.ok) {
            throw new Error(`Failed to fetch list publishing: ${res.statusText}`);
        }

        const data = await res.json();

        return data?.data?.items;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function getListComplete() {
    try {
        const res = await fetch(`${url}/danh-sach/hoan-thanh?sort_field=updatedAt`, {
            method: 'GET',
            cache: 'no-cache',
        })

        if (!res.ok) {
            throw new Error(`Failed to fetch list complete: ${res.statusText}`);
        }

        const data = await res.json();

        return data?.data?.items;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function getListComingSoon() {
    try {
        const res = await fetch(`${url}/danh-sach/sap-ra-mat?sort_field=updatedAt`, {
            method: 'GET',
            cache: 'no-cache',
        })

        if (!res.ok) {
            throw new Error(`Failed to fetch list coming soon: ${res.statusText}`);
        }

        const data = await res.json();

        return data?.data?.items;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function getListNew() {
    try {
        const res = await fetch(`${url}/danh-sach/truyen-moi?sort_field=updatedAt`, {
            method: 'GET',
            cache: 'no-cache',
        })

        if (!res.ok) {
            throw new Error(`Failed to fetch list new: ${res.statusText}`);
        }

        const data = await res.json();

        return data?.data?.items;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export async function getListGenre() {
    try {
        const res = await fetch(`${url}/the-loai`, {
            method: 'GET',
            cache: 'no-cache',
        })

        if (!res.ok) {
            throw new Error(`Failed to fetch list genre: ${res.statusText}`);
        }

        const data = await res.json();

        return data?.data?.items;
    } catch (err) {
        console.log(err);
        return null;
    }
}