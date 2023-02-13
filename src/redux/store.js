import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer, userReducer} from "./slices";


const rootReducer = combineReducers({
    cars: carReducer,
    user: userReducer,
});


const setupStore = () => configureStore({
    reducer: rootReducer,
});


export {
    setupStore,
}