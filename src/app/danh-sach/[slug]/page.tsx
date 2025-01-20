import DynamicPageStatus from '@/components/common/DynamicPageStatus';
import axios from 'axios';

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
    const slug = (await params).slug;

    const pageQuery =
        parseInt(((await searchParams).page as string) || '1') || 1;
    return (
        <DynamicPageStatus
            category={`danh-sach/${slug}`}
            pageQuery={pageQuery}
            title={true}
        ></DynamicPageStatus>
    );
};

export default Status;
