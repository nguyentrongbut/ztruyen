'use client';

// ** React
import { useEffect, useRef, useState } from 'react';

// ** Next
import Image from 'next/image';

// ** Modules
import Settings from '@/modules/doc-truyen/Settings';

// ** Components
import Overlay from '@/components/common/Overlay';
import IconSettings from '@/components/icons/IconSettings';

// ** Hooks
import useTailwindBreakpoints from '@/hooks/useTailwindBreakpoints';
import getIdFromUrl from '@/utils/getIdFromUrl';
import { Button } from '@/components/ui/button';
import { getChapterName } from '@/utils/getChapterName';
import Link from 'next/link';

const ImgsChapter = ({
    chapters,
    chapterName,
    url,
    urlPath,
    listChapter,
    currentUrl,
    numberOfChapters,
}: {
    chapters: IChapterImg[];
    chapterName: string;
    url: string;
    urlPath: string;
    listChapter: IChapter[];
    currentUrl: string;
    numberOfChapters: number;
}) => {
    const totalImages = chapters?.length;

    const { isMd } = useTailwindBreakpoints();
    const [imgWidth, setImgWidth] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

    const indexCurrentChapter = listChapter.findIndex(
        (chapter) =>
            getIdFromUrl(chapter.chapter_api_data, '/') ===
            getIdFromUrl(currentUrl, '-')
    );

    // Next chapter
    const nextChapter = listChapter[indexCurrentChapter + 1];

    useEffect(() => {
        if (isMd) {
            setImgWidth(50);
        } else {
            setImgWidth(100);
        }
    }, [isMd]);

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMd) {
            e.preventDefault();
            setIsModalOpen(!isModalOpen);
        }
    };

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modal-scrollbar-hidden');
        } else {
            document.body.classList.remove('modal-scrollbar-hidden');
        }

        return () => {
            document.body.classList.remove('modal-scrollbar-hidden');
        };
    }, [isModalOpen]);

    return (
        <>
            <div
                className="flex flex-col items-center"
                onContextMenu={handleRightClick}
                onClick={handleOnClick}
            >
                {chapters && chapters.length > 0
                    ? chapters.map((item, index) => {
                          return (
                              <Image
                                  ref={(el) => {
                                      imgRefs.current[index] = el;
                                  }}
                                  key={index}
                                  src={`${url}/${urlPath}/${item?.image_file}`}
                                  alt={chapterName}
                                  width={925}
                                  height={1387}
                                  sizes="(max-width: 50px) 2vw, (max-width: 1920px) 925px)"
                                  quality="60"
                                  priority={index === 0}
                                  loading={index === 0 ? 'eager' : 'lazy'}
                                  className={`bg-secondary dark:bg-primary`}
                                  style={{ width: `${imgWidth}%` }}
                              ></Image>
                          );
                      })
                    : 'Không có ảnh nào ....'}
                {
                    <Overlay isModalOpen={isModalOpen}>
                        <Settings
                            imgWidth={imgWidth}
                            totalImages={totalImages}
                            setImgWidth={setImgWidth}
                            listChapter={listChapter}
                            currentUrl={currentUrl}
                            imgRefs={imgRefs}
                            currentImageIndex={currentImageIndex}
                            setCurrentImageIndex={setCurrentImageIndex}
                            indexCurrentChapter={indexCurrentChapter}
                        />
                    </Overlay>
                }

                <div className="hidden xl:flex fixed bottom-[18px] left-[38px] bg-[#fafafa] dark:bg-[#030303] py-2 px-3 rounded-[3px] border dark:border-[#3e3e3e] gap-[11px] items-center">
                    <div
                        className="dark:text-white/30 relative flex items-center justify-center text-xs"
                        title={`Ảnh ${currentImageIndex + 1}`}
                    >
                        <Image
                            className="rotate-90 filter brightness-0 dark:filter-none"
                            src="/page.png"
                            width={32}
                            height={32}
                            alt="currentpage"
                        ></Image>
                        <span className="absolute">
                            {currentImageIndex + 1}
                        </span>
                    </div>
                    <div className="dark:text-white/85 text-xs">
                        <div title={`${totalImages} ảnh`}>{totalImages}P</div>
                        <div>Chương {numberOfChapters}</div>
                    </div>
                </div>

                <div
                    className="fixed bottom-[24px] right-[65px] bg-[#fafafa] shadow dark:bg-[#030303] border dark:border-[#3e3e3e] hidden lg:flex gap-[11px] items-center rounded-full py-1.5 px-4 cursor-pointer"
                    onClick={() => setIsModalOpen((prevState) => !prevState)}
                >
                    {isModalOpen ? (
                        <>
                            <IconSettings className="size-6 text-primaryColor"></IconSettings>
                            <span className="hidden xl:block dark:text-white/85 text-xs">
                                Ẩn thanh công cụ
                            </span>
                        </>
                    ) : (
                        <>
                            <IconSettings className="size-6"></IconSettings>
                            <span className="hidden xl:block dark:text-white/85 text-xs">
                                Hiển thị thanh công cụ
                            </span>
                        </>
                    )}
                </div>
            </div>
            {nextChapter && (
                <div className="text-center py-10">
                    <Link
                        href={`/doc-truyen/${getChapterName(currentUrl)}-chuong-${nextChapter?.chapter_name}-${getIdFromUrl(nextChapter?.chapter_api_data, '/')}.html`}
                    >
                        <Button className="text-xs sm:text-sm">
                            Chương tiếp theo
                        </Button>
                    </Link>
                </div>
            )}
        </>
    );
};

export default ImgsChapter;
