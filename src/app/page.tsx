import axios from 'axios';
import NavbarGenre from '@/components/common/NavbarGenre';
import GridCarousel from '@/app/@Home/gridCarousel';

export default async function Home() {
    const response = await axios.get(`https://otruyenapi.com/v1/api/home`);
    const data = response?.data?.data?.items;
    return (
        <>
            <main>
                <GridCarousel data={data}></GridCarousel>
                <NavbarGenre></NavbarGenre>
            </main>
        </>
    );
}
