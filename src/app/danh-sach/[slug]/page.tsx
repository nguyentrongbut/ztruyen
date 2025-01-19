import DynamicPageStatus from '@/components/common/DynamicPageStatus';
import convertSlugUrl from '@/components/utils/convertSlugUrl';

const Status = async ({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const slug = (await params).slug;
    console.log(slug);
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
