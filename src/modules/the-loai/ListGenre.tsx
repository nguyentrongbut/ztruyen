'use client'

// ** React
import { useLayoutEffect, useRef } from 'react';

// ** Hooks
import useTailwindBreakpoints from '@/hooks/useTailwindBreakpoints';

// ** Next
import Link from 'next/link';

interface IListGenreProps {
    data: IGenres[],
    slug: string
}

const ListGenre = ({data, slug}: IListGenreProps) => {

    const activeRef = useRef<HTMLAnchorElement | null>(null);
    const { isSm } = useTailwindBreakpoints();

    useLayoutEffect(() => {
        if (!isSm && activeRef.current) {
            const parent = activeRef.current.closest("ul");
            if (parent) {
                const parentRect = parent.getBoundingClientRect();
                const itemRect = activeRef.current.getBoundingClientRect();

                parent.scrollTop += itemRect.top - parentRect.top + 4;
            }
        }
    }, [slug, isSm]);

    return (
        <ul className="flex gap-3.5 flex-wrap text-[15px] h-[122px] sm:h-auto overflow-y-auto sm:overflow-visible custom-scroll">
            {data.map((item, index) => (
                <li key={index}>
                    {item.slug === slug ? (
                        <h1>
                            <Link
                                ref={activeRef}
                                href={`/the-loai/${item.slug}.html`}
                                className={`active:bg-primaryColor active:text-primary rounded-[5px] px-[10px] py-1.5 ${item.slug === slug && 'text-primaryColor'}`}
                            >
                                {item.name}
                            </Link>
                        </h1>
                    ) : (
                        <h2>
                            <Link
                                href={`/the-loai/${item.slug}.html`}
                                className={`active:bg-primaryColor active:text-primary rounded-[5px] px-[10px] py-1.5 ${item.slug === slug && 'text-primaryColor'}`}
                            >
                                {item.name}
                            </Link>
                        </h2>
                    )}
                </li>
            ))}
            <li>
                {'tat-ca' === slug ? (
                    <h1>
                        <Link
                            ref={activeRef}
                            href={`/the-loai/tat-ca.html`}
                            className="active:bg-primaryColor active:text-primary rounded-[5px] px-[10px] py-1.5 text-primaryColor"
                        >
                            Tất cả
                        </Link>
                    </h1>
                ) : (
                    <h2>
                        <Link
                            href={`/the-loai/tat-ca.html`}
                            className="active:bg-primaryColor active:text-primary rounded-[5px] px-[10px] py-1.5"
                        >
                            Tất cả
                        </Link>
                    </h2>
                )}
            </li>
        </ul>
    )
}

export default ListGenre