'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import IconPrev from '@/components/icons/IconPrev';
import IconNext from '@/components/icons/IconNext';
import { useRef } from 'react';
import chunkArray from '@/components/utils/chunkArray';

const GridCarousel = ({ data }: { data: IComic[] }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    if (!data || data.length === 0) {
        return <p>No comics available</p>;
    }

    const groupedData = chunkArray(data, 8);

    return (
        <div className="bg-black relative py-2">
            <Swiper
                slidesPerView={1.5}
                pagination={{ clickable: true }}
                spaceBetween={6}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Autoplay, Pagination]}
            >
                {groupedData.map((group, slideIndex) => (
                    <SwiperSlide key={slideIndex}>
                        <div>
                            <div className="grid grid-cols-7 grid-rows-6 gap-1.5">
                                {group.map((item, index) => {
                                    const gridPositions = [
                                        { className: 'col-span-2 row-span-6' },
                                        { className: 'row-span-3 col-start-3' },
                                        {
                                            className:
                                                'row-span-3 col-start-3 row-start-4',
                                        },
                                        {
                                            className:
                                                'row-span-3 col-start-6 row-start-1',
                                        },
                                        {
                                            className:
                                                'row-span-3 col-start-6 row-start-4',
                                        },
                                        {
                                            className:
                                                'col-span-2 row-span-6 col-start-4 row-start-1',
                                        },
                                        {
                                            className:
                                                'row-span-3 col-start-7 row-start-1',
                                        },
                                        {
                                            className:
                                                'row-span-3 col-start-7 row-start-4',
                                        },
                                    ];

                                    const position = gridPositions[index];
                                    return (
                                        <div
                                            key={index}
                                            className={`${position?.className} relative`}
                                        >
                                            <Link
                                                href={`/truyen-tranh/${item.slug}`}
                                            >
                                                <Image
                                                    src={`https://img.otruyenapi.com/uploads/comics/${item.thumb_url}`}
                                                    width={180}
                                                    height={240}
                                                    alt={item.name}
                                                    title={item.name}
                                                    sizes="(max-width: 50px) 2vw, (max-width: 1920px) 180px"
                                                    quality={60}
                                                    priority={index <= 0}
                                                    className="aspect-[3/4] bg-secondary dark:bg-primary rounded-[2px] w-full h-full object-cover"
                                                />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className="absolute left-0 top-0 h-full w-[12.5%] z-10"
                style={{
                    backgroundImage:
                        'linear-gradient(90deg, rgba(0, 0, 0, .8), rgba(43, 43, 43, 0))',
                }}
            ></div>
            <div
                className="absolute right-0 top-0 h-full w-[12.5%] z-10 transform scale-x-[-1]"
                style={{
                    backgroundImage:
                        'linear-gradient(90deg, rgba(0, 0, 0, .8), rgba(43, 43, 43, 0))',
                }}
            ></div>
            <div
                className="absolute w-8 h-20 left-[100px] top-1/2 z-20 -translate-y-1/2 bg-black/50 cursor-pointer flex items-center justify-center"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <IconPrev className="text-white/60"></IconPrev>
            </div>
            <div
                className="absolute w-8 h-20 right-[100px] top-1/2 z-20 -translate-y-1/2 bg-black/50 cursor-pointer flex items-center justify-center"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <IconNext className="text-white/60"></IconNext>
            </div>
        </div>
    );
};

export default GridCarousel;
