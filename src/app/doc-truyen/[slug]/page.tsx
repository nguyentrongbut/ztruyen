import axios from 'axios';
import getIdFromUrl from '@/components/utils/getIdFromUrl';
// import { dynamicBlurDataUrl } from '@/components/utils/dynamicBlurDataUrl';
import ImgsChapter from '@/app/doc-truyen/@Chapter/ImageChapter';
import { getChapterName } from '@/components/utils/getChapterName';
import removeExtension from '@/components/utils/removeExtension';
import Header from '@/components/common/Header';
import Link from 'next/link';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = removeExtension((await params).slug, '.html');

    const res = await axios.get(
        `https://sv1.otruyencdn.com/v1/api/chapter/${getIdFromUrl(slug, '-')}`
    );
    const chapter: IReader = res?.data?.data?.item;

    return {
        title: `${chapter?.comic_name} - Chap ${chapter?.chapter_name} Next Chap ${Number(chapter?.chapter_name) + 1}  Tiếng Việt`,
        description: `Đọc truyện ${chapter?.comic_name} chap ${chapter?.chapter_name} next chap ${Number(chapter?.chapter_name) + 1}  tiếng việt Mới nhất nhanh nhất tại ztruyen.io.vn`,
        keywords: [
            `${chapter?.comic_name} ${chapter?.chapter_name}`,
            `${chapter?.comic_name} chap ${chapter?.chapter_name}`,
            `đọc truyện tranh ${chapter?.comic_name} chap ${chapter?.chapter_name}`,
            `${chapter?.comic_name} chương ${chapter?.chapter_name}`,
            `${chapter?.comic_name} ${chapter?.chapter_name} tiếng việt`,
        ],
        alternates: {
            canonical: `/doc-truyen/${slug}`,
            languages: {
                vi: `/vi/doc-truyen/${slug}`,
            },
        },
        openGraph: {
            title: `${chapter?.comic_name} - Chap ${chapter?.chapter_name} Next Chap ${Number(chapter?.chapter_name) + 1}  Tiếng Việt`,
            description: `Đọc truyện ${chapter?.comic_name} chap ${chapter?.chapter_name} next chap ${Number(chapter?.chapter_name) + 1}  tiếng việt Mới nhất nhanh nhất tại ztruyen.io.vn`,
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

const ChapterPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = removeExtension((await params).slug, '.html');

    const res = await axios.get(
        `https://sv1.otruyencdn.com/v1/api/chapter/${getIdFromUrl(slug, '-')}`
    );
    const response = await axios.get(
        `https://otruyenapi.com/v1/api/truyen-tranh/${getChapterName(slug)}`
    );
    const chapter: IReader = res?.data?.data?.item;
    // const placeholders = await Promise.all(
    //     chapter?.chapter_image.map((url) =>
    //         dynamicBlurDataUrl(
    //             `${res?.data?.data?.domain_cdn}/${chapter?.chapter_path}/${url.image_file}`
    //         )
    //     )
    // );

    const listChapter: IChapter[] =
        response?.data?.data?.item?.chapters[0].server_data;
    return (
        <>
            <Header asChild={true}>
                <h1 className="text-sm">
                    <Link
                        href={`/truyen-tranh/${response?.data?.data?.item.slug}`}
                        className="hover:text-[#32aaff]"
                    >
                        {response?.data?.data?.item.name}
                    </Link>
                    - Chapter {chapter.chapter_name}
                </h1>
            </Header>
            <ImgsChapter
                numberOfChapters={res.data?.data?.item?.chapter_name}
                chapters={chapter?.chapter_image}
                url={res?.data?.data?.domain_cdn}
                urlPath={chapter?.chapter_path}
                chapterName={chapter?.comic_name}
                // placeholders={placeholders}
                listChapter={listChapter}
                currentUrl={slug}
            />
        </>
    );
};

export default ChapterPage;
