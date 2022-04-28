import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {TypeDispatch, TypeState} from "../store/store";

export const useTypedDispatch = () => useDispatch<TypeDispatch>()
export const useTypedSelector: TypedUseSelectorHook<TypeState> = useSelector