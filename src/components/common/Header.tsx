import Link from 'next/link';
import { ModeToggle } from '@/components/common/ModeToggle';
import Search from '@/components/common/Search';
import Image from 'next/image';
import { ReactNode } from 'react';
import IconMenu from '@/components/icons/IconMenu';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import IconSearch from '@/components/icons/IconSearch';

const Header = ({
    asChild = false,
    children,
}: {
    asChild?: boolean;
    children?: ReactNode;
}) => {
    return (
        <header className="shadow-custom z-40 fixed left-0 top-0 right-0 bg-primary dark:bg-secondary">
            <nav className="wrapper flex justify-between items-center py-2 text-sm font-medium">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            width={32}
                            height={32}
                            alt="ztruyện"
                        ></Image>
                        <p className="text-[15px] font-bold first-letter:uppercase first-letter:text-[#32aaff] first-letter:text-xl">
                            ztruyện
                        </p>
                    </Link>
                    {!asChild && (
                        <ul className="hidden xl:flex items-center gap-[25px]">
                            <li>
                                <Link
                                    href="/the-loai/tat-ca.html"
                                    className="hover:text-[#32aaff]"
                                >
                                    Thể loại
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/danh-sach/dang-phat-hanh.html"
                                    className="hover:text-[#32aaff]"
                                >
                                    Đang phát hành
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/danh-sach/hoan-thanh.html"
                                    className="hover:text-[#32aaff]"
                                >
                                    Hoàn thành
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/danh-sach/sap-ra-mat.html"
                                    className="hover:text-[#32aaff]"
                                >
                                    Sắp ra mắt
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/danh-sach/truyen-moi.html"
                                    className="hover:text-[#32aaff]"
                                >
                                    Truyện mới
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                {children}
                <div className="flex items-center gap-[17px]">
                    {!asChild && (
                        <div className="hidden sm:block">
                            <Search></Search>
                        </div>
                    )}
                    <div className="sm:hidden">
                        <IconSearch></IconSearch>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link href="#">Đăng nhập</Link>
                        </li>
                        <li>
                            <Link href="#">Đăng ký</Link>
                        </li>
                    </ul>
                    <div className="hidden xl:block">
                        <ModeToggle></ModeToggle>
                    </div>
                    <div className="xl:hidden">
                        <Sheet>
                            <SheetTrigger asChild={true}>
                                <IconMenu></IconMenu>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[255px]"
                                hideCloseButton={true}
                            >
                                <ul className="text-sm">
                                    <SheetTitle asChild={true}>
                                        <li className="mb-3 flex justify-between">
                                            <Link
                                                href="/"
                                                className="flex items-center"
                                            >
                                                <Image
                                                    src="/logo.png"
                                                    width={32}
                                                    height={32}
                                                    alt="ztruyện"
                                                ></Image>
                                                <p className="text-[15px] font-bold first-letter:uppercase first-letter:text-[#32aaff] first-letter:text-xl">
                                                    ztruyện
                                                </p>
                                            </Link>
                                            <ModeToggle></ModeToggle>
                                        </li>
                                    </SheetTitle>
                                    <SheetTitle asChild={true}>
                                        <li className="rounded-md">
                                            <Link
                                                href="/the-loai/tat-ca.html"
                                                className="hover:text-[#32aaff] py-2 pl-3 block"
                                            >
                                                Thể loại
                                            </Link>
                                        </li>
                                    </SheetTitle>
                                    <SheetTitle asChild={true}>
                                        <li className="rounded-md">
                                            <Link
                                                href="/danh-sach/dang-phat-hanh.html"
                                                className="hover:text-[#32aaff] py-2 pl-3 block"
                                            >
                                                Đang phát hành
                                            </Link>
                                        </li>
                                    </SheetTitle>
                                    <SheetTitle asChild={true}>
                                        <li className="rounded-md">
                                            <Link
                                                href="/danh-sach/hoan-thanh.html"
                                                className="hover:text-[#32aaff] py-2 pl-3 block"
                                            >
                                                Hoàn thành
                                            </Link>
                                        </li>
                                    </SheetTitle>
                                    <SheetTitle asChild={true}>
                                        <li className="rounded-md">
                                            <Link
                                                href="/danh-sach/sap-ra-mat.html"
                                                className="hover:text-[#32aaff] py-2 pl-3 block"
                                            >
                                                Sắp ra mắt
                                            </Link>
                                        </li>
                                    </SheetTitle>
                                    <SheetTitle asChild={true}></SheetTitle>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
