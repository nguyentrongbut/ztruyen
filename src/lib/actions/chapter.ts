'use server';

// ** url
import { urlChapterOutSide } from '@/lib/actions/url';

// ** fetch wrapper
import { fetchAPI } from '@/lib/actions/api';

export async function getChapter(id: string) {
    return fetchAPI<any>(`${urlChapterOutSide}/${id}`, {}, 3600);
}