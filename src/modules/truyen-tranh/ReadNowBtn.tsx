'use client';

// ** Next
import Link from 'next/link';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

// ** utils
import { historyService } from '@/utils/localStorage/historyService';

interface IReadNowBtnProps {
    href: string;
    chapter: string;
    slug: string;
}

const ReadNowBtn = ({ chapter, href, slug }: IReadNowBtnProps) => {
    const isComicHistory = historyService.getBySlug(slug);

    if (!isComicHistory)
        return (
            <Button
                className="mt-[21px] w-full"
                asChild={true}
                variant="primary"
            >
                <Link href={href}>
                    📖 Đọc chương {chapter} ngay thôi! (≧▽≦)
                </Link>
            </Button>
        );

    return (
        <Button
            className="mt-[21px] w-full"
            asChild={true}
            variant="primary"

        >
            <Link href={isComicHistory.path}>
                🐾 Đọc tiếp chương {isComicHistory.chapter} thôi nào ~~ (=^･ｪ･^=)
            </Link>
        </Button>
    );
};

export default ReadNowBtn;
