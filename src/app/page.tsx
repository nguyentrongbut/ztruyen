import MySwiper from '@/components/common/Swiper';
// import axios from "axios";
import NavbarGenre from '@/components/common/NavbarGenre';
import Header from '@/components/common/Header';

export default async function Home() {
    // const response = await axios.get(`https://otruyenapi.com/v1/api/home`)
    // console.log(response.data);
    return (
        <>
            <main>
                <MySwiper></MySwiper>
                <NavbarGenre></NavbarGenre>
            </main>
        </>
    );
}
