import { Skeleton } from "@/components/ui/skeleton";

const NavGenreSkeleton = () => {
    return (
        <nav className="wrapper flex gap-3.5 justify-center container py-6">
            <Skeleton className="flex-shrink-0 h-[22.5px] w-[60px]"/>
            <ul className="flex gap-3.5 flex-wrap sm:hidden">
                {Array.from({ length: 12 }).map((_, index) => (
                    <li key={index}>
                        <Skeleton className="h-[22.5px] w-[70px] rounded-[5px]" />
                    </li>
                ))}
            </ul>

            <ul className="hidden sm:flex gap-3.5 flex-wrap">
                {Array.from({ length: 67 }).map((_, index) => (
                    <li key={index}>
                        <Skeleton className="h-[22.5px] w-[70px] rounded-[5px]" />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavGenreSkeleton;