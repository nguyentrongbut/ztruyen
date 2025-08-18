import { Skeleton } from '@/components/ui/skeleton';

const ListComicSkeleton = ({ bgColor = false}: { bgColor?: boolean; }) => {
    return (
        <section  className={`${
            bgColor
                ? 'bg-[#f6f9ff] dark:bg-black'
                : 'bg-[#ffff] dark:bg-secondary'
        }`}>
            <div className="wrapper pb-[30px] sm:pb-[40px] md:pb-[50px] lg:pb-[65px]">
                <div className="pt-[20px] pb-[16px]
                sm:pt-[30px] sm:pb-[20px]
                md:pt-[40px] md:pb-[28px]
                lg:pt-[60px] lg:pb-[38px]"
                >
                    <Skeleton className="w-[270px] sm:w-[310px] md:w-[320px] lg:w-[323px] h-6" />
                </div>
                <div className="relative pb-[30px] sm:pb-[40px] md:pb-[50px] lg:pb-[65px]">
                    <div className="flex gap-1.5">
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-[calc(100%/3-6px)] sm:w-[calc(100%/3-6px)] md:w-[calc(100%/4-6px)] lg:w-[calc(100%/5-6px)]">

                                <figure className="flex flex-col gap-3">
                                    <Skeleton className="aspect-[3/4] w-full rounded-lg" />
                                    <Skeleton className="h-5 w-[80%] rounded-md" />
                                    <Skeleton className="h-3 w-[60%] rounded-md" />
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListComicSkeleton;
