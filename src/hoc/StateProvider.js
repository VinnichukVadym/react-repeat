import {createContext, useReducer} from "react";

import {catReducer, dogReducer, initialCats, initialDogs} from "../reducers";

const StateContext = createContext(null);

const StateProvider = ({children}) => {

    const reducers = {
        catReducer: useReducer(catReducer, null, initialCats),
        dogReducer: useReducer(dogReducer, null, initialDogs),
    }

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {
    StateProvider,
    StateContext,
}