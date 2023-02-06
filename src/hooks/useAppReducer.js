import {useContext} from "react";

import {StateContext} from "../hoc";

const useAppReducer = (item) => item(useContext(StateContext));

export {
    useAppReducer,
}