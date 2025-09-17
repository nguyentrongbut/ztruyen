import Carousel from '@/modules/home/carousel';
import { getListPublishing } from '@/lib/actions/home';

const PublishingComic = async () => {

    const listPublishingComic = await getListPublishing()

    return (
        <Carousel
            data={listPublishingComic}
            title="Truyện Đang Phát Hành"
            href="danh-sach/dang-phat-hanh"
        ></Carousel>
    )
}

export default PublishingComic