import {INewsResponseItem} from "../interfaces/INewsResponse";
import {INews} from "../interfaces/INews";

export const iNewsResponsItemTOiNews = (news: INewsResponseItem[]): INews[] => {
    return news.map<INews>(n => ({
        id: n.id,
        date: n.creation_date,
        title: n.title,
        imageUrl: n.image_big,
        preview: n.lead
    }))
}