import { Skeleton } from '@/components/ui/skeleton';

const DynamicPageStatusSkeleton = ({ title = false }: { title?: boolean }) => {
    return (
        <section className="wrapper pt-6">
            {title && (
                <h1>
                    <p className="mb-6">
                        <Skeleton className="w-1/3 h-6" />
                    </p>
                </h1>
            )}

            <div className="grid grid-cols-3 sm:w-grid-cols-4 md:w-grid-cols-5 lg:grid-cols-6 gap-4 mb-8">
                {Array.from({ length: 24 }).map((_, index) => (
                    <figure key={index} className="flex flex-col">
                        <Skeleton className="aspect-[3/4] w-full rounded" />
                        <figcaption className="mt-1.5">
                            <Skeleton className="h-4 w-28" />
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default DynamicPageStatusSkeleton;
