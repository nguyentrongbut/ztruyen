const baseUrlOutSide = process.env.NEXT_PUBLIC_API_URL_OUT_SIDE;

export const CONFIG_API_OUT_SIDE = {
    INDEX: baseUrlOutSide,
    HOME: {
      INDEX: `${baseUrlOutSide}/home`
    },
    DETAIL: {
        INDEX: `${baseUrlOutSide}/truyen-tranh`
    },
    STATUS: {
        INDEX: `${baseUrlOutSide}/danh-sach`,
        NEW: `${baseUrlOutSide}/danh-sach/truyen-moi`,
        PUBLISHING: `${baseUrlOutSide}/danh-sach/dang-phat-hanh`,
        COMPLETE: `${baseUrlOutSide}/danh-sach/hoan-thanh`,
        COMING_SOON: `${baseUrlOutSide}/danh-sach/sap-ra-mat`,
    },
    GENRE: {
        INDEX: `${baseUrlOutSide}/the-loai`,
    },
    SEARCH: {
        INDEX: `${baseUrlOutSide}/tim-kiem`
    },
    CHAPTER: {
        INDEX: process.env.NEXT_PUBLIC_API_URL_CHAPTER_OUT_SIDE
    },
    IMAGE: {
        INDEX: process.env.NEXT_PUBLIC_URL_IMG,
    }
} as const;