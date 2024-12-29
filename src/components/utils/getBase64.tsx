import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (item: string) => {
    try {
        const res = await fetch(item);

        if (!res.ok) {
            throw new Error(`...`);
        }

        const buffer = await res.arrayBuffer();

        const { base64 } = await getPlaiceholder(Buffer.from(buffer));

        return base64;
    } catch (error) {
        console.log(error);
    }
};

export default getBase64;
