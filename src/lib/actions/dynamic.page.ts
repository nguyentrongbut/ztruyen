'use server';

// ** actions
import { fetchAPI } from '@/lib/actions/api';

// ** Configs
import { CONFIG_API_OUT_SIDE } from '@/configs/api';

export async function getGenres() {
    return fetchAPI<any>(`${CONFIG_API_OUT_SIDE.GENRE.INDEX}`, {}, 3600);
}

export async function getGenreDetail(slug: string) {
    return fetchAPI<any>(`${CONFIG_API_OUT_SIDE.GENRE.INDEX}/${slug}`, {}, 3600);
}

export async function getListCategoryComic(category: string, pageQuery: number) {
    return fetchAPI<any>(`${CONFIG_API_OUT_SIDE.INDEX}/${category}?page=${pageQuery}`, {}, 60);
}

export async function getListStatusComic(slug: string, pageQuery: number) {
    return fetchAPI<any>(`${CONFIG_API_OUT_SIDE.STATUS.INDEX}/${slug}?page=${pageQuery}`, {}, 60);
}

export async function getListNewComic(pageQuery: number) {
    return fetchAPI<any>(`${CONFIG_API_OUT_SIDE.STATUS.NEW}?page=${pageQuery}`, {}, 60);
}