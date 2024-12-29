import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (item: string) => {
    try {
        const res = await fetch(item);

        if (!res.ok) {
            throw new Error(`Network response was not ok`);
        }

        const buffer = await res.arrayBuffer();
        const { base64 } = await getPlaiceholder(Buffer.from(buffer));

        return base64;
    } catch (error) {
        console.log("getBase64:", error);
    }
};

export default getBase64;
