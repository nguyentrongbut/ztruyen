import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (item: string) => {
    try {
        const res = await fetch(item);

        if (!res.ok) {
            throw new Error(`Failed to fetch image: ${item}`);
        }

        const buffer = await res.arrayBuffer();
        const { base64 } = await getPlaiceholder(Buffer.from(buffer));
        return base64;
    } catch (error) {
        console.error("Error generating placeholder:", error);
        return "";
    }
};

export default getBase64;
