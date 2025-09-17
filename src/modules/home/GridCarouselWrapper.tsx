import GridCarousel from '@/modules/home/gridCarousel';
import { getListHome } from '@/lib/actions/home';

const GridCarouselWrapper = async () => {

    const listHome = await getListHome();

    return (
        <GridCarousel data={listHome}/>
    )
}

export default GridCarouselWrapper