import {actionsType} from "../constants";

const initialDogs = () => [];

const dogReducer = (state, action) => {
    switch (action.type) {
        case actionsType.ADD:
            const id = state.length ? state[state.length - 1].id + 1 : 1;
            return [...state, {id, ...action.payload}];
        case actionsType.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
}

export {
    initialDogs,
    dogReducer,
}
