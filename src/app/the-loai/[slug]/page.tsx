import axios from "axios";
import Link from "next/link";

const Genre = async ({
                         params,
                     }: {
    params: Promise<{ slug: string }>
}) => {

    const slug = (await params).slug
    console.log("slug", slug)
    const response = await axios.get(`https://otruyenapi.com/v1/api/the-loai`);
    const data: IGenres[] = response?.data?.data?.items;

    console.log(data);
    return (
        <nav className="wrapper flex gap-3.5 justify-center container mt-6 mb-4">
                <p className="flex-shrink-0 text-[15px] dark:text-[#ffffffbd]">Thể loại</p>
                <ul className="flex gap-3.5 flex-wrap text-[15px]">
                    <li>
                        <Link href={`/the-loai/tat-ca`} className={`active:bg-[#32aaff] active:text-primary rounded-[5px] px-[10px] py-1.5 ${slug === "tat-ca" && "text-[#32aaff]"}`}>Tất cả</Link>
                    </li>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={`/the-loai/${item.slug}`} className={`active:bg-[#32aaff] active:text-primary rounded-[5px] px-[10px] py-1.5 ${item.slug === slug && "text-[#32aaff]"}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}

export default Genre;