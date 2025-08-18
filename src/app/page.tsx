import NavbarGenre from '@/components/common/NavbarGenre';
import type { Metadata } from 'next';
import GridCarouselWrapper from '@/components/pages/home/GridCarouselWrapper';
import NewComic from '@/components/pages/home/NewComic';
import ComingSoon from '@/components/pages/home/ComingSoon';
import PublishingComic from '@/components/pages/home/PublishingComic';
import CompleteComic from '@/components/pages/home/CompleteComic';
import { Suspense } from 'react';
import GridCarouselSkeleton from '@/components/skeleton/GridCarouselSkeleton';
import NavbarGenreSkeleton from '@/components/skeleton/NavbarGenreSkeleton';
import ListComicSkeleton from '@/components/skeleton/ListComicSkeleton';
import NewComicSkeleton from '@/components/skeleton/NewComicSkeleton';

export const metadata: Metadata = {
    metadataBase: new URL('https://ztruyen.io.vn'),
    title: 'Đọc truyện tranh Manhwa, Manga, Manhua Online - Ztruyện ',
    description:
        'Web đọc truyện tranh manhwa, manhua, manga, ngôn tình, tiên hiệp, kiếm hiệp online hay và mới nhất cập nhật liên tục tại ztruyen.io.vn',
    keywords: [
        'doc truyen tranh',
        'manga',
        'doc manga',
        'ngon tinh',
        'tien hiep',
    ],
    alternates: {
        canonical: `/`,
        languages: {
            vi: '/vi',
        },
    },
};

export default function Home() {
    return (
        <>
            <main>
                <Suspense fallback={<GridCarouselSkeleton />}>
                    <GridCarouselWrapper />
                </Suspense>

                <Suspense fallback={<NavbarGenreSkeleton />}>
                    <NavbarGenre />
                </Suspense>

                <Suspense fallback={<NewComicSkeleton />}>
                    <NewComic />
                </Suspense>

                <Suspense fallback={<ListComicSkeleton  bgColor/>}>
                    <ComingSoon />
                </Suspense>

                <Suspense fallback={<ListComicSkeleton />}>
                    <PublishingComic />
                </Suspense>

                <Suspense fallback={<ListComicSkeleton  bgColor/>}>
                    <CompleteComic />
                </Suspense>
            </main>
        </>
    );
}
