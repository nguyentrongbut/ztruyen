import { Skeleton } from '@/components/ui/skeleton';

const NewComicSkeleton = () => {
    return (
        <section className="bg-[#ffff] dark:bg-secondary">
            <div className="wrapper pb-[30px] sm:pb-[40px] md:pb-[50px] lg:pb-[65px]">
                <h1>
                    <div
                        className="pt-[20px] pb-[16px] text-[22px] font-medium
                sm:pt-[30px] sm:pb-[20px] sm:text-[26px]
                md:pt-[40px] md:pb-[28px] md:text-[30px]
                lg:pt-[60px] lg:pb-[38px] lg:text-[34px]"
                    >
                        <Skeleton className="w-[270px] sm:w-[310px] md:w-[320px] lg:w-[323px] h-6"/>
                    </div>
                </h1>
                <figure
                    className="rounded-2xl bg-black p-6 flex flex-col justify-between text-white relative h-[300px] mt-6">
                    <div className="z-10 w-[49%]">
                        <Skeleton className="w-[270px] sm:w-[310px] md:w-[320px] lg:w-[323px] h-6"/>

                        <ul className="flex gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 items-center lg:overflow-hidden scroll-sub mt-5">
                            {[...Array(4)].map((_, index) => (
                                <li
                                    key={index}
                                    className="rounded-sm text-white text-xs h-[20px] py-[1px] px-1.5 flex-shrink-0"
                                >
                                    <Skeleton className="h-4 w-[40px] lg:w-[49px]" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="h-[1px] bg-gray-500 w-[49%] z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end z-10">
                        <div className="grid grid-flow-col auto-cols-[calc(100%/5-12px)] sm:auto-cols-[calc(100%/7-12px)] gap-3 overflow-hidden">
                            {[...Array(7)].map((_, index) => (
                                <div
                                    key={index}
                                    className="aspect-[3/4] rounded-[5px] overflow-hidden cursor-pointer"
                                >
                                    <Skeleton className="object-cover size-full" />
                                </div>
                            ))}
                        </div>

                        <div className="hidden sm:block rounded-2xl overflow-hidden aspect-video absolute right-6 -top-8 w-[45%]">
                            <Skeleton className="object-cover size-full" />
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-[#1b2022f2] rounded-2xl"></div>
                </figure>
            </div>
        </section>
    )
}

export default NewComicSkeleton;