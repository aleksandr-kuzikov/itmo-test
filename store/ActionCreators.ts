import {TypeDispatch} from "./store";
import {newsSlice} from "./reducers/newsSlice";
import {loadNews} from "../helpers/queries";

export const fetchNews = (per_page: number, lang_id: number) => async (dispatch: TypeDispatch) => {
    try {
        dispatch(newsSlice.actions.newsFetching())
        const data = await loadNews(per_page, lang_id)
        dispatch(newsSlice.actions.newsFetchingSuccess(data))
    } catch (e) {
        dispatch(newsSlice.actions.newsFetchingError('Ошибка выполнения запроса'))
    }
}