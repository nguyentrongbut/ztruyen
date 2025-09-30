// ** React
import { Suspense } from 'react';

// ** Next
import type { Metadata } from 'next';

// ** Layouts
import DefaultLayout from '@/layouts/DefaultLayout';

// ** Modules
import NavbarGenre from '@/modules/home/NavbarGenre';
import GridCarouselWrapper from '@/modules/home/GridCarouselWrapper';
import NewComic from '@/modules/home/NewComic';
import ComingSoon from '@/modules/home/ComingSoon';
import PublishingComic from '@/modules/home/PublishingComic';
import CompleteComic from '@/modules/home/CompleteComic';

// ** Skeletons
import GridCarouselSkeleton from '@/skeleton/home/GridCarouselSkeleton';
import NavbarGenreSkeleton from '@/skeleton/home/NavbarGenreSkeleton';
import ListComicSkeleton from '@/skeleton/home/ListComicSkeleton';
import NewComicSkeleton from '@/skeleton/home/NewComicSkeleton';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_YOUR_WEBSITE || ''),
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

const Home = () => {
    return (
        <DefaultLayout>
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

                <Suspense fallback={<ListComicSkeleton bgColor />}>
                    <ComingSoon />
                </Suspense>

                <Suspense fallback={<ListComicSkeleton />}>
                    <PublishingComic />
                </Suspense>

                <Suspense fallback={<ListComicSkeleton bgColor />}>
                    <CompleteComic />
                </Suspense>
            </main>
        </DefaultLayout>
    );
};

export default Home;
