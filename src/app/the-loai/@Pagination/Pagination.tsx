import Link from 'next/link';
import Image from 'next/image';
// import { dynamicBlurDataUrl } from '@/components/utils/dynamicBlurDataUrl';
import axios from 'axios';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';

const Pagination = async ({
    slug,
    pageQuery,
}: {
    slug: string;
    pageQuery: number;
}) => {
    const res = await axios.get(
        `https://otruyenapi.com/v1/api/the-loai/${slug}?page=${pageQuery}`
    );
    const itemsPerPage = 24;

    const totalItems = res?.data?.data?.params?.pagination?.totalItems || 0;
    const dataGenre: IComic[] = res?.data?.data?.items;

    // const placeholders = await Promise.all(
    //     dataGenre.map((url) =>
    //         dynamicBlurDataUrl(
    //             `${res?.data?.data?.APP_DOMAIN_CDN_IMAGE}/uploads/comics/${url.thumb_url}`
    //         )
    //     )
    // );

    return (
        <section className="wrapper flex flex-wrap gap-4 mb-8">
            {dataGenre.map((item, index) => {
                return (
                    <figure key={index} className="flex flex-col">
                        <Link href={`/truyen-tranh/${item.slug}`}>
                            <Image
                                src={`${res?.data?.data?.APP_DOMAIN_CDN_IMAGE}/uploads/comics/${item.thumb_url}`}
                                width={180}
                                height={240}
                                alt={item.name}
                                sizes="(max-width: 50px) 2vw, max-width: 1920px) 180px)"
                                quality="60"
                                priority={index <= 0 ? true : false}
                                // placeholder="blur"
                                // blurDataURL={placeholders[index]}
                                className="aspect-[3/4] bg-secondary dark:bg-primary"
                            ></Image>
                        </Link>
                        <figcaption className="w-[180px] mt-1.5 text-sm line-clamp-1">
                            <Link href={`/truyen-tranh/${item.slug}`}>
                                {item.name}
                            </Link>
                        </figcaption>
                    </figure>
                );
            })}
            <PaginationWithLinks
                page={pageQuery}
                pageSize={itemsPerPage}
                totalCount={totalItems}
            />
        </section>
    );
};

export default Pagination;
