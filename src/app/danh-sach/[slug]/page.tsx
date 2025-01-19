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

    return {
        title: `Truyện ${slug} - ztruyen.io.vn`,
        description: `Truyện ${slug} tại ztruyen.io.vn`,
        keywords: [
            `Truyện tranh`,
            `manga`,
            `comic`,
            `manhua`,
            `manhua ${slug}`,
        ],
        alternates: {
            canonical: `/danh-sach/${slug}?page=${pageQuery}`,
            languages: {
                vi: `/vi/danh-sach/${slug}?page=${pageQuery}`,
            },
        },
        openGraph: {
            title: `Truyện ${slug} - ztruyen.io.vn`,
            description: `Truyện ${slug} tại ztruyen.io.vn`,
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
