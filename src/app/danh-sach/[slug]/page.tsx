import DynamicPageStatus from '@/components/common/DynamicPageStatus';
import axios from 'axios';
import removeExtension from '@/components/utils/removeExtension';
import DynamicPageStatusSkeleton from '@/components/skeleton/DynamicPageStatusSkeleton';
import { Suspense } from 'react';

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
        `https://otruyenapi.com/v1/api/danh-sach/${slug}?page=${pageQuery}`
    );

    const status = res?.data?.data?.titlePage;

    return {
        title: `${status} - ztruyen.io.vn`,
        description: `${status} tại ztruyen.io.vn`,
        keywords: [
            `Truyện tranh`,
            `manga`,
            `comic`,
            `manhua`,
            `manhua ${status}`,
        ],
        alternates: {
            canonical: `/danh-sach/${slug}?page=${pageQuery}`,
            languages: {
                vi: `/vi/danh-sach/${slug}?page=${pageQuery}`,
            },
        },
        openGraph: {
            title: `Truyện ${status} - ztruyen.io.vn`,
            description: `Truyện ${status} tại ztruyen.io.vn`,
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

const Status = async ({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const slug = removeExtension((await params).slug, '.html');

    const pageQuery =
        parseInt(((await searchParams).page as string) || '1') || 1;
    return (
       <div>
           <Suspense fallback={<DynamicPageStatusSkeleton title/>}>
               <DynamicPageStatus
                   category={`danh-sach/${slug}`}
                   pageQuery={pageQuery}
                   title={true}
               ></DynamicPageStatus>
           </Suspense>
       </div>
    );
};

export default Status;
