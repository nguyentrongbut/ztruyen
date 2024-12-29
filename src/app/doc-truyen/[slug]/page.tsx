import axios from "axios";
import getIdFromUrl from "@/components/utils/getIdFromUrl";
import Image from "next/image";
import getBase64 from "@/components/utils/getBase64";


export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    const res = await axios.get(
        `https://sv1.otruyencdn.com/v1/api/chapter/${getIdFromUrl(slug, "-")}`
    );
    const chapter: IReader = res?.data?.data?.item;

    return {
        title: `Đọc truyện ${chapter?.comic_name} - Chương ${chapter?.chapter_name} Online, Mới Nhất`,
        description: `Đọc truyện ${chapter?.comic_name} chương ${chapter?.chapter_name} miễn phí với nội dung hấp dẫn, cập nhật nhanh nhất. Truyện được trình bày rõ ràng, dễ đọc, không quảng cáo.`,
    };
}

const ChapterPage = async ({
                               params,
                           }: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = (await params).slug;
    const res = await axios.get(
        `https://sv1.otruyencdn.com/v1/api/chapter/${getIdFromUrl(slug, "-")}`
    );
    const chapter: IReader = res?.data?.data?.item;

    if (!chapter?.chapter_image || chapter?.chapter_image.length === 0) {
        return <main className="wrapper">No Image Loading....</main>;
    }

    const imagesWithBlur = await Promise.all(
        chapter?.chapter_image.map(async (item) => {
            const imageUrl = `${res?.data?.data?.domain_cdn}/${chapter?.chapter_path}/${item?.image_file}`;
            const blurData = await getBase64(imageUrl);
            return { imageUrl, blurData };
        })
    );

    return (
        <main className="wrapper">
            {imagesWithBlur.map(({ imageUrl, blurData }, index) => (
                <div key={index} className="flex flex-col items-center">
                    <Image
                        src={imageUrl}
                        alt={chapter?.comic_name}
                        width={925}
                        height={1387}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={blurData}
                    />
                </div>
            ))}
        </main>
    );
};

export default ChapterPage;