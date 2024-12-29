import slugify from "slugify";

const covertSlugUrl = (str: string) => {
    if (!str) return "";
    str = slugify(str, { lower: true, locale: 'vn' });
    return str;
}

export default covertSlugUrl;