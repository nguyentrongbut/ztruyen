import {
    Layers,
    PlayCircle,
    CheckCircle2,
    Clock,
    Sparkles
} from "lucide-react";

// ** Header
export const navHeader: TLinkWithIcon[] = [
    {
        title: 'Thể loại',
        href: '/the-loai/tat-ca.html',
        icon: Layers,
    },
    {
        title: 'Đang phát hành',
        href: '/danh-sach/dang-phat-hanh.html',
        icon: PlayCircle,
    },
    {
        title: 'Hoàn thành',
        href: '/danh-sach/hoan-thanh.html',
        icon: CheckCircle2,
    },
    {
        title: 'Sắp ra mắt',
        href: '/danh-sach/sap-ra-mat.html',
        icon: Clock,
    },
    {
        title: 'Truyện mới',
        href: '/danh-sach/truyen-moi.html',
        icon: Sparkles,
    },
];

// ** Footer
export const tagsFooter: TLink[] = [
    {
        title: 'Truyện tranh',
        href: '/'
    },
    {
        title: 'Truyện Tranh Online',
        href: '/',
    },
    {
        title: 'Truyện Tranh Mới',
        href: '/',
    },
    {
        title: 'Truyện Tranh Hay',
        href: '/',
    },
    {
        title: 'Đọc Truyện Tranh',
        href: '/',
    },
    {
        title: 'Manhwa',
        href: '/the-loai/manhwa.html',
    },
    {
        title: 'Manhua',
        href: '/the-loai/manhua.html',
    },
    {
        title: 'Manga',
        href: '/danh-sach/truyen-moi.html',
    },
    {
        title: 'Truyện Ngôn Tình',
        href: '/the-loai/ngon-tinh.html',
    },
];