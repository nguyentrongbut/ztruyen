// ** React
import { Suspense } from 'react';

// ** Modules
import ReadingHistory from '@/modules/lich-su/ReadingHistory';

// ** Skeleton
import DynamicPageStatusSkeleton from '@/skeleton/DynamicPageStatusSkeleton';

export async function generateMetadata() {
    return {
        title: `Lịch sử đọc truyện của bạn - ztruyen.io.vn`,
        description: `Lịch sử đọc truyện của bạn tại ztruyen.io.vn`,
        keywords: [`Lịch sử đọc truyện`, `manga`, `comic`, `manhua`, `manhua`],
        alternates: {
            canonical: `/lich-su`,
            languages: {
                vi: `/vi/lich-su`,
            },
        },
        openGraph: {
            title: `Lịch sử đọc truyện của bạn - ztruyen.io.vn`,
            description: `Lịch sử đọc truyện của bạn tại ztruyen.io.vn`,
            images: [
                {
                    url: '/logo-all.png',
                    width: 400,
                    height: 200,
                },
            ],
        },
    };
}

const ReadingHistoryPage = () => {
    return (
        <Suspense fallback={<DynamicPageStatusSkeleton />}>
            <ReadingHistory />
        </Suspense>
    );
};

export default ReadingHistoryPage;
