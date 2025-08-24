import axios from 'axios';
import Link from 'next/link';
import DynamicPageStatus from '@/components/common/DynamicPageStatus';
import removeExtension from '@/components/utils/removeExtension';
import { Suspense } from 'react';
import DynamicPageStatusSkeleton from '@/components/skeleton/DynamicPageStatusSkeleton';

export async function generateMetadata({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const slug = removeExtension((await params).slug, '.html');

    const pageQuery =
        parseInt(((await searchParams).page as string) || '1') || 1;

    const res = await axios.get(
        `https://otruyenapi.com/v1/api/the-loai/${slug}`
    );
    const genreName: string = res?.data?.data.titlePage || 'Tất cả';

    return {
        title: `${genreName === 'Tất cả' ? 'Tất cả thể loại' : `Thể loại - Truyện ${genreName}`} - Ztruyện`,
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
    const slug = removeExtension((await params).slug, '.html');

    const pageQuery =
        parseInt(((await searchParams).page as string) || '1') || 1;
    const response = await axios.get(`https://otruyenapi.com/v1/api/the-loai`);
    const data: IGenres[] = response?.data?.data?.items;

    return (
        <>
            <nav className="wrapper flex gap-3.5 justify-center container py-6 ">
                <p className="flex-shrink-0 text-[15px] dark:text-[#ffffffbd] text-[#00000057]">
                    Thể loại
                </p>
                <ul className="flex gap-3.5 flex-wrap text-[15px]">
                    {data.map((item, index) => (
                        <li key={index}>
                            {item.slug === slug ? (
                                <h1>
                                    <Link
                                        href={`/the-loai/${item.slug}.html`}
                                        className={`active:bg-[#32aaff] active:text-primary rounded-[5px] px-[10px] py-1.5 ${item.slug === slug && 'text-[#32aaff]'}`}
                                    >
                                        {item.name}
                                    </Link>
                                </h1>
                            ) : (
                               <h2>
                                   <Link
                                       href={`/the-loai/${item.slug}.html`}
                                       className={`active:bg-[#32aaff] active:text-primary rounded-[5px] px-[10px] py-1.5 ${item.slug === slug && 'text-[#32aaff]'}`}
                                   >
                                       {item.name}
                                   </Link>
                               </h2>
                            )}
                        </li>
                    ))}
                    <li>
                        {'tat-ca' === slug ? (
                            <h1>
                                <Link
                                    href={`/the-loai/tat-ca.html`}
                                    className="active:bg-[#32aaff] active:text-primary rounded-[5px] px-[10px] py-1.5 text-[#32aaff]"
                                >
                                    Tất cả
                                </Link>
                            </h1>
                        ) : (
                           <h2>
                               <Link
                                   href={`/the-loai/tat-ca.html`}
                                   className="active:bg-[#32aaff] active:text-primary rounded-[5px] px-[10px] py-1.5"
                               >
                                   Tất cả
                               </Link>
                           </h2>
                        )}
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<DynamicPageStatusSkeleton/>}>
                <DynamicPageStatus
                    category={`the-loai/${slug}`}
                    pageQuery={pageQuery}
                ></DynamicPageStatus>
            </Suspense>
        </>
    );
};

export default Genre;
