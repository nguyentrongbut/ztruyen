'use client';

// ** React
import { useEffect, useState } from 'react';

// ** Next
import Link from 'next/link';

// ** Components
import ComicImage from '@/components/common/ComicImage';
import { Heading } from '@/components/typography/Heading';

// ** Modules
import EmptyPage from '@/modules/lich-su/EmptyPage';

// ** Shadcn ui
import { Button } from '@/components/ui/button';
// import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import { Checkbox } from '@/components/ui/checkbox';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

// ** Lucide Icon
import { Trash, X } from 'lucide-react';

// ** react hot toast
import toast from 'react-hot-toast';

// ** utils
import { historyService } from '@/utils/localStorage/historyService';

// ** configs
import { CONFIG_API_OUT_SIDE } from '@/configs/api';

const ReadingHistory = () => {

    const [deleteAll, setDeleteAll] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const [listHistory, setListHistory] = useState<IHistory[]>([]);

    // Load history khi mount
    useEffect(() => {
        setListHistory(historyService.getAll());
    }, []);

    const refreshHistory = () => {
        setListHistory(historyService.getAll());
    };

    const isHistory = listHistory.length > 0

    const toggleSelect = (id: string, checked: boolean) => {
        setSelected((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const handleSelectAll = () => {
        if (selected.length === listHistory.length) {
            setSelected([]);
        } else {
            setSelected(listHistory.map((item) => item._id));
        }
    };

    // delete 1
    const handleDelete = (id: string) => {
        try {
            historyService.delete(id);
            refreshHistory()
            toast.success("Meow~ Tất cả đã biến mất như phép màu ")
        } catch {
            toast.error('Huhu, có gì đó không ổn rồi...')
        }
    }

    const handleDeleteMultiple = () => {
        if (selected.length > 0) {
            historyService.deleteMany(selected)
            refreshHistory()
            toast.success("Meow~ Tất cả đã biến mất như phép màu ")
            setDeleteAll(false);
            setSelected([]);
        } else {
            toast.error('Hãy chọn ít nhất 1 truyện nhé...')
        }
    };

    return (
        <section className="min-h-[54vh] wrapper pt-6 pb-20">
            <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between md:items-center">
                <Heading
                    link={false}
                    title="Lịch sử đọc truyện"
                    size="xl"
                    type="capitalize"
                />

                {listHistory.length > 1 && (
                    <div className="flex gap-4 md:gap-2 items-center">
                        {
                            isHistory &&
                                // ** Btn Action delete all
                                (deleteAll ? (
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button
                                                shape="rectangleSmall"
                                                className="text-red-600 dark:text-red-400 hover:opacity-90"
                                            >
                                                <Trash className="size-3 sm:size-4" />
                                                Xác nhận xoá
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Ôi không! Bạn muốn tiễn tất cả những truyện này lên thiên đường truyện tranh! (=^･ω･^=)
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Hành động này sẽ xoá chúng vĩnh viễn, nhưng ký ức về chúng vẫn còn trong tim bạn! (≧ᆺ≦)
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel asChild>
                                                    <Button variant='outline'>
                                                        Thôi, tớ đổi ý rồi~ (ฅ^ω^ฅ)
                                                    </Button>
                                                </AlertDialogCancel>
                                                <AlertDialogAction asChild>
                                                    <Button onClick={handleDeleteMultiple} variant='danger'>
                                                        Đúng vậy! (=^･ｪ･^=)/
                                                    </Button>
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                ) : (
                                    <Button
                                        shape="rectangleSmall"
                                        className="text-red-600 dark:text-red-400 hover:opacity-90"
                                        onClick={() => setDeleteAll(true)}
                                    >
                                        <Trash className="size-3 sm:size-4" />
                                        Xoá nhiều truyện
                                    </Button>
                                ))
                            // ** End Btn Action delete all
                        }

                        {deleteAll && isHistory && (
                            <>
                                {/* Selected/unSelected all Btn*/}
                                <Button
                                    shape="rectangleSmall"
                                    onClick={handleSelectAll}
                                    className={`${selected.length === listHistory.length ? 'text-black/80 dark:text-white/80 hover:opacity-80' : 'text-primaryColor opacity-80'}`}
                                >
                                    {selected.length === listHistory.length
                                        ? 'Bỏ chọn tất cả'
                                        : 'Chọn tất cả'}
                                </Button>
                                {/* End Selected/unSelected all Btn*/}

                                {/* Cancel Btn*/}
                                <Button
                                    shape="rectangleSmall"
                                    onClick={() => {
                                        setDeleteAll(false);
                                        setSelected([]);
                                    }}
                                >
                                    Huỷ
                                </Button>
                                {/* End Cancel Btn*/}
                            </>
                        )}
                    </div>
                )}
            </div>

            {isHistory ? (
                <div className="mt-10">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-4 gap-2 md:gap-2.5 lg:gap-3 mb-8">
                        {listHistory.map((item, i) => (
                            <figure
                                key={item._id}
                                title={item?.name ?? ''}
                                className="flex flex-col relative"
                            >
                                <div
                                    onClick={() => {
                                        if (deleteAll) {
                                            toggleSelect(
                                                item._id,
                                                !selected.includes(item._id)
                                            );
                                        }
                                    }}
                                    className={
                                        deleteAll ? 'cursor-pointer' : ''
                                    }
                                >
                                    <ComicImage
                                        src={`${CONFIG_API_OUT_SIDE.IMAGE.INDEX}/${item.image}`}
                                        alt={item.name}
                                        imgSize="lg"
                                        priority={i <= 0 ? true : false}
                                    />
                                </div>

                                <figcaption
                                    className="mt-1.5 text-center"
                                    title={item.name}
                                >
                                    <Heading
                                        as="h2"
                                        title={item.name}
                                        href={item.path}
                                        size="sm"
                                    />
                                    <Link href={item.path}>
                                        <p className="line-clamp-1 text-xs mt-1.5 hover:text-primaryColor">
                                            Đọc tiếp chương {item.chapter}
                                        </p>
                                    </Link>
                                </figcaption>

                                <div className="absolute right-0 sm:right-1.5 top-0 sm:top-1.5 p-1.5 cursor-pointer">
                                    {deleteAll ? (
                                        <Checkbox
                                            checked={selected.includes(item._id)}
                                            onCheckedChange={(checked) =>
                                                toggleSelect(
                                                    item._id,
                                                    checked === true
                                                )
                                            }
                                        />
                                    ) : (
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <div className="bg-red-500/60 rounded-full hover:bg-red-400 p-1 sm:p-1.5">
                                                    <X className="size-2.5 sm:size-3 text-white" />
                                                </div>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>
                                                        Ôi không! Bạn muốn tiễn truyện {item.name} lên thiên đường truyện tranh? (=^･ω･^=)
                                                    </AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Hành động này sẽ xoá truyện vĩnh viễn. Nhưng đừng buồn, ký ức về nó vẫn luôn ở lại trong tim bạn! (ฅ^ω^ฅ)
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel asChild>
                                                        <Button variant='outline'>
                                                            Thôi, tớ đổi ý rồi~ (=^･^=)
                                                        </Button>
                                                    </AlertDialogCancel>
                                                    <AlertDialogAction asChild>
                                                        <Button onClick={() => handleDelete(item._id)} variant='danger'>
                                                            Đúng vậy! (=^･ｪ･^=)/
                                                        </Button>
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    )}
                                </div>
                            </figure>
                        ))}
                    </div>

                    {/*<PaginationWithLinks*/}
                    {/*    page={1}*/}
                    {/*    pageSize={1}*/}
                    {/*    totalCount={10}*/}
                    {/*/>*/}
                </div>
            ) : (
                <EmptyPage />
            )}
        </section>
    );
};

export default ReadingHistory;
