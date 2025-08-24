import { Skeleton } from '@/components/ui/skeleton';

const NavbarGenreSkeleton = () => {
    return (
        <nav className="flex justify-center py-3.5 sm:py-[26px] bg-secondary text-primary dark:bg-black dark:text-primary">
            <ul className="flex sm:gap-7 gap-5 container justify-center wrapper">
                {[...Array(9)].map((_, index) => (
                    <li
                        key={index}
                        className={`
                            block
                            ${index > 4 ? 'hidden md:block' : ''}  
                            ${index > 6 ? 'hidden lg:block' : ''} 
                        `}
                    >
                        <Skeleton className="h-4 w-[40px] lg:w-[49px]" />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavbarGenreSkeleton;
