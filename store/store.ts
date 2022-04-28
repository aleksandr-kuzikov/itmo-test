import {combineReducers, configureStore} from '@reduxjs/toolkit'
import newsReducer from "./reducers/newsSlice";
import langReducer from "./reducers/langSlice";

const rootReducer = combineReducers({
    newsReducer,
    langReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type TypeState = ReturnType<typeof rootReducer>
export type TypeStore = ReturnType<typeof setupStore>
export type TypeDispatch = TypeStore['dispatch']