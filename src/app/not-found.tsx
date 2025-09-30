// ** Next
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: '404 - Không tìm thấy trang này',
    description: 'Trang bạn đang tìm kiếm không tồn tại.',
};

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center h-screen -mt-[56px]">
            <Image
                src="/notfound.png"
                width={192}
                height={192}
                alt="404 - Ztruyện | ztruyen.io.vn"
                className="hover:scale-105 transition-transform"
            />
            <h1 className="sm:text-xl font-bold mt-4">
                (つ≧▽≦)つ Hình như bạn đi lạc mất rồi ⊂(・▽・⊂)
            </h1>
            <p className="text-xs sm:text-sm">
                Đường dẫn này không tồn tại, hãy quay lại để tiếp tục hành trình
                nhé.
            </p>
            <Link href='/'className="mt-1 sm:mt-2">
                <Button variant="primary" className="text-xs">
                    Về nhà thôi nào (≧▽≦)
                </Button>
            </Link>
        </div>
    );
}
