import Image from 'next/image';
import { Button } from '@/components/ui/button';
import IconTag from '@/components/icons/IconTag';
import 'dayjs/locale/vi';
import IconCalendar from '@/components/icons/IconCalendar';
import IconStatus from '@/components/icons/IconStatus';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import getIdFromUrl from '@/utils/getIdFromUrl';
import RangeBtnPagination from '@/modules/truyen-tranh/RangeBtnPagination';
import { getComicDetail, getListNewSection } from '@/lib/actions/detail';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const res = await getComicDetail(slug)

    const comicName: string = res?.data.seoOnPage.seoSchema.name;

    return {
        title: `${comicName} Tiếng Việt - Ztruyện | ztruyen.io.vn`,
        description: `Đọc truyện tranh ${comicName} tiếng việt. Mới nhất nhanh nhất tại ztruyen.io.vn`,
        keywords: [
            `${comicName}`,
            `${comicName} tiếng việt - Ztruyen | Ztruyen.io.vn`,
            `đọc truyện tranh ${comicName}`,
        ],
        alternates: {
            canonical: `/truyen-tranh/${slug}`,
            languages: {
                vi: `/vi/truyen-tranh/${slug}`,
            },
        },
        openGraph: {
            title: `${comicName} Tiếng Việt - Ztruyện | ztruyen.io.vn`,
            description: `Đọc truyện tranh ${comicName} tiếng việt. Mới nhất nhanh nhất tại ztruyen.io.vn`,
            images: [
                {
                    url: `${res?.data?.APP_DOMAIN_CDN_IMAGE}/uploads/comics/${res?.data?.item?.thumb_url}`,
                },
            ],
        },
    };
}

const DetailPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = (await params).slug;

    const [response, res] = await Promise.all([
        getComicDetail(slug),
        getListNewSection(),
    ]);

    const data: IDetail = response?.data?.item;

    const chapters: IChapter[] = data?.chapters[0]?.server_data;
    const lastestChapter = chapters?.slice(-1)[0]?.chapter_name;

    return (
        <div className="bg-[#fafafa] pt-5 dark:bg-secondary pb-20">
            <section className="wrapper flex flex-col items-center sm:items-stretch sm:flex-row gap-7 p-5 bg-primary dark:bg-black/10 shadow-[0_1px_3px_0_rgba(106,115,133,.08)]">
                <Image
                    src={`${response?.data?.APP_DOMAIN_CDN_IMAGE}/uploads/comics/${data?.thumb_url}`}
                    width={240}
                    height={320}
                    alt={data?.name}
                    sizes="(max-width: 50px) 2vw, max-width: 1920px) 240px)"
                    quality="60"
                    priority={true}
                    className="aspect-[3/4] bg-secondary dark:bg-primary"
                ></Image>
                <div className="flex flex-col items-center sm:items-start justify-between w-full">
                    <h1 className="font-semibold text-xl">{data?.name}</h1>
                    <div className="flex flex-wrap sm:flex-col mt-3.5 gap-4 sm:gap-1.5">
                        <div className="text-sm text-black/50 dark:text-white/50 flex gap-1 items-start sm:items-center">
                            <IconTag className="size-4"></IconTag>
                            <div className="flex gap-2 flex-wrap">
                                {data.category.map((item, index) => (
                                    <span key={index}>{item.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="text-sm text-black/50 dark:text-white/50 flex gap-1 items-center">
                            <IconStatus className="size-4"></IconStatus>
                            <span className="text-sm">{data?.status}</span>
                        </div>
                        <div className="text-sm text-black/50 dark:text-white/50 flex gap-1 items-start sm:items-center">
                            <IconCalendar className="size-4"></IconCalendar>
                            <span className="text-sm ">{`${chapters?.length > 0 ? `Đã cập nhật tới chương ${lastestChapter}` : 'Đang cập nhật'} `}</span>
                        </div>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.content,
                                    }}
                                    className="text-sm text-black/75 dark:text-white mt-2 sm:line-clamp-3"
                                ></div>
                            </TooltipTrigger>
                            <TooltipContent className="w-[900px] p-4 bg-primary dark:bg-secondary">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: data.content,
                                    }}
                                    className="text-secondary/50 text-sm w-full"
                                ></p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    {chapters?.length > 0 && (
                        <Button className="mt-[21px] w-full" asChild={true}>
                            <Link
                                href={`/doc-truyen/${data?.slug}-chuong-${chapters[0]?.chapter_name}-${getIdFromUrl(chapters[0]?.chapter_api_data, '/')}.html`}
                            >
                                Đọc chương {chapters[0]?.chapter_name}
                            </Link>
                        </Button>
                    )}
                </div>
            </section>

            <section className="flex flex-col gap-4 lg:gap-0 lg:flex-row mt-3 wrapper justify-between">
                <section className="bg-primary p-5 lg:w-[70%] xl:w-[76%] h-min dark:bg-black/10">
                    {chapters?.length > 0 ? (
                        <>
                            <h2 className="font-medium text-lg">
                                Danh sách chương
                            </h2>
                            <RangeBtnPagination chapters={chapters} slug={data?.slug} />
                        </>
                    ) : (
                        <p className="text-center m-6 text-[15px]">
                            Hiện tại truyện đang cập nhật, hãy quay lại sau nhé
                            !
                        </p>
                    )}
                </section>
                <section className="bg-primary dark:bg-black/10 p-5 lg:w-[29%] xl:w-[23%] h-min">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-lg">Truyện mới</h2>
                        <Link href="/danh-sach/truyen-moi" className="text-sm">
                            Xem thêm
                        </Link>
                    </div>
                    <ul className="mt-5">
                        {res?.data?.items
                            .slice(0, 6)
                            .map((item: IComic, index: number) => {
                                return (
                                    <Link
                                        href={`/truyen-tranh/${item.slug}`}
                                        key={index}
                                    >
                                        <figure className="flex mt-4 gap-3">
                                            <div className="lg:w-[35%]">
                                                <Image
                                                    src={`${res?.data?.APP_DOMAIN_CDN_IMAGE}/uploads/comics/${item.thumb_url}`}
                                                    width={100}
                                                    height={240}
                                                    alt={item.name}
                                                    sizes="(max-width: 50px) 2vw, max-width: 1920px) 100px)"
                                                    quality="60"
                                                    priority={
                                                        index <= 0
                                                            ? true
                                                            : false
                                                    }
                                                    className="aspect-[3/4] bg-secondary dark:bg-primary"
                                                ></Image>
                                            </div>
                                            <figcaption className="w-[64%] flex justify-between flex-col">
                                                <span
                                                    className="line-clamp-1"
                                                    title={item?.name}
                                                >
                                                    {item.name}
                                                </span>
                                                <div className="flex flex-col gap-8">
                                                    <div className="text-black/50 dark:text-white/50 flex gap-1 items-center">
                                                        <IconStatus className="size-3 flex-shrink-0"></IconStatus>
                                                        <span className="text-xs ">
                                                            {data.status}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-black/50 dark:text-white/50 flex gap-1 items-center">
                                                        <IconCalendar className="size-3 flex-shrink-0"></IconCalendar>
                                                        <span
                                                            className="text-sm line-clamp-1"
                                                            title={`${item.chaptersLatest !== null ? `Đã cập nhật tới chương ${item?.chaptersLatest[0]?.chapter_name}` : 'Đang cập nhật'}`}
                                                        >{`${item.chaptersLatest !== null ? `Đã cập nhật tới chương ${item?.chaptersLatest[0]?.chapter_name}` : 'Đang cập nhật'} `}</span>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                );
                            })}
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default DetailPage;
