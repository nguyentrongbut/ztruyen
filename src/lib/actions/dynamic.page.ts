'use server';

import { urlOutSide } from '@/lib/actions/url';
import { fetchAPI } from '@/lib/actions/api';

export async function getGenres() {
    return fetchAPI<any>(`${urlOutSide}/the-loai`, {}, 3600);
}

export async function getGenreDetail(slug: string) {
    return fetchAPI<any>(`${urlOutSide}/the-loai/${slug}`, {}, 3600);
}

export async function getListCategoryComic(category: string, pageQuery: number) {
    return fetchAPI<any>(`${urlOutSide}/${category}?page=${pageQuery}`, {}, 60);
}

export async function getListStatusComic(slug: string, pageQuery: number) {
    return fetchAPI<any>(`${urlOutSide}//danh-sach/${slug}?page=${pageQuery}`, {}, 60);
}

export async function getListNewComic(pageQuery: number) {
    return fetchAPI<any>(`${urlOutSide}/danh-sach/truyen-moi?page=${pageQuery}`, {}, 60);
}