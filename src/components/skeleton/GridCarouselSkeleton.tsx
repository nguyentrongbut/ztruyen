import { Skeleton } from '@/components/ui/skeleton';

const GridCarouselSkeleton = () => {
    const gridPositions = [
        'col-span-2 row-span-6',
        'row-span-3 col-start-3',
        'row-span-3 col-start-3 row-start-4',
        'row-span-3 col-start-6 row-start-1',
        'row-span-3 col-start-6 row-start-4',
        'col-span-2 row-span-6 col-start-4 row-start-1',
        'row-span-3 col-start-7 row-start-1',
        'row-span-3 col-start-7 row-start-4',
    ];

    return (
        <div className="bg-black relative py-2">
            <div className="grid grid-cols-7 grid-rows-6 gap-0.5 sm:gap-1.5">
                {gridPositions.map((position, index) => (
                    <div key={index} className={`${position} relative`}>
                        <Skeleton className="aspect-[3/4] w-full rounded-[2px]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridCarouselSkeleton;
