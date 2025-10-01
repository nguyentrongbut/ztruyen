'use client';

// ** React
import { useEffect, useRef, useState } from 'react';

// ** Next
import Image from 'next/image';
import Link from 'next/link';

// ** Modules
import Settings from '@/modules/doc-truyen/Settings';

// ** Components
import Overlay from '@/modules/doc-truyen/Overlay';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

// ** Hooks
import useTailwindBreakpoints from '@/hooks/useTailwindBreakpoints';

// ** utils
import getIdFromUrl from '@/utils/getIdFromUrl';
import { getChapterName } from '@/utils/getChapterName';

// ** Lucide Icon
import { SettingsIcon } from 'lucide-react';

const ImgsChapter = ({
    chapters,
    chapterName,
    url,
    urlPath,
    listChapter,
    currentUrl,
    numberOfChapters,
    slugChapter,
}: {
    chapters: IChapterImg[];
    chapterName: string;
    url: string;
    urlPath: string;
    listChapter: IChapter[];
    currentUrl: string;
    numberOfChapters: number;
    slugChapter: string;
}) => {
    const totalImages = chapters?.length;

    const { isLg } = useTailwindBreakpoints();
    const [imgWidth, setImgWidth] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showGuide, setShowGuide] = useState(false);

    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

    const indexCurrentChapter = listChapter.findIndex(
        (chapter) =>
            getIdFromUrl(chapter.chapter_api_data, '/') ===
            getIdFromUrl(currentUrl, '-')
    );

    // Next chapter
    const nextChapter = listChapter[indexCurrentChapter + 1];

    useEffect(() => {
        const hasSeenGuide = localStorage.getItem('ZTC-hasSeenGuide');
        if (!hasSeenGuide) {
            setShowGuide(true);
            localStorage.setItem('ZTC-hasSeenGuide', 'true');
        }
    }, []);

    useEffect(() => {
        if (isLg) {
            setImgWidth(50);
        } else {
            setImgWidth(100);
        }
    }, [isLg]);

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isLg) {
            e.preventDefault();
            setIsModalOpen(!isModalOpen);
            setIsDropdownOpen(false);
        }
    };

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
        setIsDropdownOpen(false);
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
                                  className="bg-black dark:bg-white"
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
                            isDropdownOpen={isDropdownOpen}
                            setIsDropdownOpen={setIsDropdownOpen}
                            slugChapter={slugChapter}
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
                    className="fixed bottom-[24px] right-[65px] bg-[#fafafa] shadow dark:bg-[#030303] border dark:border-[#3e3e3e] hidden lg:flex gap-[11px] items-center rounded-full py-2 px-4 cursor-pointer"
                    onClick={() => setIsModalOpen((prevState) => !prevState)}
                >
                    {isModalOpen ? (
                        <>
                            <SettingsIcon className="size-5 text-primaryColor" />
                            <span className="hidden xl:block dark:text-white/85 text-xs">
                                Ẩn thanh công cụ
                            </span>
                        </>
                    ) : (
                        <>
                            <SettingsIcon className="size-5" />
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
                        <Button
                            className="text-xs sm:text-sm"
                            variant="primary"
                        >
                            📖 Chương tiếp theo, đi thôi~ (≧▽≦)
                        </Button>
                    </Link>
                </div>
            )}
            {showGuide && !isLg && chapters && (
                <div className="fixed top-1/4 left-1/2 -translate-x-1/2 pointer-events-none">
                    <div
                        className="z-50 bg-primaryColor text-white
                 text-xs sm:text-sm w-fit text-center
                 px-4 py-2 rounded-md shadow-lg
                 animate-fadeInOut"
                    >
                        Nhấp vào ảnh để hiển thị thanh công cụ nhé ~ (≧▽≦)
                    </div>
                </div>
            )}
        </>
    );
};

export default ImgsChapter;
