'use client';

// ** React
import { useEffect, useRef, useState } from 'react';

// ** Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

// ** Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// ** Components
import { Tag } from '@/components/common/Tag';
import ComicImage from '@/components/common/ComicImage';
import { Heading } from '@/components/typography/Heading';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

// ** utils
import formatRelativeTime from '@/utils/formatRelativeTime';

// ** next progress bar
import { useRouter } from 'next-nprogress-bar';

// ** Skeleton
import ListComicSkeleton from '@/skeleton/home/ListComicSkeleton';

// ** Lucide Icon
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({
    data,
    title,
    bgColor = false,
    href = '/',
    titleSeo = false,
}: {
    data: IComic[];
    title: string;
    bgColor?: boolean;
    href: string;
    titleSeo?: boolean;
}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const router = useRouter();

    const [atBeginning, setAtBeginning] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    // component mounted ?
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <ListComicSkeleton />;
    }

    // limit 20
    const displayData = data.slice(0, 20);

    return (
        <section
            className={`${
                bgColor
                    ? 'bg-[#f6f9ff] dark:bg-black'
                    : 'bg-[#ffff] dark:bg-secondary'
            }`}
        >
            <div className="wrapper">
                {titleSeo ? (
                    <Heading
                        title={title}
                        href={href}
                        fontWeight="medium"
                        size="2xl"
                    />
                ) : (
                    <Heading
                        as="h2"
                        title={title}
                        href={href}
                        fontWeight="medium"
                        size="2xl"
                    />
                )}

                <div className="relative pb-[30px] sm:pb-[40px] md:pb-[50px] lg:pb-[65px]">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Autoplay, Pagination]}
                        onReachBeginning={() => setAtBeginning(true)}
                        onReachEnd={() => setAtEnd(true)}
                        onFromEdge={() => {
                            setAtBeginning(false);
                            setAtEnd(false);
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 6,
                            },
                            640: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 8,
                            },
                            768: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                                spaceBetween: 12,
                            },
                        }}
                    >
                        {displayData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <figure className="flex flex-col">
                                    <div
                                        className="relative overflow-hidden"
                                        title={item.name}
                                    >
                                        <ComicImage
                                            src={`https://img.otruyenapi.com/uploads/comics/${item.thumb_url}`}
                                            alt={item.name}
                                            priority={i <= 0}
                                            rounded="md"
                                            size="full"
                                            imgSize="xl"
                                        />
                                        <div
                                            className="absolute top-0 left-0 w-full h-full rounded-[8px] cursor-pointer"
                                            style={{
                                                background:
                                                    'linear-gradient(0deg,rgba(0,0,0,.8) -1.22%,transparent 35.07%)',
                                            }}
                                            onClick={() =>
                                                router.push(
                                                    `/truyen-tranh/${item.slug}`
                                                )
                                            }
                                        ></div>
                                        <ul className="absolute bottom-2.5 hidden sm:flex gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 items-center overflow-hidden w-full px-2 sm:px-[12px] scroll-sub">
                                            {item.category
                                                ?.slice(0, 2)
                                                .map((tag, j) => (
                                                    <Tag
                                                        key={j}
                                                        href={`the-loai/${tag?.slug}.html`}
                                                        title={tag?.name}
                                                    >
                                                        {tag?.name}
                                                    </Tag>
                                                ))}
                                        </ul>
                                    </div>
                                    <figcaption className="sm:w-[180px]">
                                        <Heading
                                            as="h3"
                                            title={item.name}
                                            href={`/truyen-tranh/${item.slug}`}
                                            className="mt-1.5 sm:mt-2.5 sm:mb-1"
                                            size="lgResponsive"
                                        />
                                        <div
                                            className="text-[10px] sm:text-xs md:text-sm line-clamp-1"
                                            title={`Cập nhật ${formatRelativeTime(item.updatedAt)}`}
                                        >
                                            Cập nhật
                                            <span className="text-orange-400 ml-1 sm:ml-2">
                                                {formatRelativeTime(
                                                    item.updatedAt
                                                )}
                                            </span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Prev button */}
                    <Button
                        shape="circle"
                        variant="lightOpacity"
                        className={`
              absolute 
              -left-6 sm:-left-[36px] z-20 top-1/3 -translate-y-1/3
              ${atBeginning ? 'hidden' : ''}
            `}
                        style={{ boxShadow: '0 0 19px 0 rgba(0, 0, 0, .251)' }}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft className="size-6 sm:size-8 text-black" />
                    </Button>

                    {/* Next button */}
                    <Button
                        shape="circle"
                        variant="lightOpacity"
                        className={`
              absolute
              -right-6 sm:-right-[34px] z-20 top-1/3 -translate-y-1/3
              ${atEnd ? 'hidden' : ''}
            `}
                        style={{ boxShadow: '0 0 19px 0 rgba(0, 0, 0, .251)' }}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ChevronRight className="size-6 sm:size-8 text-black" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
