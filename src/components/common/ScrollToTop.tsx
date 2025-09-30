'use client'

// ** React
import { useEffect } from 'react';

// ** Next
import { usePathname, useSearchParams } from 'next/navigation';

const ScrollToTop = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams()

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname, searchParams]);
    return <></>;
}

export default ScrollToTop;