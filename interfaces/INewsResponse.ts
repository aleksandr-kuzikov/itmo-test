export interface INewsResponseList {
    category: number,
    last_page: number,
    news: INewsResponseItem[],
    page: number,
    per_page: number
    total: number
}

export interface INewsResponseItem {
    category: INewsCategory
    creation_date: string,
    date: string,
    id: number,
    image_big: string,
    image_small: string,
    parent_category: INewsCategory
    title: string,
    url: string,
    view_count: number
    lead?: string,
}

interface INewsCategory {
    category_id: number,
    category_title: string,
    color_title: string,
    color: string
}