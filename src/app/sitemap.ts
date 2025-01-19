// import axios from 'axios';

export default async function sitemap() {
    const baseURL = 'https://ztruyen.io.vn';

    return [
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            // images: ['https://example.com/image.jpg'],
        },
        {
            url: `${baseURL}/truyen-tranh/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            // images: ['https://example.com/image.jpg'],
        },
        {
            url: `${baseURL}/doc-truyen/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            // images: ['https://example.com/image.jpg'],
        },
        {
            url: `${baseURL}/the-loai/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            // images: ['https://example.com/image.jpg'],
        },
        {
            url: `${baseURL}/danh-sach/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            // images: ['https://example.com/image.jpg'],
        },
        {
            url: `${baseURL}/tim-kiem/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            // images: ['https://example.com/image.jpg'],
        },
    ];
}
