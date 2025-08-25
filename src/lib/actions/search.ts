'use server';

import { urlOutSide } from '@/lib/actions/url';
import { fetchAPI } from '@/lib/actions/api';

export async function getSearchComic(keyword: string, pageQuery: number) {
    return fetchAPI<any>(`${urlOutSide}/tim-kiem?keyword=${keyword}&page=${pageQuery}`, {}, 60);
}