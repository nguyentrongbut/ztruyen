import { getListNew } from '@/lib/actions/home';
import Link from 'next/link';
import InteractiveThumbnail from '@/modules/home/InteractiveThumbnail';

const NewComic = async () => {

    const listNewComic: IComic[] = await getListNew();

    return (
        <section className="bg-[#ffff] dark:bg-secondary">
            <div className="wrapper pb-[30px] sm:pb-[40px] md:pb-[50px] lg:pb-[65px]">
                <h1>
                    <p
                        className="pt-[20px] pb-[16px] text-[22px] font-medium
                sm:pt-[30px] sm:pb-[20px] sm:text-[26px]
                md:pt-[40px] md:pb-[28px] md:text-[30px]
                lg:pt-[60px] lg:pb-[38px] lg:text-[34px]"
                    >
                        <Link href="danh-sach/truyen-moi">Truyện Mới Cập Nhật</Link>
                    </p>
                </h1>
                <InteractiveThumbnail listNewComic={listNewComic} />
            </div>
        </section>
    );
};

export default NewComic;