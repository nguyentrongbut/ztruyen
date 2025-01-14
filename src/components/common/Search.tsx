'use client';
import IconSearch from '@/components/icons/IconSearch';
import { useEffect, useRef, useState } from 'react';

const Search = () => {
    const [searchClick, setSearchClick] = useState(false);

    const searchHeaderRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleClickOutSearch = (e: MouseEvent) => {
            if (
                searchHeaderRef.current &&
                !searchHeaderRef.current.contains(e.target as Node)
            ) {
                setSearchClick(false);
            }
        };
        document.addEventListener('click', handleClickOutSearch);
        return () => {
            document.removeEventListener('click', handleClickOutSearch);
        };
    }, []);

    return (
        <div
            ref={searchHeaderRef}
            className="rounded-[15px] h-8 bg-[#f4f4f4] text-black"
            onClick={() => {
                setSearchClick(true);
            }}
        >
            <form
                action=""
                className={`flex items-center h-full ${searchClick ? 'w-[220px]' : 'w-[180px]'} transition-w-b`}
            >
                <input
                    type="text"
                    placeholder="Tìm truyện..."
                    className="outline-none w-full bg-inherit py-[4px] pl-[17px] text-xs"
                />
                <button type="submit" className="px-[5px] pr-[17px] h-full">
                    <IconSearch></IconSearch>
                </button>
            </form>
        </div>
    );
};

export default Search;
