'use client';

// ** Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ** Shadcn ui
import { SheetClose, SheetTitle } from '@/components/ui/sheet';

// ** utils
import removeExtension from '@/utils/removeExtension';

// ** Configs
import { navHeader } from '@/configs/layout';

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

                const Icon = nav.icon;

                return (
                    <SheetTitle asChild={true} key={nav.href}>
                        <li className="rounded-md">
                            <SheetClose asChild>
                                <Link
                                    href={nav.href}
                                    className={`hover:text-primaryColor py-2 pl-3 flex items-center gap-2
                                    ${isActive ? 'text-primaryColor' : ''}
                                    `}
                                >
                                    {Icon && <Icon className="size-4" />}
                                    <span>{nav.title}</span>
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
