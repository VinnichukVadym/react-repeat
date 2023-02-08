import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";


const rootReducers = combineReducers({
    users: userReducer,
});


const setStore = ()=> configureStore({
    reducer: rootReducers
});


export{
    setStore,
}
