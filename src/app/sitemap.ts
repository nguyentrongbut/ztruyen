import axios from 'axios';

export default async function sitemap() {
    const baseURL = 'https://ztruyen.io.vn';
    const resGenres = await axios.get(`https://otruyenapi.com/v1/api/the-loai`);
    const resHome = await axios.get(
        `https://otruyenapi.com/v1/api/danh-sach/truyen-moi`
    );

    const dataGenres: IGenres[] = resGenres?.data?.data?.items;
    const dataHome: IComic[] = resHome?.data?.data?.items;
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
