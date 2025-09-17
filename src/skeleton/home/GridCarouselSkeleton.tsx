// ** shadcn ui
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

    const gridPositionsDesktop = [
        'row-span-2',
        '',
        'col-start-2 row-start-2',
        'row-span-2 col-start-3 row-start-1',
        'col-start-4 row-start-1',
        'col-start-4 row-start-2',
        'col-start-5 row-start-1',
        'col-start-5 row-start-2',
        'row-span-2 col-start-6 row-start-1',
        'col-start-7 row-start-1',
        'col-start-7 row-start-2',
        'row-span-2 col-start-8 row-start-1',
    ];

    return (
        <div className="bg-black relative py-2 md:h-[57vh]">
            <div className="grid md:hidden grid-cols-7 grid-rows-6 gap-0.5">
                {gridPositions.map((position, index) => (
                    <div
                        key={index}
                        className={`${position} relative`}
                    >
                        <Skeleton className="aspect-[3/4] size-full rounded-[2px]" />
                    </div>
                ))}
            </div>
            <div className="hidden md:grid grid-cols-8 grid-rows-2 gap-1.5 h-full">
                {gridPositionsDesktop.map((pos, i) => (
                    <div key={i} className={`${pos} relative h-full`}>
                        <Skeleton className="aspect-[3/4] size-full rounded-[2px]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridCarouselSkeleton;
