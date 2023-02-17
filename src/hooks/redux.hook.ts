import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {AppDispatch, RootState} from "../redux";

const useAPPSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAPPDispatch = () => useDispatch<AppDispatch>();

export {
    useAPPSelector,
    useAPPDispatch
}