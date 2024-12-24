import {ModeToggle} from "@/components/common/ModeToggle";
import MySwiper from "@/components/common/Swiper";
// import axios from "axios";
import NavbarGenre from "@/components/common/NavbarGenre";

export default async function Home() {
    // const response = await axios.get(`https://otruyenapi.com/v1/api/home`)
    // console.log(response.data);
  return (
      <>
        <main>
            <ModeToggle></ModeToggle>
            <MySwiper></MySwiper>
            <NavbarGenre></NavbarGenre>
        </main>
      </>
  );
}
