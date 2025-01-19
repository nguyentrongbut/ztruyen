import axios from 'axios';
import NavbarGenre from '@/components/common/NavbarGenre';
import GridCarousel from '@/app/@Home/gridCarousel';
import Carousel from '@/components/common/carousel';

export default async function Home() {
    const resHome = await axios.get(`https://otruyenapi.com/v1/api/home`);
    const resPublishing = await axios.get(
        `https://otruyenapi.com/v1/api/danh-sach/dang-phat-hanh?sort_field=updatedAt`
    );
    const resComp = await axios.get(
        `https://otruyenapi.com/v1/api/danh-sach/hoan-thanh?sort_field=updatedAt`
    );
    const resCs = await axios.get(
        `https://otruyenapi.com/v1/api/danh-sach/sap-ra-mat?sort_field=updatedAt`
    );

    const data = resHome?.data?.data?.items;
    const dataPublishing = resPublishing?.data?.data?.items;
    const dataComp = resComp?.data?.data?.items;
    const dataCs = resCs?.data?.data?.items;
    return (
        <>
            <main>
                <GridCarousel data={data}></GridCarousel>
                <NavbarGenre></NavbarGenre>
                <Carousel
                    data={dataCs}
                    title="Truyện Sắp Ra Mắt"
                    href="sap-ra-mat"
                ></Carousel>
                <Carousel
                    data={dataPublishing}
                    title="Truyện Đang Phát Hành"
                    bgColor={true}
                    href="dang-phat-hanh"
                ></Carousel>
                <Carousel
                    data={dataComp}
                    title="Truyện Đã Hoàn Thành"
                    href="hoan-thanh"
                ></Carousel>
            </main>
        </>
    );
}
