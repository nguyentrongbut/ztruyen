import axios from 'axios';
import Link from 'next/link';
import Pagination from '@/app/the-loai/@Pagination/Pagination';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const res = await axios.get(
        `https://otruyenapi.com/v1/api/the-loai/${slug}`
    );
    const genreName: string = res?.data?.data.titlePage;

    return {
        title: `Kho Truyện Tranh ${genreName} - Truyện Tranh Hay, Cập Nhật Liên Tục`,
        description: `Khám phá kho truyện tranh Trung Quốc thể loại ${genreName} với hình ảnh đẹp, cốt truyện hấp dẫn. Đọc truyện tranh miễn phí, cập nhật liên tục, chất lượng cao.`,
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
            <Pagination slug={slug} pageQuery={pageQuery}></Pagination>
        </>
    );
};

export default Genre;
