//  ** action services
import { getGenres } from '@/lib/actions/dynamic.page';
import { getListNew } from '@/lib/actions/home';

export default async function sitemap() {
    const baseURL = process.env.NEXT_PUBLIC_YOUR_WEBSITE;
    const resGenres = await getGenres();
    const dataGenres: IGenres[] = resGenres?.data?.items;
    const dataHome: IComic[] = await getListNew();
    const dataGenreUrls = dataGenres.map((genre) => ({
        url: `${baseURL}/the-loai/${genre.slug}.html`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const dataHomeUrls = dataHome.map((comic) => ({
        url: `${baseURL}/truyen-tranh/${comic.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));
    return [
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseURL}/truyen-tranh/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseURL}/doc-truyen/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseURL}/danh-sach/dang-phat-hanh`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseURL}/danh-sach/hoan-thanh`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseURL}/danh-sach/sap-ra-mat`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseURL}/tim-kiem`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${baseURL}/tat-ca.html`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...dataGenreUrls,
        ...dataHomeUrls,
    ];
}
