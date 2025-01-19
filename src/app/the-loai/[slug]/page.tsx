import axios from 'axios';
import Link from 'next/link';
import DynamicPageStatus from '@/components/common/DynamicPageStatus';

export async function generateMetadata({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const slug = (await params).slug;
    const pageQuery =
        parseInt(((await searchParams).page as string) || '1') || 1;

    const res = await axios.get(
        `https://otruyenapi.com/v1/api/the-loai/${slug}`
    );
    const genreName: string = res?.data?.data.titlePage;

    return {
        title: `Thể loại - Truyện ${genreName} - Ztruyện`,
        description: `Khám phá những câu chuyện hấp dẫn thuộc thể loại ${genreName}. Đọc ngay các truyện hay nhất, mới nhất về ${genreName} chỉ có tại Ztruyện`,
        keywords: [
            `truyện tranh ${genreName}`,
            `truyện ${genreName}`,
            `Truyện ${genreName}`,
        ],
        alternates: {
            canonical: `/the-loai/${slug}?page=${pageQuery}`,
            languages: {
                vi: `/vi/the-loai/${slug}?page=${pageQuery}`,
            },
        },
        openGraph: {
            title: `Thể loại - Truyện ${genreName} - Ztruyện`,
            description: `Khám phá những câu chuyện hấp dẫn thuộc thể loại ${genreName}. Đọc ngay các truyện hay nhất, mới nhất về ${genreName} chỉ có tại Ztruyện`,
            images: [
                {
                    url: '/logo-all.png',
                    width: 400,
                    height: 200,
                },
            ],
        },
    };
}

const Genre = async ({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const slug = (await params).slug;
    const pageQuery =
        parseInt(((await searchParams).page as string) || '1') || 1;
    const response = await axios.get(`https://otruyenapi.com/v1/api/the-loai`);
    const data: IGenres[] = response?.data?.data?.items;

    return (
        <>
            <nav className="wrapper flex gap-3.5 justify-center container mt-6 mb-8">
                <p className="flex-shrink-0 text-[15px] dark:text-[#ffffffbd] text-[#00000057]">
                    Thể loại
                </p>
                <ul className="flex gap-3.5 flex-wrap text-[15px]">
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={`/the-loai/${item.slug}`}
                                className={`active:bg-[#32aaff] active:text-primary rounded-[5px] px-[10px] py-1.5 ${item.slug === slug && 'text-[#32aaff]'}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <DynamicPageStatus
                category={`the-loai/${slug}`}
                pageQuery={pageQuery}
            ></DynamicPageStatus>
        </>
    );
};

export default Genre;
