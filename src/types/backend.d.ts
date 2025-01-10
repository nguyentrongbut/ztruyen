export {}

declare global {
    interface IGenres {
        id: string
        slug: string
        name: string
    }

    interface IComic {
        id: string
        name: string
        slug: string
        origin_name: string[]
        status: string
        thumb_url: string
        sub_docquyen: boolean
        category: ICategory[]
        updatedAt: string
        chaptersLatest: null | IChapter[]
    }

    interface ICategory {
        id: string
        name: string
        slug: string
    }

    interface IDetail {
        id: string
        name: string
        slug: string
        origin_name: string[]
        content: string
        status: string
        thumb_url: string
        sub_docquyen: boolean
        author: string[]
        category: ICategory[]
        chapters: IChapters[]
        updatedAt: string
    }

    interface IChapter {
        filename: string
        chapter_name: string
        chapter_title: string
        chapter_api_data: string
    }

    interface IReader {
        id: string
        comic_name: string
        chapter_name: string
        chapter_title: string
        chapter_path: string
        chapter_image: IChapterImg[]
    }

    interface IChapterImg {
        image_page: number
        image_file: string
    }
}
