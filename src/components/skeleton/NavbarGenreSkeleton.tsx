import { Skeleton } from '@/components/ui/skeleton';

const NavbarGenreSkeleton = () => {
    return (
        <nav className="flex justify-center py-3.5 sm:py-[26px] bg-secondary text-primary dark:bg-black dark:text-primary">
            <ul className="flex sm:gap-7 gap-5 container justify-center wrapper">
                {
                    [...Array(8)].map((_, index) => (
                        <li key={index} className="block">
                            <Skeleton className="h-4 sm:w-[40px] lg:w-[49px]" />
                        </li>
                    ))
                }
                <li>
                    <Skeleton className="h-4 sm:w-[40px] lg:w-[49px]" />
                </li>
            </ul>
        </nav>
    )
}

export default NavbarGenreSkeleton