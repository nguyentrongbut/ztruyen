'use client';

import { useState, useEffect } from 'react';

const useTailwindBreakpoints = (): Breakpoints => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Nếu chưa mount, có thể trả về các giá trị mặc định để không gây sai lệch khi SSR
    if (!hasMounted) {
        return {
            windowWidth: 0,
            isSm: false,
            isMd: false,
            isLg: false,
            isXl: false,
            is2xl: false,
        };
    }

    const isSm = windowWidth >= 640;
    const isMd = windowWidth >= 768;
    const isLg = windowWidth >= 1024;
    const isXl = windowWidth >= 1280;
    const is2xl = windowWidth >= 1536;

    return { windowWidth, isSm, isMd, isLg, isXl, is2xl };
};

export default useTailwindBreakpoints;
