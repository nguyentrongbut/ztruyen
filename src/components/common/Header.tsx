import Link from 'next/link';
import { ModeToggle } from '@/components/common/ModeToggle';
import Search from '@/components/common/Search';

const Header = () => {
    return (
        <header className="shadow-custom z-40 fixed left-0 top-0 right-0 bg-primary dark:bg-secondary">
            <nav className="wrapper flex justify-between items-center py-2 text-sm font-medium">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-3">
                        <h1 className="text-[15px] font-bold first-letter:uppercase first-letter:text-[#32aaff] first-letter:text-xl">
                            ztruyện
                        </h1>
                    </Link>
                    <ul className="flex items-center gap-[25px]">
                        <li>
                            <Link
                                href="/the-loai/action"
                                className="hover:text-[#32aaff]"
                            >
                                Thể loại
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#32aaff]">
                                Đang phát hành
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#32aaff]">
                                Hoàn thành
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#32aaff]">
                                Sắp ra mắt
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-[17px]">
                    <Search></Search>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link href="#">Đăng nhập</Link>
                        </li>
                        <li>
                            <Link href="#">Đăng ký</Link>
                        </li>
                    </ul>
                    <ModeToggle></ModeToggle>
                </div>
            </nav>
        </header>
    );
};

export default Header;
