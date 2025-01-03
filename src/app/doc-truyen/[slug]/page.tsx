import axios from "axios";
import getIdFromUrl from "@/components/utils/getIdFromUrl";
import Image from "next/image";
import {dynamicBlurDataUrl} from "@/components/utils/dynamicBlurDataUrl";


export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const res = await axios.get(`https://sv1.otruyencdn.com/v1/api/chapter/${getIdFromUrl(slug, "-")}`);
    const chapter: IReader = res?.data?.data?.item;

    return {
        title: `Đọc truyện ${chapter?.comic_name} - Chương ${chapter?.chapter_name} Online, Mới Nhất`,
        description: `Đọc truyện ${chapter?.comic_name} chương ${chapter?.chapter_name} miễn phí với nội dung hấp dẫn, cập nhật nhanh nhất. Truyện được trình bày rõ ràng, dễ đọc, không quảng cáo.`,
    };
}

const ChapterPage = async  ({
                         params,
                     }: {
    params: Promise<{ slug: string }>
}) => {
    const slug = (await params).slug
    const res = await axios.get(`https://sv1.otruyencdn.com/v1/api/chapter/${getIdFromUrl(slug, "-")}`);
    const chapter: IReader = res?.data?.data?.item;

    const placeholders = await Promise.all(
        chapter?.chapter_image.map(url => dynamicBlurDataUrl(`${res?.data?.data?.domain_cdn}/${chapter?.chapter_path}/${url.image_file}`))
    )

    return (
        <main className="wrapper">
            {chapter?.chapter_image && chapter?.chapter_image.length > 0 ?
                chapter?.chapter_image.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col items-center">
                        <Image key={index}
                               src={`${res?.data?.data?.domain_cdn}/${chapter?.chapter_path}/${item?.image_file}`}
                               alt={chapter?.comic_name}
                               width={925} height={1387}
                               sizes="(max-width: 50px) 2vw, max-width: 1920px) 925px)"
                               quality="60"
                               priority={index <= 0 ? true : false}
                               placeholder="blur"
                               blurDataURL={placeholders[index]}
                        ></Image>
                    </div>
                )
            })
            : "No Image Loading...."
            }
        </main>
    )
}

export default ChapterPage;