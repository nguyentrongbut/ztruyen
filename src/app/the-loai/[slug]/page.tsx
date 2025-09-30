// ** React
import { Suspense } from 'react';

// ** Components
import DynamicPageStatus from '@/components/common/DynamicPageStatus';

// ** Modules
import ListGenre from '@/modules/the-loai/ListGenre';

// ** utils
import removeExtension from '@/utils/removeExtension';

// ** Skeleton
import DynamicPageStatusSkeleton from '@/skeleton/DynamicPageStatusSkeleton';

// ** action service
import { getGenreDetail, getGenres } from '@/lib/actions/dynamic.page';

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

    const res = await getGenreDetail(slug)

    const genreName: string = res?.data.titlePage || 'Tất cả';

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
    const response = await getGenres();
    const data: IGenres[] = response?.data?.items;

    return (
        <>
            <nav className="wrapper flex gap-3.5 justify-center container py-6 ">
                <p className="flex-shrink-0 text-[15px] dark:text-[#ffffffbd] text-[#00000057]">
                    Thể loại
                </p>
               <ListGenre data={data} slug={slug} />
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
