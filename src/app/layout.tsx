import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/common/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kho Truyện Tranh Full, Cập Nhật Liên Tục - Đọc Miễn Phí",
  description: "Web truyện tranh online cập nhật mới nhất, đa dạng thể loại từ hành động, lãng mạn, kinh dị đến hài hước. Đọc truyện miễn phí, chất lượng cao, không quảng cáo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
