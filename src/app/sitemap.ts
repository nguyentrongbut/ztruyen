// import axios from 'axios';

export default async function sitemap() {
    const baseURL = 'https://ztruyen.io.vn';

    return [
        {
            url: baseURL,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/truyen-tranh/`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/doc-truyen/`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/the-loai/`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/danh-sach/`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/tim-kiem/`,
            lastModified: new Date(),
        },
    ];
}
