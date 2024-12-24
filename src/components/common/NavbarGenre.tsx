import axios from "axios";
import Link from "next/link";

const NavbarGenre = async () => {
    const response = await axios.get(`https://otruyenapi.com/v1/api/the-loai`);
    const data: IGenres[] = response?.data?.data?.items;

    console.log(data);

    return (
        <nav className="conatiner flex justify-center py-[26px] bg-secondary text-primary dark:bg-primary dark:text-secondary">
            <ul className="flex gap-7 text-[15px]">
                {data.slice(0, 8).map((item, index) => (
                    <li key={index}>
                        <Link href={`/the-loai/${item.slug}`}>{item.name}</Link>
                    </li>
                ))}
                <li>
                    <Link href={`/the-loai/tat-ca`}>Tất cả ></Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarGenre;
