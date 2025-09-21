'use client';

// ** Next
import Link from 'next/link';

// ** Shadcn ui
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

// Lucide Icon
import { History } from 'lucide-react';

const ReadingHistoryBtn = () => {
    const pathCurrent = usePathname();
    const pathName = '/lich-su.html'
    const isReadingHistoryPage = pathCurrent === pathName

    return (
        <Link href={pathName} title="Lịch sử đọc truyện">
            <Button variant="ghost" shape="squareRounded">
                <History  className={`${isReadingHistoryPage ? 'text-primaryColor' : ''} size-4`}/>
            </Button>
        </Link>
    );
};

export default ReadingHistoryBtn;
