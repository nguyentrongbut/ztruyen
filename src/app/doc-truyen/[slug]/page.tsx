// ** Next
import Link from 'next/link';

// ** Layout
import Header from '@/layouts/components/Header/Header';

// ** Modules
import ImgsChapter from '@/modules/doc-truyen/ImageChapter';
import ScrollSaver from '@/modules/doc-truyen/ScrollSaver';

// ** utils
import getIdFromUrl from '@/utils/getIdFromUrl';
import { getChapterName } from '@/utils/getChapterName';
import removeExtension from '@/utils/removeExtension';

// ** action service
import { getChapter } from '@/lib/actions/chapter';
import { getComicDetail } from '@/lib/actions/detail';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = removeExtension((await params).slug, '.html');

    const res = await getChapter(getIdFromUrl(slug, '-') as string);

    const chapter: IReader = res?.data?.item;

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
    // slug page
    const slug = removeExtension((await params).slug, '.html');

    const res = await getChapter(getIdFromUrl(slug, '-') as string);
    const response = await getComicDetail(getChapterName(slug));
    const chapter: IReader = res?.data?.item;
    // slug chapter
    const slugChapter = response?.data?.item?.slug
    const thumbImg = response?.data?.item?.thumb_url

    const listChapter: IChapter[] =
        response?.data?.item?.chapters[0].server_data;

    return (
        <>
            <Header asChild={true}>
                <h1 className="text-sm line-clamp-1 hidden md:block">
                    <Link
                        href={`/truyen-tranh/${response?.data?.item.slug}`}
                        className="hover:text-primaryColor"
                    >
                        {response?.data?.item.name} {' - '}
                    </Link>
                    Chương {chapter.chapter_name}
                </h1>
            </Header>
            <ImgsChapter
                numberOfChapters={res?.data?.item?.chapter_name}
                chapters={chapter?.chapter_image}
                url={res?.data?.domain_cdn}
                urlPath={chapter?.chapter_path}
                chapterName={chapter?.comic_name}
                listChapter={listChapter}
                currentUrl={slug}
                slugChapter={slugChapter}
            />
            <ScrollSaver
                chapterName={chapter?.comic_name}
                numberOfChapters={res?.data?.item?.chapter_name}
                currentUrl={slug}
                image={thumbImg}
                slug={slugChapter}
            />
        </>
    );
};

export default ChapterPage;
