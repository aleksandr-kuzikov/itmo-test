import {INewsResponseList} from "../interfaces/INewsResponse";

export const loadNews = async (per_page: number, lang_id: number) => {
    const res = await fetch(`https://news.itmo.ru/api/news/list/?ver=2.0&per_page=${per_page}&lead&language_id=${lang_id}`)
    const data = await res.json()
    return data
}