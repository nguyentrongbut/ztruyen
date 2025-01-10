import axios from 'axios';
import getIdFromUrl from '@/components/utils/getIdFromUrl';
import { dynamicBlurDataUrl } from '@/components/utils/dynamicBlurDataUrl';
import ImgsChapter from '@/app/doc-truyen/@Chapter/ImageChapter';
import { getChapterName } from '@/components/utils/getChapterName';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const res = await axios.get(
        `https://sv1.otruyencdn.com/v1/api/chapter/${getIdFromUrl(slug, '-')}`
    );
    const chapter: IReader = res?.data?.data?.item;

    return {
        title: `Đọc truyện ${chapter?.comic_name} - Chương ${chapter?.chapter_name} Online, Mới Nhất`,
        description: `Đọc truyện ${chapter?.comic_name} chương ${chapter?.chapter_name} miễn phí với nội dung hấp dẫn, cập nhật nhanh nhất. Truyện được trình bày rõ ràng, dễ đọc, không quảng cáo.`,
    };
}

const ChapterPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = (await params).slug;

    const res = await axios.get(
        `https://sv1.otruyencdn.com/v1/api/chapter/${getIdFromUrl(slug, '-')}`
    );
    const response = await axios.get(
        `https://otruyenapi.com/v1/api/truyen-tranh/${getChapterName(slug)}`
    );
    const chapter: IReader = res?.data?.data?.item;
    const placeholders = await Promise.all(
        chapter?.chapter_image.map((url) =>
            dynamicBlurDataUrl(
                `${res?.data?.data?.domain_cdn}/${chapter?.chapter_path}/${url.image_file}`
            )
        )
    );

    const listChapter: IChapter[] =
        response?.data?.data?.item?.chapters[0].server_data;
    return (
        <ImgsChapter
            numberOfChapters={res.data?.data?.item?.chapter_name}
            chapters={chapter?.chapter_image}
            url={res?.data?.data?.domain_cdn}
            urlPath={chapter?.chapter_path}
            chapterName={chapter?.comic_name}
            placeholders={placeholders}
            listChapter={listChapter}
            currentUrl={slug}
        />
    );
};

export default ChapterPage;
