// ** React
import { ReactNode } from 'react';

// ** Layouts
import { ModeToggle } from '@/components/common/ModeToggle';
import Search from '@/layouts/components/Search';
import NavHeader from '@/layouts/components/Header/NavHeader';
import NavHeaderMobile from '@/layouts/components/Header/NavHeaderMobile';

// ** Components
import Logo from '@/components/common/Logo';

// ** Shadcn ui
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

// ** Modules
import ReadingHistoryBtn from '@/modules/home/ReadingHistoryBtn';

// ** Lucide Icon
import { Menu } from 'lucide-react';

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
                    <Logo />
                    {!asChild && <NavHeader />}
                </div>
                {children}
                <div className="flex items-center gap-2">
                    {!asChild && <Search />}
                    <div className="flex items-center gap-4 text-xs lg:text-sm">
                        {/*<div>Đăng nhập</div>*/}
                        <ReadingHistoryBtn />
                    </div>
                    <div className="hidden xl:block">
                        <ModeToggle/>
                    </div>
                    <div className="xl:hidden">
                        <Sheet>
                            <SheetTrigger asChild className="cursor-pointer">
                                <Button variant="ghost" shape="squareRounded">
                                    <Menu className="size-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[255px]"
                                hideCloseButton={true}
                            >
                                <ul className="text-sm flex flex-col gap-1.5">
                                    <SheetTitle asChild={true}>
                                        <li className="mb-3 flex justify-between">
                                            <SheetClose asChild>
                                                <Logo />
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
