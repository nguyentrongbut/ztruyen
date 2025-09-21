// ** Next
import Image from 'next/image';
import Link from 'next/link';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

const EmptyPage = () => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-10">
            <Image
                src="/readinghistory.png"
                alt="Ảnh không tìm thấy lịch sử đọc truyện tại Ztruyện - ztruyen.io.vn"
                width={256}
                height={256}
                className="object-cover hover:scale-105 transition-transform"
            />
            <h2 className="text-lg sm:text-xl font-bold mt-2 text-center">
                (¬‿¬) Bắt quả tang nha! Bạn chưa đọc truyện nào ở Ztruyện 👀
            </h2>
            <p className="text-xs sm:text-sm mt-2 max-w-md text-center">
                Bạn chưa đọc bộ truyện nào, nên lịch sử vẫn còn để trống. Hãy
                bắt đầu khám phá một bộ truyện mới để Ztruyện ghi nhớ hành trình
                và lần sau có thể tiếp tục ngay từ chỗ đã dừng nhé! 📚✨
            </p>
            <Link href="/">
                <Button variant="primary" className="text-xs sm:text-sm gap-2">
                    (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Đi tìm truyện thôi!
                </Button>
            </Link>
        </div>
    );
};

export default EmptyPage;