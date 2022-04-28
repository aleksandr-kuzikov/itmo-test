import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILangState} from "../../interfaces/ILangState";
import flagRus from '../../public/Flag-RUS.svg'
import flagEng from '../../public/Flag-ENG.svg'
import {ILanguage} from "../../interfaces/ILanguage";

const initialState: ILangState = {
    languages: [{
        id: 2,
        label: 'Eng',
        imageUrl: flagEng
    }, {
        id: 1,
        label: 'Рус',
        imageUrl: flagRus
    }],
    current: {
        id: 1,
        label: 'Рус',
        imageUrl: flagRus
    }
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang(state, action: PayloadAction<ILanguage>) {
            state.current = action.payload
        }
    }
})

export default langSlice.reducer