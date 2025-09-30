'use client';

// ** React
import { useEffect, useRef, useState } from 'react';
import { FormEvent } from 'react';

// ** Next
import { useRouter } from 'next/navigation';

// ** Shadcn ui
import { Button } from '@/components/ui/button';

// ** Lucide Icon
import { SearchIcon } from 'lucide-react';

const Search = () => {
    const router = useRouter();
    const [searchClick, setSearchClick] = useState(false);
    const [searchIconClick, setSearchIconClick] = useState(false);

    const searchHeaderRef = useRef<HTMLInputElement | null>(null);
    const searchReponsiveRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const handleClickOutSearch = (e: MouseEvent) => {
            if (
                searchHeaderRef.current &&
                searchReponsiveRef.current &&
                !searchHeaderRef.current.contains(e.target as Node) &&
                !searchReponsiveRef.current.contains(e.target as Node)
            ) {
                setSearchClick(false);
                setSearchIconClick(false);
            }
        };
        document.addEventListener('click', handleClickOutSearch);
        return () => {
            document.removeEventListener('click', handleClickOutSearch);
        };
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const searchQuery = (e.target as HTMLFormElement).elements.namedItem(
            'search'
        ) as HTMLInputElement;
        if (searchQuery?.value) {
            router.push(`/tim-kiem?keyword=${searchQuery.value}`);
        }
    };
    return (
        <>
            <div>
                <div
                    ref={searchHeaderRef}
                    className={`rounded-[15px] h-8 bg-[#f4f4f4] text-black ${searchIconClick ? 'absolute w-full left-0 h-full top-0' : 'hidden sm:block'} `}
                    onClick={() => {
                        setSearchClick(true);
                    }}
                >
                    <form
                        action=""
                        onSubmit={handleSubmit}
                        className={`flex items-center h-full ${searchClick ? 'w-[220px]' : 'w-[180px]'} ${searchIconClick ? 'w-full' : ''} transition-w-b`}
                    >
                        <input
                            type="text"
                            name="search"
                            placeholder="Tìm truyện..."
                            className="outline-none w-full bg-inherit py-[4px] pl-[17px] text-xs"
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="px-[5px] pr-[17px] h-full"
                        >
                            <SearchIcon className="size-4" />
                        </button>
                    </form>
                </div>
                <div
                    ref={searchReponsiveRef}
                    className="sm:hidden cursor-pointer"
                    onClick={() => {
                        setSearchIconClick(true);
                    }}
                >
                    <Button variant="ghost" shape="squareRounded">
                        <SearchIcon className="size-4" />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Search;
