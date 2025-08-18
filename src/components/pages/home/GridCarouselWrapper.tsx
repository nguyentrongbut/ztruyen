import GridCarousel from '@/app/@Home/gridCarousel';
import { getListHome } from '@/lib/actions/data';

const GridCarouselWrapper = async () => {

    const listHome = await getListHome();

    return (
        <GridCarousel data={listHome}/>
    )
}

export default GridCarouselWrapper