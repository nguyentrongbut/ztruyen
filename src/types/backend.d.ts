export { }

declare global {
    interface IGenres {
        id: string;
        slug: string;
        name: string;
    }

    interface IComic {
        id: string;
        name: string;
        slug: string;
        origin_name: string[]
        status: string;
        thumb_url: string;
        sub_docquyen: boolean;
        category: ICategory[];
        updatedAt: string;
        chaptersLatest: null | string;
    }

    interface ICategory {
        id: string;
        name: string;
        slug: string;
    }
}