import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import getBase64 from "@/components/utils/getBase64";


export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const res = await axios.get(`https://otruyenapi.com/v1/api/the-loai/${slug}`);
    const genreName:string = res?.data?.data.titlePage;

    return {
        title: `Kho Truyện Tranh ${genreName} - Truyện Tranh Hay, Cập Nhật Liên Tục`,
        description: `Khám phá kho truyện tranh Trung Quốc thể loại ${genreName} với hình ảnh đẹp, cốt truyện hấp dẫn. Đọc truyện tranh miễn phí, cập nhật liên tục, chất lượng cao.`,
    };
}


const Genre = async ({
                         params,
                     }: {
    params: Promise<{ slug: string }>
}) => {

    const slug = (await params).slug
    const response = await axios.get(`https://otruyenapi.com/v1/api/the-loai`);
    const data: IGenres[] = response?.data?.data?.items;

    const res = await axios.get(`https://otruyenapi.com/v1/api/the-loai/${slug}`);
    const dataGenre: IComic[] = res?.data?.data?.items;

    return (
        <main>
            <nav className="wrapper flex gap-3.5 justify-center container mt-6 mb-8">
                <p className="flex-shrink-0 text-[15px] dark:text-[#ffffffbd] text-[#00000057]">Thể loại</p>
                <ul className="flex gap-3.5 flex-wrap text-[15px]">
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={`/the-loai/${item.slug}`}
                                  className={`active:bg-[#32aaff] active:text-primary rounded-[5px] px-[10px] py-1.5 ${item.slug === slug && "text-[#32aaff]"}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <section className="wrapper flex flex-wrap gap-4 mb-8">
                {dataGenre.map( async (item, index) => {
                    const blurData = await getBase64(`${res?.data?.data?.APP_DOMAIN_CDN_IMAGE}/uploads/comics/${item.thumb_url}`)
                    return (
                        <figure key={index} className="flex flex-col">
                            <Link href={`/truyen-tranh/${item.slug}`}>
                                <Image src={`${res?.data?.data?.APP_DOMAIN_CDN_IMAGE}/uploads/comics/${item.thumb_url}`} width={180} height={240} alt={item.name}
                                       loading="lazy"
                                       placeholder="blur"
                                       blurDataURL={blurData}
                                       className="aspect-[3/4]"></Image>
                            </Link>
                            <figcaption className="w-[180px] text-center mt-1.5 text-sm"><Link href={`/truyen-tranh/${item.slug}`}>{item.name}</Link></figcaption>
                        </figure>
                    )
                })}
            </section>
        </main>
    )
}

export default Genre;