import Carousel from '@/modules/home/carousel';
import { getListComingSoon } from '@/lib/actions/home';

const ComingSoon = async () => {

    const listComingSoon = await getListComingSoon();

    return (
        <Carousel
            data={listComingSoon}
            title="Truyện Sắp Ra Mắt"
            bgColor
            href="danh-sach/sap-ra-mat"
        ></Carousel>
    )
}

export default ComingSoon