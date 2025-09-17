'use client';

// ** Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ** Shadcn ui
import { SheetClose, SheetTitle } from '@/components/ui/sheet';

// ** Layouts
import { navHeader } from '@/layouts/components/NavHeader';

// ** utils
import removeExtension from '@/utils/removeExtension';

const NavHeaderMobile = () => {
    const path = usePathname();

    const pathGenre = path.startsWith('/the-loai');

    return (
        <>
            {navHeader.map((nav) => {
                const isActive =
                    pathGenre && nav.title === 'Thể loại'
                        ? true
                        : removeExtension(path, '.html') ===
                          removeExtension(nav.href, '.html');

                return (
                    <SheetTitle asChild={true} key={nav.href}>
                        <li className="rounded-md">
                            <SheetClose asChild>
                                <Link
                                    href={nav.href}
                                    className={`
                                    'hover:text-primaryColor py-2 pl-3 block'
                                    ${isActive ? 'text-primaryColor' : ''}
                                `}
                                >
                                    {nav.title}
                                </Link>
                            </SheetClose>
                        </li>
                    </SheetTitle>
                );
            })}
        </>
    );
};

export default NavHeaderMobile;
