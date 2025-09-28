'use client';

// ** React
import { useState } from 'react';

// ** Next
import Link from 'next/link';

// ** Hooks
import useTailwindBreakpoints from '@/hooks/useTailwindBreakpoints';

// ** Components
import { Tag } from '@/components/common/Tag';
import ComicImage from '@/components/common/ComicImage';
import { Heading } from '@/components/typography/Heading';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

// ** Configs
import { CONFIG_API_OUT_SIDE } from '@/configs/api';

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
                backgroundImage: `url(${CONFIG_API_OUT_SIDE.IMAGE.INDEX}/${selectedComic?.thumb_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="z-10 w-full sm:w-[49%]">
                <figcaption
                    title={selectedComic?.name}
                >
                    {!isSm ? (
                        <Heading as='h3' title={selectedComic?.name as string} href={`truyen-tranh/${selectedComic?.slug}`}/>
                    ) : (
                        <Heading as='h3' link={false} title={selectedComic?.name as string} size='3xl'/>
                    )}
                </figcaption>

                <ul className="flex gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 items-center overflow-hidden scroll-sub mt-5">
                    {selectedComic?.category?.slice(0, 5).map((tag, index) => (
                        <Tag
                            key={`${index}-${tag?._id}-thumbnail`}
                            href={`/the-loai/${tag?.slug}.html`}
                            title={tag?.name}
                            theme="gray"
                        >
                            {tag?.name}
                        </Tag>
                    ))}
                </ul>
            </div>

            <div className="h-[1px] bg-gray-500 w-full sm:w-[49%] z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end z-10">
                <div className="grid grid-cols-5 sm:grid-cols-7 gap-3 mb-4 mt-4 sm:mt-0">
                    {listNewComic?.slice(0, numberOfItems).map((item) => (
                        <div
                            key={`${item?._id}-thumbnail`}
                            className={`aspect-[3/4] rounded-[5px] overflow-hidden cursor-pointer transform transition-all ease-in-out duration-300 ${
                                selectedComic?._id === item?._id
                                    ? 'scale-[1.15] border border-white'
                                    : ''
                            }`}
                            onClick={() => handleImageClick(item)}
                        >
                            <ComicImage
                                src={`${CONFIG_API_OUT_SIDE.IMAGE.INDEX}/${item?.thumb_url}`}
                                alt={item?.name}
                                title={item?.name}
                                size="full"
                                imgSize="xs"
                            />
                        </div>
                    ))}
                </div>

                <Link
                    href={`truyen-tranh/${selectedComic?.slug}`}
                    className="hidden sm:block rounded-2xl overflow-hidden aspect-video absolute top-4  right-6 sm:-top-8 w-[45%]"
                >
                    <ComicImage
                        src={`${CONFIG_API_OUT_SIDE.IMAGE.INDEX}/${selectedComic?.thumb_url}`}
                        alt={selectedComic?.name || 'title name ztruyen'}
                        title={selectedComic?.name || 'title name ztruyen'}
                        size="full"
                        imgSize="3xl"
                    />
                    <Button
                        shape="pill"
                        variant="dark"
                        className="absolute right-6 bottom-4 hover:scale-105 transition ease-in-out"
                    >
                        Đọc ngay
                    </Button>
                    <button></button>
                </Link>
            </div>

            <div className="absolute inset-0 bg-[#1b2022f2] dark:bg-black/90 rounded-2xl"></div>
        </figure>
    );
};

export default InteractiveThumbnail;
