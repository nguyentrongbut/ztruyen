// ** Next
import Link from 'next/link';

// ** Shadcn ui
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';

// ** action service
import {
    getListCategoryComic,
    getListNewComic,
} from '@/lib/actions/dynamic.page';

// ** Components
import ComicImage from '@/components/common/ComicImage';
import { Heading } from '@/components/typography/Heading';

const DynamicPageStatus = async ({
    category,
    pageQuery,
    title = false,
}: {
    category: string;
    pageQuery: number;
    title?: boolean;
}) => {
    let res;
    if (category == 'the-loai/tat-ca') {
        res = await getListNewComic(pageQuery);
    } else {
        res = await getListCategoryComic(category, pageQuery);
    }

    const itemsPerPage = 24;

    const totalItems = res?.data?.params?.pagination?.totalItems || 0;
    const dataGenre: IComic[] = res?.data?.items;

    return (
        <section className="wrapper pt-6 pb-20">
            {title && (
                <Heading
                    link={false}
                    title={res?.data?.titlePage}
                    className="mb-6"
                    size="xl"
                    type="capitalize"
                />
            )}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-4 gap-2 md:gap-2.5 lg:gap-3 mb-8">
                {dataGenre.map((item, index) => {
                    return (
                        <figure
                            key={index}
                            title={item.name}
                            className="flex flex-col"
                        >
                            <Link href={`/truyen-tranh/${item.slug}`}>
                                <ComicImage
                                    src={`${res?.data?.APP_DOMAIN_CDN_IMAGE}/uploads/comics/${item.thumb_url}`}
                                    imgSize="lg"
                                    alt={item.name}
                                    priority={index <= 0 ? true : false}
                                />
                            </Link>
                            <figcaption
                                className="mt-1.5 text-center"
                                title={item.name}
                            >
                                <Heading
                                    as="h2"
                                    title={item.name}
                                    href={`/truyen-tranh/${item.slug}`}
                                    size="sm"
                                ></Heading>
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
            <PaginationWithLinks
                page={pageQuery}
                pageSize={itemsPerPage}
                totalCount={totalItems}
            />
        </section>
    );
};

export default DynamicPageStatus;
