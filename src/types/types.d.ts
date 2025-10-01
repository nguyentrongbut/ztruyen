export {};

declare global {
    interface HTMLElement {
        mozRequestFullScreen?: () => void;
        webkitRequestFullscreen?: () => void;
        msRequestFullscreen?: () => void;
        mozCancelFullScreen?: () => void;
        webkitExitFullscreen?: () => void;
        msExitFullscreen?: () => void;
    }

    interface Document {
        mozCancelFullScreen?: () => void;
        webkitExitFullscreen?: () => void;
        msExitFullscreen?: () => void;
        webkitFullscreenElement?: HTMLElement | null;
        mozFullScreenElement?: HTMLElement | null;
        msFullscreenElement?: HTMLElement | null;
        fullscreenElement?: HTMLElement | null;
    }

    interface Breakpoints {
        windowWidth: number;
        /** screen ≥ 640px (sm) */
        isSm: boolean;
        /** screen ≥ 768px (md) */
        isMd: boolean;
        /** screen ≥ 1024px (lg) */
        isLg: boolean;
        /** screen ≥ 1280px (xl) */
        isXl: boolean;
        /** screen ≥ 1536px (2xl) */
        is2xl: boolean;
    }

    interface TLink {
        title: string;
        href: string;
    }

    interface TLinkWithIcon extends TLink {
        icon: LucideIcon;
    }
}
