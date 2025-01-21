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
import formatRelativeTime from '@/components/utils/formatRelativeTime';
import { useRouter } from 'next-nprogress-bar';
import chunkArray from '@/components/utils/chunkArray';
import getFirstNValues from '@/components/utils/getFirstNValues';

const Carousel = ({
    data,
    title,
    bgColor = false,
    href = '/',
}: {
    data: IComic[];
    title: string;
    bgColor?: boolean;
    href: string;
}) => {
    const swiperRef = useRef<SwiperType | null>(null);

    const router = useRouter();
    const [havePrev, setHavePrev] = useState(true);
    const [haveNext, setHaveNext] = useState(false);

    const chunkData = getFirstNValues(data, 20);
    const groupData = chunkArray(chunkData, 5);
    return (
        <section
            className={`${
                bgColor
                    ? 'bg-[#f6f9ff] dark:bg-black'
                    : 'bg-[#ffff] dark:bg-secondary'
            }`}
        >
            <div className="wrapper">
                <Link href={href}>
                    <h2 className="pt-[60px] pb-[38px] text-[34px] font-medium">
                        {title}
                    </h2>
                </Link>
                <div className="relative pb-[65px]">
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
                                <div className="flex gap-1.5">
                                    {group.map((item, i) => {
                                        return (
                                            <figure
                                                className="flex flex-col"
                                                key={i}
                                            >
                                                <div className="relative overflow-hidden">
                                                    <Image
                                                        src={`https://img.otruyenapi.com/uploads/comics/${item.thumb_url}`}
                                                        width={219}
                                                        height={288}
                                                        alt={item.name}
                                                        title={item.name}
                                                        sizes="(max-width: 50px) 2vw, (max-width: 1920px) 180px"
                                                        quality={60}
                                                        priority={i <= 0}
                                                        className="aspect-[3/4] bg-secondary dark:bg-primary rounded-[8px] object-cover"
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
                                                    <ul className="absolute bottom-2.5 flex gap-2 items-center overflow-hidden w-full px-[12px] scroll-sub">
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
                                                <figcaption className="w-[180px]">
                                                    <Link
                                                        href={`/truyen-tranh/${item.slug}`}
                                                        className="text-lg line-clamp-1 mt-2.5 mb-1"
                                                        title={item.name}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <div
                                                        className="text-sm line-clamp-1"
                                                        title={`Cập nhật ${formatRelativeTime(item.updatedAt)}`}
                                                    >
                                                        Cập nhật
                                                        <span className="text-orange-400 ml-2">
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
                            absolute size-[74px] -left-[36px] z-20 top-[106px] bg-white  cursor-pointer flex items-center justify-center rounded-full
                            ${havePrev ? 'hidden' : ''}
                        `}
                        style={{ boxShadow: '0 0 19px 0 rgba(0, 0, 0, .251)' }}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <IconPrev className="text-secondary size-8"></IconPrev>
                    </div>
                    <div
                        className={`
                            absolute size-[74px] right-0 z-20 top-[106px] bg-white  cursor-pointer flex items-center justify-center rounded-full
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
