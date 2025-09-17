import Carousel from '@/modules/home/carousel';
import { getListComplete } from '@/lib/actions/home';

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