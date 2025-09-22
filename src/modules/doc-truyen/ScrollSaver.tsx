'use client';

// ** React
import { useCallback, useEffect, useRef } from 'react';

// ** Next
import { usePathname } from 'next/navigation';

// ** utils
import getIdFromUrl from '@/utils/getIdFromUrl';
import { historyService } from '@/utils/localStorage/historyService';

interface IScrollSaverProps {
    numberOfChapters: number;
    chapterName: string;
    currentUrl: string;
    slug: string;
    image: string;
}

const ScrollSaver = ({ numberOfChapters, chapterName, currentUrl, slug, image }: IScrollSaverProps) => {
    const pathname = usePathname();
    const scrollY = useRef(0);
    const _id = getIdFromUrl(currentUrl, '-');

    // Restore scroll
    useEffect(() => {
        try {
            const item = historyService.getById(_id);
            if (!item?.position) return;

            let tries = 0;
            const restoreScroll = () => {
                if (document.body.scrollHeight > item.position || tries > 60) {
                    window.scrollTo(0, item.position);
                    return;
                }
                tries++;
                requestAnimationFrame(restoreScroll);
            };

            requestAnimationFrame(restoreScroll);
        } catch {}
    }, [_id]);

    // Track scroll
    useEffect(() => {
        const track = () => {
            scrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', track, { passive: true });
        return () => window.removeEventListener('scroll', track);
    }, []);

    // Save history
    const saveHistory = useCallback(() => {
        if (scrollY.current <= 0) return;

        const historyItem: IHistory = {
            _id,
            slug,
            image,
            chapter: numberOfChapters.toString(),
            name: chapterName,
            path: pathname,
            position: scrollY.current,
        };

        historyService.save(historyItem);
    }, [_id, slug, numberOfChapters, chapterName, pathname, image]);

    // Save on navigation
    useEffect(() => {
        return () => {
            saveHistory();
        };
    }, [pathname]);

    // Save on beforeunload
    useEffect(() => {
        window.addEventListener('beforeunload', saveHistory);
        return () => {
            window.removeEventListener('beforeunload', saveHistory);
        };
    }, [saveHistory]);

    return null;
};

export default ScrollSaver;
