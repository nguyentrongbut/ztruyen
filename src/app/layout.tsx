import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import NprogressWrapper from '@/lib/nprogress.wrapper';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://ztruyen.io.vn'),
    title: 'Đọc truyện tranh Manhwa, Manga, Manhua Online - Ztruyện ',
    description:
        'Web đọc truyện tranh manhwa, manhua, manga, ngôn tình, tiên hiệp, kiếm hiệp online hay và mới nhất cập nhật liên tục tại ztruyen.io.vn',
    generator: 'Next.js',
    applicationName: 'ztruyen.io.vn Atom Feed - Rss,',
    referrer: 'origin-when-cross-origin',
    keywords: [
        'doc truyen tranh',
        'manga',
        'doc manga',
        'ngon tinh',
        'tien hiep',
    ],
    authors: [
        { name: 'Cloly' },
        { name: 'Cloly', url: 'https://www.facebook.com/ree.6I6/' },
    ],
    creator: 'Cloly',
    publisher: 'Cloly',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Đọc truyện tranh Manhwa, Manga, Manhua Online - Ztruyện ',
        description:
            'Web đọc truyện tranh manhwa, manhua, manga, ngôn tình, tiên hiệp, kiếm hiệp online hay và mới nhất cập nhật liên tục tại ztruyen.io.vn',
        images: [
            {
                url: '/logo-all.png',
                width: 400,
                height: 200,
            },
        ],
    },
    verification: {
        google: 'dOCBr5kCk-sa7ap46T-t94yqvkT2TJaNSONG8sIzP-0',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${montserrat.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NprogressWrapper>
                        <Header></Header>
                        <main className="mt-[56px]">{children}</main>
                        <Footer></Footer>
                    </NprogressWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
