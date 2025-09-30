// ** Shadcn ui
import { Skeleton } from '@/components/ui/skeleton';

// ** Skeleton
import ChapterListSkeleton from '@/skeleton/truyen-tranh/ChapterListSkeleton';

const DetailPageSkeleton = () => {
    return (
        <div className="bg-[#fafafa] pt-5 dark:bg-secondary pb-20">
            <section className="wrapper flex flex-col items-center sm:items-stretch sm:flex-row gap-7 p-5 bg-primary dark:bg-black/10 shadow-[0_1px_3px_0_rgba(106,115,133,.08)]">
                <Skeleton className="w-[240px] h-[320px] aspect-[3/4] dark:bg-primary rounded" />
                <div className="flex flex-col items-center sm:items-start justify-between w-full gap-3">
                    <Skeleton className="h-7 w-2/3" />
                    <div className="flex flex-wrap sm:flex-col mt-3.5 gap-4 sm:gap-1.5 w-full">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-1/4" />
                        <Skeleton className="h-4 w-1/3" />
                    </div>
                    <Skeleton className="h-16 w-full mt-2" />
                    <Skeleton className="h-10 w-full mt-6" />
                </div>
            </section>

            <section className="flex flex-col gap-4 lg:gap-0 lg:flex-row mt-3 wrapper justify-between">
                {/* Chapter List */}
                <section className="bg-primary p-5 lg:w-[70%] xl:w-[76%] h-min dark:bg-black/10">
                    <Skeleton className="h-6 w-40 mb-4" />
                    <ChapterListSkeleton />
                </section>

                {/* New Comic */}
                <section className="bg-primary dark:bg-black/10 p-5 lg:w-[29%] xl:w-[23%] h-min">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-4 w-16" />
                    </div>
                    <ul className="mt-5 flex flex-col gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <li key={i} className="flex gap-3">
                                <div className="w-[35%]">
                                    <Skeleton className="w-full aspect-[3/4]" />
                                </div>
                                <div className="w-[64%] flex flex-col justify-between gap-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-3 w-1/2" />
                                    <Skeleton className="h-3 w-2/3" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default DetailPageSkeleton;
