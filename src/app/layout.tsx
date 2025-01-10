import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import NprogressWrapper from '@/lib/nprogress.wrapper'

// Tải font Montserrat với các subset và weight cần thiết
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'], // Chỉ định các trọng lượng font cần sử dụng
})

export const metadata: Metadata = {
    title: 'Kho Truyện Tranh Full, Cập Nhật Liên Tục - Đọc Miễn Phí',
    description:
        'Web truyện tranh online cập nhật mới nhất, đa dạng thể loại từ hành động, lãng mạn, kinh dị đến hài hước. Đọc truyện miễn phí, chất lượng cao, không quảng cáo!',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
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
                    <NprogressWrapper>{children}</NprogressWrapper>
                </ThemeProvider>
            </body>
        </html>
    )
}
