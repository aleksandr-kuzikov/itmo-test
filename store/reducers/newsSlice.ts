import {INewsState} from "../../interfaces/INewsState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INewsResponseList} from "../../interfaces/INewsResponse";
import {INews} from "../../interfaces/INews";
import {iNewsResponsItemTOiNews} from "../../helpers/functions";

const initialState: INewsState = {
    news: null,
    page: 0,
    last_page: 0,
    isLoading: false,
    error: '',
    per_page: 9
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        newsFetching(state) {
            state.isLoading = true
        },
        newsFetchingSuccess(state, action: PayloadAction<INewsResponseList>) {
            state.isLoading = false
            state.error = ''
            state.last_page = action.payload.last_page
            state.page = action.payload.page
            state.news = iNewsResponsItemTOiNews(action.payload.news)
        },
        newsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default newsSlice.reducer