import { Skeleton } from '@/components/ui/skeleton';

const SearchPageSkeleton = () => {
    return (
        <section className="wrapper">
            <div className="py-8">
                <Skeleton className="w-60 h-5"/>
            </div>
            <div className="flex flex-wrap gap-4 mb-24">
                {Array.from({ length: 24 }).map((_, index) => (
                    <figure
                        key={index}
                        className="flex gap-4 lg:w-[calc(100%/3-16px)]"
                    >
                        {/* Skeleton img */}
                        <Skeleton className="w-[135px] h-[180px] rounded-md" />

                        {/* Skeleton content */}
                        <figcaption className="w-[180px] mt-1.5 text-lg flex flex-col justify-between">
                            <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />

                            <div className="space-y-2 text-xs">
                                <div className="flex gap-2">
                                    <Skeleton className="h-3 w-16 rounded-md" />
                                    <Skeleton className="h-3 w-12 rounded-md" />
                                </div>
                                <div className="flex gap-2">
                                    <Skeleton className="h-3 w-20 rounded-md" />
                                    <Skeleton className="h-3 w-14 rounded-md" />
                                </div>
                                <Skeleton className="h-3 w-10 rounded-md" />
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}

export default SearchPageSkeleton