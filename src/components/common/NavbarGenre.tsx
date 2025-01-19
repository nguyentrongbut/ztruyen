import axios from 'axios';
import Link from 'next/link';

const NavbarGenre = async () => {
    const response = await axios.get(`https://otruyenapi.com/v1/api/the-loai`);
    const data: IGenres[] = response?.data?.data?.items;

    return (
        <nav className="flex justify-center py-[26px] bg-secondary text-primary dark:bg-black dark:text-primary">
            <ul className="flex gap-7 text-[15px] container justify-center wrapper">
                {data.slice(0, 8).map((item, index) => (
                    <li key={index}>
                        <Link href={`/the-loai/${item.slug}`}>{item.name}</Link>
                    </li>
                ))}
                <li>
                    <Link href={`/the-loai/tat-ca`}>Tất cả</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarGenre;
