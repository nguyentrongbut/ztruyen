'use client';

// ** React
import { useEffect, useRef, useState } from 'react';

// ** Next
import Image from 'next/image';
import Link from 'next/link';

// ** Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

// ** Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// ** Components
import IconPrev from '@/components/icons/IconPrev';
import IconNext from '@/components/icons/IconNext';

// ** utils
import formatRelativeTime from '@/utils/formatRelativeTime';

// ** next progress bar
import { useRouter } from 'next-nprogress-bar';
import ListComicSkeleton from '@/skeleton/home/ListComicSkeleton';

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
                    <h1>
                        <p
                            className="pt-[20px] pb-[16px] text-[22px] font-medium
                sm:pt-[30px] sm:pb-[20px] sm:text-[26px]
                md:pt-[40px] md:pb-[28px] md:text-[30px]
                lg:pt-[60px] lg:pb-[38px] lg:text-[34px]"
                        >
                            <Link href={href}>{title}</Link>
                        </p>
                    </h1>
                ) : (
                    <h2>
                        <p
                            className="pt-[20px] pb-[16px] text-[22px] font-medium
                sm:pt-[30px] sm:pb-[20px] sm:text-[26px]
                md:pt-[40px] md:pb-[28px] md:text-[30px]
                lg:pt-[60px] lg:pb-[38px] lg:text-[34px]"
                        >
                            <Link href={href}>{title}</Link>
                        </p>
                    </h2>
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
                                        <Image
                                            src={`https://img.otruyenapi.com/uploads/comics/${item.thumb_url}`}
                                            width={219}
                                            height={288}
                                            alt={item.name}
                                            sizes="(max-width: 50px) 2vw, (max-width: 1920px) 180px"
                                            quality={60}
                                            priority={i <= 0}
                                            className="aspect-[3/4] w-full bg-secondary dark:bg-primary rounded-[8px] object-cover"
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
                                                    <li
                                                        key={j}
                                                        className="rounded-sm text-white text-xs h-[20px] py-[1px] px-1.5 flex-shrink-0"
                                                        style={{
                                                            background:
                                                                'hsla(0, 0%, 100%, .4)',
                                                        }}
                                                        title={tag?.name}
                                                    >
                                                        <Link
                                                            href={`the-loai/${tag?.slug}.html`}
                                                        >
                                                            {tag?.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                    <figcaption className="sm:w-[180px]">
                                        <h3>
                                            <Link
                                                href={`/truyen-tranh/${item.slug}`}
                                                className="text-[14px] sm:text-base md:text-lg line-clamp-1 mt-1.5 sm:mt-2.5 sm:mb-1"
                                                title={item.name}
                                            >
                                                {item.name}
                                            </Link>
                                        </h3>
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
                    <div
                        className={`
              absolute size-[50px] sm:size-[60px] md:size-[64px] lg:size-[74px]
              -left-6 sm:-left-[36px] z-20 top-1/3 -translate-y-1/3
              bg-white opacity-80 cursor-pointer flex items-center justify-center rounded-full
              ${atBeginning ? 'hidden' : ''}
            `}
                        style={{ boxShadow: '0 0 19px 0 rgba(0, 0, 0, .251)' }}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <IconPrev className="text-secondary size-8" />
                    </div>

                    {/* Next button */}
                    <div
                        className={`
              absolute size-[50px] sm:size-[60px] md:size-[64px] lg:size-[74px]
              -right-4 sm:-right-[34px] z-20 top-1/3 -translate-y-1/3
              bg-white opacity-90 cursor-pointer flex items-center justify-center rounded-full
              ${atEnd ? 'hidden' : ''}
            `}
                        style={{ boxShadow: '0 0 19px 0 rgba(0, 0, 0, .251)' }}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <IconNext className="text-secondary size-8" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
