// ** React
import { ReactNode } from 'react';

// ** Next
import Link from 'next/link';
import Image from 'next/image';

// ** Layouts
import { ModeToggle } from '@/layouts/components/ModeToggle';
import Search from '@/layouts/components/Search';
import NavHeader from '@/layouts/components/NavHeader';
import NavHeaderMobile from '@/layouts/components/NavHeaderMobile';

// ** Components
import IconMenu from '@/components/icons/IconMenu';

// ** Shadcn ui
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

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
                        <p className="text-[15px] font-bold first-letter:uppercase first-letter:text-primaryColor first-letter:text-xl">
                            ztruyện
                        </p>
                    </Link>
                    {!asChild && <NavHeader />}
                </div>
                {children}
                <div className="flex items-center gap-[17px]">
                    {!asChild && <Search></Search>}
                    <ul className="flex items-center gap-4 text-xs lg:text-sm">
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
                            <SheetTrigger
                                asChild={true}
                                className="cursor-pointer"
                            >
                                <IconMenu></IconMenu>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[255px]"
                                hideCloseButton={true}
                            >
                                <ul className="text-sm flex flex-col gap-2">
                                    <SheetTitle asChild={true}>
                                        <li className="mb-3 flex justify-between">
                                            <SheetClose asChild>
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
                                                    <p className="text-[15px] font-bold first-letter:uppercase first-letter:text-primaryColor first-letter:text-xl">
                                                        ztruyện
                                                    </p>
                                                </Link>
                                            </SheetClose>
                                            <ModeToggle></ModeToggle>
                                        </li>
                                    </SheetTitle>
                                    <NavHeaderMobile />
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
