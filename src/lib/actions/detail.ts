'use server';

import { urlOutSide } from '@/lib/actions/url';
import { fetchAPI } from '@/lib/actions/api';

export async function getComicDetail(slug: string) {
    return fetchAPI<any>(`${urlOutSide}/truyen-tranh/${slug}`, {}, 60);
}

export async function getListNewSection() {
    return fetchAPI<any>(`${urlOutSide}/danh-sach/truyen-moi`, {}, 60);
}