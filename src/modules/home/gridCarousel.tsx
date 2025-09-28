'use client';

// ** Next
import Link from 'next/link';

// ** React
import { useEffect, useRef, useState } from 'react';

// ** Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

// ** Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// ** Components
import ComicImage from '@/components/common/ComicImage';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

// ** utils
import chunkArray from '@/utils/chunkArray';

// ** skeleton
import GridCarouselSkeleton from '@/skeleton/home/GridCarouselSkeleton';

// ** Lucide Icon
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GridCarousel = ({ data }: { data: IComic[] }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    // component mounted ?
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return  <GridCarouselSkeleton/>
    }

    const groupedData = chunkArray(data, 8);

    return (
        <div className="bg-black relative py-2 md:h-[57vh]">
            <Swiper
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 1.5 },
                }}
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
                className='md:h-full'
            >
                {groupedData.map((group, slideIndex) => (
                    <SwiperSlide key={slideIndex} className='md:h-full'>
                        <div className='md:size-full'>
                            <div
                                className="grid grid-cols-7 grid-rows-6 gap-0.5 sm:gap-1.5 md:h-full"
                                style={{
                                    willChange: 'auto',
                                    transform: 'translateZ(0)',
                                }}
                            >
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
                                            className={`${position?.className} relative md:h-full`}
                                        >
                                            <Link
                                                href={`/truyen-tranh/${item.slug}`}
                                                className='md:h-full block'
                                            >
                                                <ComicImage
                                                    src={`https://img.otruyenapi.com/uploads/comics/${item.thumb_url}`}
                                                    alt={item.name}
                                                    title={item.name}
                                                    priority={
                                                        slideIndex <= 1 &&
                                                        index <= 2
                                                    }
                                                    loading={
                                                        slideIndex <= 1
                                                            ? 'eager'
                                                            : 'lazy'
                                                    }
                                                    rounded='sm'
                                                    size='full'
                                                    imgSize='lg'
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
            <Button
                shape='verticalRectangle'
                variant='darkOpacity'
                className="absolute left-12 lg:left-[100px] top-1/2 z-20 -translate-y-1/2 hidden sm:flex"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <ChevronLeft className="text-white/60"/>
            </Button>
            <Button
                shape='verticalRectangle'
                variant='darkOpacity'
                className="absolute right-12 lg:right-[100px] top-1/2 z-20 -translate-y-1/2 hidden sm:flex"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ChevronRight className="text-white/60"/>
            </Button>
        </div>
    );
};

export default GridCarousel;
