'use server';

// ** actions
import { fetchAPI } from '@/lib/actions/api';

// ** configs
import { CONFIG_API_OUT_SIDE } from '@/configs/api';

export async function getChapter(id: string) {
    return fetchAPI<any>(`${CONFIG_API_OUT_SIDE.CHAPTER.INDEX}/${id}`, {}, 3600);
}