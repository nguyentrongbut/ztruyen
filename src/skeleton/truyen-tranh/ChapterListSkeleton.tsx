import { Skeleton } from '@/components/ui/skeleton';

const ChapterListSkeleton = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Pagination buttons skeleton */}
            <div className="flex flex-wrap gap-3 mt-5">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Skeleton key={idx} className="h-8 w-20 rounded-full" />
                ))}
            </div>

            {/* Chapter list skeleton */}
            <ul className="flex flex-wrap gap-4 -mr-4">
                {Array.from({ length: 50 }).map((_, idx) => (
                    <li
                        key={idx}
                        className="w-[calc(100%/2-16px)] sm:w-[calc(100%/3-16px)] md:w-[calc(100%/4-16px)]"
                    >
                        <Skeleton className="h-10 w-full rounded-md" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChapterListSkeleton;
