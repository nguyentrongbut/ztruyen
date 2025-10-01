'use client';

// ** React
import React, { useEffect, useRef, useState } from 'react';

// ** Hooks
import useTailwindBreakpoints from '@/hooks/useTailwindBreakpoints';

// ** Next
import Link from 'next/link';

// ** Shadcn ui
import { Slider } from '@/components/ui/slider';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// ** lucide icon
import {
    BookOpenText,
    ChevronLeft,
    ChevronRight,
    Expand,
    Menu,
    Minus,
    Plus,
    Shrink,
} from 'lucide-react';

// ** utils
import { getChapterName } from '@/utils/getChapterName';
import getIdFromUrl from '@/utils/getIdFromUrl';

const Settings = ({
    imgWidth = 50,
    totalImages,
    setImgWidth,
    listChapter,
    indexCurrentChapter,
    currentUrl,
    imgRefs,
    currentImageIndex,
    setCurrentImageIndex,
    isDropdownOpen,
    setIsDropdownOpen,
    slugChapter,
}: {
    imgWidth?: number;
    totalImages: number;
    setImgWidth: (width: number) => void;
    listChapter: IChapter[];
    indexCurrentChapter: number;
    currentUrl: string;
    imgRefs: React.RefObject<(HTMLImageElement | null)[]>;
    currentImageIndex: number;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
    isDropdownOpen: boolean;
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
    slugChapter: string
}) => {
    const { isMd } = useTailwindBreakpoints();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const listRef = useRef<HTMLUListElement | null>(null);

    const scrollToActive = () => {
        if (!listRef.current) return;
        const activeEl = listRef.current.querySelector('.active-chapter');
        if (activeEl) {
            (activeEl as HTMLElement).scrollIntoView({
                block: 'center',
            });
        }
    };

    // Next chapter
    const nextChapter = listChapter[indexCurrentChapter + 1];

    // Prev chapter
    const prevChapter = listChapter[indexCurrentChapter - 1];

    // Slider
    const scrollToImage = (index: number) => {
        if (imgRefs.current[index]) {
            imgRefs.current[index]?.scrollIntoView();
        }
    };

    const handleSliderChange = (e: { target: { value: number } }) => {
        const newIndex = e.target.value - 1;
        setCurrentImageIndex(newIndex);
        scrollToImage(newIndex);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (imgRefs.current && imgRefs.current.length > 0) {
                let closestIndex = 0;
                let minDistance = Number.MAX_VALUE;

                imgRefs.current.forEach((img, index) => {
                    if (img) {
                        const rect = img.getBoundingClientRect();
                        const distance = Math.abs(rect.top);
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestIndex = index;
                        }
                    }
                });

                setCurrentImageIndex(closestIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [imgRefs, setCurrentImageIndex]);

    // zoom out zoom in
    const handlePlusChange = () => {
        if (imgWidth < 100) {
            setImgWidth(imgWidth + 10);
        }
    };

    const handleMinusChange = () => {
        if (imgWidth > 10) {
            setImgWidth(imgWidth - 10);
        }
    };

    // Full Screen
    const toggleFullScreen = () => {
        if (!isFullScreen) {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                // Firefox
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                // Chrome, Safari ,Opera
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                // IE/Edge
                element.msRequestFullscreen();
            }
            setIsFullScreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                // Chrome, Safari, Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                // IE/Edge
                document.msExitFullscreen();
            }
            setIsFullScreen(false);
        }
    };

    // Handle fullscreen change event (when user presses ESC)
    useEffect(() => {
        const handleFullScreenChange = () => {
            if (
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
            ) {
                setIsFullScreen(true);
            } else {
                setIsFullScreen(false);
            }
        };

        document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.addEventListener(
            'webkitfullscreenchange',
            handleFullScreenChange
        );
        document.addEventListener(
            'mozfullscreenchange',
            handleFullScreenChange
        );
        document.addEventListener('MSFullscreenChange', handleFullScreenChange);

        // Cleanup the event listeners on unmount
        return () => {
            document.removeEventListener(
                'fullscreenchange',
                handleFullScreenChange
            );
            document.removeEventListener(
                'webkitfullscreenchange',
                handleFullScreenChange
            );
            document.removeEventListener(
                'mozfullscreenchange',
                handleFullScreenChange
            );
            document.removeEventListener(
                'MSFullscreenChange',
                handleFullScreenChange
            );
        };
    }, []);

    return (
        <div
            className={`w-full absolute bottom-0 flex flex-col items-center left-1/2 -translate-x-1/2 transition-opacity duration-500 ease-in-out`}
        >
            <div className="bg-secondary border-[#3e3e3e] rounded-[40px] text-white/90 flex items-center justify-center px-5 max-w-max pt-1 gap-1.5">
                {!isMd && (
                    <Link
                        href={`/truyen-tranh/${slugChapter}`}
                        className="flex flex-col items-center gap-1 p-2 cursor-pointer text-[#777]"
                    >
                        <BookOpenText className="size-5" />
                        <span className="text-white text-xs">
                            Chi tiết truyện
                        </span>
                    </Link>
                )}

                {/* Menu */}
                <DropdownMenu
                    open={isDropdownOpen}
                    onOpenChange={(open) => {
                        setIsDropdownOpen(open);
                        if (open) {
                            requestAnimationFrame(() => scrollToActive());
                        }
                    }}
                >
                    <DropdownMenuTrigger asChild>
                        <div className="flex flex-col items-center gap-1 p-2 cursor-pointer ">
                            <Menu className="size-5 text-[#777]" />
                            <span className="text-xs">Mục lục</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent asChild>
                        <div className="p-4 rounded-2xl w-[240px] sm:w-[280px] !bg-[#272727e6] border-none text-white mb-2">
                            <div className="text-sm sm:text-base mb-4 ml-3">{`Tất cả các chương (${listChapter.length})`}</div>
                            <ul
                                ref={listRef}
                                className="bg-[#121212] rounded-2xl overflow-auto max-h-[320px] sm:max-h-[400px] scroll-hidden"
                            >
                                {listChapter?.map((item, index) => {
                                    const activeChapter =
                                        getIdFromUrl(
                                            item?.chapter_api_data,
                                            '/'
                                        ) === getIdFromUrl(currentUrl, '-');
                                    return (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                setIsDropdownOpen(false)
                                            }
                                        >
                                            <Link
                                                href={`/doc-truyen/${getChapterName(currentUrl)}-chuong-${item.chapter_name}-${getIdFromUrl(item?.chapter_api_data, '/')}.html`}
                                                className={`px-5 sm:px-10 py-3 block text-xs sm:text-sm text-center hover:bg-black ${activeChapter ? 'active-chapter  text-primaryColor' : ''}`}
                                            >
                                                {`Chương ${item.chapter_name} ${item.chapter_title ? `- ${item.chapter_title}` : ''}`}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/*Full Screen*/}
                {isMd && (
                    <div
                        className="flex flex-col items-center gap-1 p-2 cursor-pointer"
                        onClick={toggleFullScreen}
                    >
                        {isFullScreen ? (
                            <>
                                <Shrink className="size-5" />
                                <span className="text-white text-xs">
                                    Thoát chế độ toàn màn hình
                                </span>
                            </>
                        ) : (
                            <>
                                <Expand className="text-[#777] size-5" />
                                <span className="text-xs">
                                    Xem toàn màn hình{' '}
                                </span>
                            </>
                        )}
                    </div>
                )}
            </div>

            {/*Slider*/}
            <div className="mt-5 p-3 md:p-0 md:my-5 flex flex-1 w-full md:w-[600px] md:min-w-[120px] bg-secondary border-[#3e3e3e] md:rounded-[40px] text-white items-center justify-between gap-4 relative">
                {prevChapter ? (
                    <Link
                        href={`/doc-truyen/${getChapterName(currentUrl)}-chuong-${prevChapter?.chapter_name}-${getIdFromUrl(prevChapter?.chapter_api_data, '/')}.html`}
                        className="p-2"
                    >
                        <ChevronLeft className="size-6" />
                    </Link>
                ) : (
                    <span className="p-2 opacity-50">
                        <ChevronLeft className="size-6" />
                    </span>
                )}
                <span className="text-[#777] text-sm flex-shrink-0">{`${currentImageIndex + 1} / ${totalImages}`}</span>
                <Slider
                    min={1}
                    max={totalImages}
                    step={1}
                    value={[currentImageIndex + 1]}
                    onValueChange={(value) =>
                        handleSliderChange({ target: { value: value[0] } })
                    }
                    className="cursor-pointer"
                />
                {nextChapter ? (
                    <Link
                        href={`/doc-truyen/${getChapterName(currentUrl)}-chuong-${nextChapter?.chapter_name}-${getIdFromUrl(nextChapter?.chapter_api_data, '/')}.html`}
                        className="p-2"
                    >
                        <ChevronRight className="size-6" />
                    </Link>
                ) : (
                    <span className="p-2 opacity-50">
                        <ChevronRight className="size-6" />
                    </span>
                )}
                <div className="absolute bottom-0 -left-[140px] hidden lg:block">
                    <div className="bg-secondary border-[#3e3e3e] rounded-[40px] flex text-white w-[120px] items-center justify-between">
                        <span
                            className="p-3 cursor-pointer"
                            onClick={handlePlusChange}
                        >
                            <Plus className="size-4" />
                        </span>
                        <span className="text-[13px] text-[#777]">{`${imgWidth}%`}</span>
                        <span
                            className="p-3 cursor-pointer"
                            onClick={handleMinusChange}
                        >
                            <Minus className="size-4" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
