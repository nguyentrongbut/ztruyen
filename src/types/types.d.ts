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
}
