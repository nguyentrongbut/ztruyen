'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTailwindBreakpoints from '@/hooks/useTailwindBreakpoints';

const InteractiveThumbnail = ({ listNewComic }: { listNewComic: IComic[] }) => {
    // State to store the selected comic
    const [selectedComic, setSelectedComic] = useState<IComic | null>(
        listNewComic[0]
    );

    // Function to handle image click
    const handleImageClick = (comic: IComic) => {
        setSelectedComic(comic);
    };

    let numberOfItems = 7;

    const { isSm } = useTailwindBreakpoints();

    if (!isSm) {
        numberOfItems = 5;
    }

    return (
        <figure
            className="rounded-2xl bg-black p-6 flex flex-col justify-between text-white relative h-[280px] sm:h-[300px]"
            style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_URL_IMG}/${selectedComic?.thumb_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="z-10 w-full sm:w-[49%]">
                <figcaption className="lg:text-3xl line-clamp-1" title={selectedComic?.name}>
                    {!isSm ? (
                        <Link href={`truyen-tranh/${selectedComic?.slug}`}>
                            {selectedComic?.name}
                        </Link>
                    ) : (
                        selectedComic?.name
                    )}
                </figcaption>

                <ul className="flex gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 items-center overflow-hidden scroll-sub mt-5">
                    {selectedComic?.category?.slice(0, 5).map((tag) => (
                        <li
                            key={`${tag?.slug}-${tag?.name}`}
                            className="rounded-sm text-white text-xs h-[20px] py-[1px] px-1.5 flex-shrink-0"
                            style={{ background: 'hsla(0, 0%, 100%, .4)' }}
                            title={tag?.name}
                        >
                            <Link href={`/src/skeletons/the-loai/${tag?.slug}.html`}>
                                {tag?.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="h-[1px] bg-gray-500 w-full sm:w-[49%] z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end z-10">
                <div className="grid grid-cols-5 sm:grid-cols-7 gap-3 mb-4 mt-4 sm:mt-0">
                    {listNewComic?.slice(0, numberOfItems).map((item) => (
                        <div
                            key={item?._id}
                            className={`aspect-[3/4] rounded-[5px] overflow-hidden cursor-pointer transform transition-all ease-in-out duration-300 ${
                                selectedComic?._id === item?._id
                                    ? 'scale-[1.15] border border-white'
                                    : ''
                            }`}
                            onClick={() => handleImageClick(item)}
                        >
                            <Image
                                src={`${process.env.NEXT_PUBLIC_URL_IMG}/${item?.thumb_url}`}
                                alt={item?.name}
                                width={62}
                                height={83}
                                className="object-cover size-full"
                                title={item?.name}
                            />
                        </div>
                    ))}
                </div>

                <Link
                    href={`truyen-tranh/${selectedComic?.slug}`}
                    className="hidden sm:block rounded-2xl overflow-hidden aspect-video absolute top-4  right-6 sm:-top-8 w-[45%]"
                >
                    <Image
                        src={`${process.env.NEXT_PUBLIC_URL_IMG}/${selectedComic?.thumb_url}`}
                        alt={selectedComic?.name || 'title name ztruyen'}
                        width={522}
                        height={300}
                        className="object-cover size-full"
                        title={selectedComic?.name || 'title name ztruyen'}
                    />
                    <button className="bg-black/60 text-white absolute right-6 bottom-4 rounded-full px-4 py-2 text-xs hover:scale-105 transition ease-in-out">
                        Đọc ngay
                    </button>
                </Link>
            </div>

            <div className="absolute inset-0 bg-[#1b2022f2] dark:bg-black/90 rounded-2xl"></div>
        </figure>
    );
};

export default InteractiveThumbnail;
