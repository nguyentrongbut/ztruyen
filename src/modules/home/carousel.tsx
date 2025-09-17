'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import IconPrev from '@/components/icons/IconPrev';
import IconNext from '@/components/icons/IconNext';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import formatRelativeTime from '@/utils/formatRelativeTime';
import { useRouter } from 'next-nprogress-bar';
import chunkArray from '@/utils/chunkArray';
import getFirstNValues from '@/utils/getFirstNValues';
import useTailwindBreakpoints from '@/hooks/useTailwindBreakpoints';

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
    const [havePrev, setHavePrev] = useState(true);
    const [haveNext, setHaveNext] = useState(false);

    const { isSm, isMd, isLg } = useTailwindBreakpoints();

    let numberOfItems;
    let itemsPerSlide;

    if (!isSm) {
        // Mobile (<640px)
        numberOfItems = 12;
        itemsPerSlide = 3;
    } else if (isSm && !isMd) {
        // Tablet ([640px, 768px))
        numberOfItems = 12;
        itemsPerSlide = 3;
    } else if (isMd && !isLg) {
        // Tablet/Laptop ([768px, 1024px))
        numberOfItems = 16;
        itemsPerSlide = 4;
    } else {
        // Desktop (>=1024px)
        numberOfItems = 20;
        itemsPerSlide = 5;
    }

    const chunkData = getFirstNValues(data, numberOfItems);

    const groupData = chunkArray(chunkData, itemsPerSlide);
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
                        slidesPerView={1}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onReachBeginning={() => {
                            setHavePrev(true);
                        }}
                        onReachEnd={() => {
                            setHaveNext(true);
                        }}
                        onFromEdge={() => {
                            setHavePrev(false);
                            setHaveNext(false);
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        {groupData?.map((group, i) => (
                            <SwiperSlide key={i}>
                                <div className="grid grid-flow-col grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 ">
                                    {group.map((item, i) => {
                                        return (
                                            <figure
                                                className="flex flex-col"
                                                key={i}
                                            >
                                                <div className="relative overflow-hidden" title={item.name}>
                                                    <Image
                                                        src={`https://img.otruyenapi.com/uploads/comics/${item.thumb_url}`}
                                                        width={219}
                                                        height={288}
                                                        alt={item.name}
                                                        title={item.name}
                                                        sizes="(max-width: 50px) 2vw, (max-width: 1920px) 180px"
                                                        quality={60}
                                                        priority={i <= 0}
                                                        className="aspect-[3/4] w-full bg-secondary dark:bg-primary rounded-[8px] object-cover"
                                                    ></Image>
                                                    <div
                                                        className="absolute top-0 left-0 w-full rounded-[8px] h-full cursor-pointer"
                                                        style={{
                                                            background:
                                                                'linear-gradient(0deg,rgba(0,0,0,.8) -1.22%,transparent 35.07%)',
                                                        }}
                                                        onClick={() => {
                                                            router.push(
                                                                `/truyen-tranh/${item.slug}`
                                                            );
                                                        }}
                                                    ></div>
                                                    <ul className="absolute bottom-2.5 hidden sm:flex gap-1  sm:gap-2 md:gap-2.5 lg:gap-3 items-center overflow-hidden w-full px-2 sm:px-[12px] scroll-sub">
                                                        {item.category
                                                            ?.slice(0, 2)
                                                            .map((tag, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="rounded-sm text-white text-xs h-[20px] py-[1px] px-1.5 flex-shrink-0"
                                                                    style={{
                                                                        background:
                                                                            'hsla(0, 0%, 100%, .4)',
                                                                    }}
                                                                    title={
                                                                        tag?.name
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={`the-loai/${tag?.slug}.html`}
                                                                    >
                                                                        {
                                                                            tag?.name
                                                                        }
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
                                        );
                                    })}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div
                        className={`
                            absolute size-[50px] sm:size-[60px] md:size-[64px] lg:size-[74px] -left-6 sm:-left-[36px] z-20 top-1/3 -translate-y-1/3 bg-white  cursor-pointer flex items-center justify-center rounded-full
                            ${havePrev ? 'hidden' : ''}
                        `}
                        style={{ boxShadow: '0 0 19px 0 rgba(0, 0, 0, .251)' }}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <IconPrev className="text-secondary size-8"></IconPrev>
                    </div>
                    <div
                        className={`
                            absolute size-[50px] sm:size-[60px] md:size-[64px] lg:size-[74px] -right-4 sm:-right-[34px] z-20 top-1/3 -translate-y-1/3 bg-white  cursor-pointer flex items-center justify-center rounded-full
                            ${haveNext ? 'hidden' : ''}
                        `}
                        style={{ boxShadow: '0 0 19px 0 rgba(0, 0, 0, .251)' }}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <IconNext className="text-secondary size-8"></IconNext>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
