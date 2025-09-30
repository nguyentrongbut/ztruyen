"use client";

// ** React
import { useState, useMemo, useEffect } from 'react';

// ** Hooks
import useTailwindBreakpoints from '@/hooks/useTailwindBreakpoints';

// ** Next
import Link from "next/link";

// ** Shadcn ui
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// ** Skeleton
import ChapterListSkeleton from '@/skeleton/truyen-tranh/ChapterListSkeleton';

// ** utils
import getIdFromUrl from "@/utils/getIdFromUrl";

interface Props {
    chapters: IChapter[];
    slug: string;
}

const RangeBtnPagination = ({ chapters, slug }: Props) => {

    const { isSm } = useTailwindBreakpoints();
    const [currentRange, setCurrentRange] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Sort chapters by decimal number (e.g. 10.1, 10.2, 11)
    const sortedChapters = useMemo(() => {
        return [...chapters].sort((a, b) => {
            const pa = a.chapter_name.split(".").map(Number);
            const pb = b.chapter_name.split(".").map(Number);
            for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
                const na = pa[i] ?? 0;
                const nb = pb[i] ?? 0;
                if (na !== nb) return na - nb;
            }
            return 0;
        });
    }, [chapters]);

    if (!mounted) return <ChapterListSkeleton/>;
    const rangeSize = isSm ? 50 : 20;

    // Find the maximum chapter number (used to calculate total ranges)
    const maxChapter = Math.max(...sortedChapters.map(ch => parseFloat(ch.chapter_name)));
    const totalRanges = Math.ceil(maxChapter / rangeSize);

    // Calculate current range
    const start = currentRange * rangeSize + 1;
    const end = Math.min((currentRange + 1) * rangeSize, maxChapter);

    // Filter chapters that belong to the current range [start, end]
    const currentChapters = sortedChapters.filter(ch => {
        const num = parseFloat(ch.chapter_name);
        return num >= start && num <= end;
    });

    return (
        <div className="flex flex-col gap-6">
            {/* Pagination buttons */}
            <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-3 mt-5 overflow-x-auto scroll-hidden">
                {Array.from({ length: totalRanges }).map((_, idx) => {
                    const rangeStart = idx * rangeSize + 1;
                    const rangeEnd = Math.min((idx + 1) * rangeSize, maxChapter);

                    return (
                        <Button
                            key={idx}
                            onClick={() => setCurrentRange(idx)}
                            className={`py-2 rounded-full text-xs transition min-w-max sm:min-w-0  ${
                                idx === currentRange
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-gray-100 text-gray-600 hover:text-black"
                            }`}
                        >
                            {rangeStart} - {rangeEnd}
                        </Button>
                    );
                })}
            </div>

            {/* Chapter list */}
            <ul className="flex flex-wrap gap-4 -mr-4">
                {currentChapters.map((item, index) => (
                    <li
                        key={index}
                        className="w-[calc(100%/2-16px)] sm:w-[calc(100%/3-16px)] md:w-[calc(100%/4-16px)]"
                    >
                        {item.chapter_title ? (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={`/doc-truyen/${slug}-chuong-${item?.chapter_name}-${getIdFromUrl(item?.chapter_api_data, '/')}.html`}
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full dark:text-primary dark:border-primary"
                                            >
                                                <span className="line-clamp-1">
                                                    {`Chương ${item.chapter_name} - ${item.chapter_title}`}
                                                </span>
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent className="w-[198px] text-center shadow-lg my-0.5 bg-primary dark:bg-secondary p-2">
                                        <p className="text-secondary/50 text-sm">
                                            {item.chapter_title}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ) : (
                            <Link
                                href={`/doc-truyen/${slug}-chuong-${item?.chapter_name}-${getIdFromUrl(item?.chapter_api_data, '/')}.html`}
                            >
                                <Button
                                    variant="outline"
                                    className="w-full dark:text-primary dark:border-primary"
                                >
                                    {`Chương ${item.chapter_name}`}
                                </Button>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RangeBtnPagination;
