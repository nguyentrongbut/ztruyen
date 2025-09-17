'use client';

// ** Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ** utils
import removeExtension from '@/utils/removeExtension';

export type NavHeader = {
    title: string;
    href: string;
};

export const navHeader: NavHeader[] = [
    {
        title: 'Thể loại',
        href: '/the-loai/tat-ca.html',
    },
    {
        title: 'Đang phát hành',
        href: '/danh-sach/dang-phat-hanh.html',
    },
    {
        title: 'Hoàn thành',
        href: '/danh-sach/hoan-thanh.html',
    },
    {
        title: 'Sắp ra mắt',
        href: '/danh-sach/sap-ra-mat.html',
    },
    {
        title: 'Truyện mới',
        href: '/danh-sach/truyen-moi.html',
    },
];

const NavHeader = () => {
    const path = usePathname();

    const pathGenre = path.startsWith('/the-loai');

    return (
        <ul className="hidden xl:flex items-center gap-[25px]">
            {navHeader.map((nav) => {
                const isActive =
                    pathGenre && nav.title === 'Thể loại'
                        ? true
                        : removeExtension(path, '.html') ===
                          removeExtension(nav.href, '.html');

                return (
                    <li key={nav.href}>
                        <Link
                            href={nav.href}
                            className={`hover:text-primaryColor ${isActive ? 'text-primaryColor' : ''}`}
                        >
                            {nav.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavHeader;
