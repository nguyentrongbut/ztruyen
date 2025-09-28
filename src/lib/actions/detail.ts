'use server';

// ** actions
import { fetchAPI } from '@/lib/actions/api';

// ** configs
import { CONFIG_API_OUT_SIDE } from '@/configs/api';

export async function getComicDetail(slug: string) {
    return fetchAPI<any>(`${CONFIG_API_OUT_SIDE.DETAIL.INDEX}/${slug}`, {}, 60);
}

export async function getListNewSection() {
    return fetchAPI<any>(`${CONFIG_API_OUT_SIDE.STATUS.NEW}`, {}, 60);
}