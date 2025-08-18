import Carousel from '@/components/common/carousel';
import { getListComingSoon } from '@/lib/actions/data';

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