import {INews} from "./INews";

export interface INewsState {
    news: INews[] | null,
    page: number,
    last_page: number,
    isLoading: boolean,
    error: string,
    readonly per_page: number,
}