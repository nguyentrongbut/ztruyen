export function getChapterName(slug: string): string {
    const regex = /^(.*?)(-chuong-\d+)/
    const match = slug.match(regex)
    return match ? match[1] : slug
}
