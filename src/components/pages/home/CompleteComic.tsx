import Carousel from '@/components/common/carousel';
import { getListComplete } from '@/lib/actions/data';

const CompleteComic = async () => {

    const listCompleteComic = await getListComplete()

    return (
        <Carousel
            data={listCompleteComic}
            title="Truyện Đã Hoàn Thành"
            bgColor
            href="danh-sach/hoan-thanh"
        ></Carousel>
    )
}

export default CompleteComic