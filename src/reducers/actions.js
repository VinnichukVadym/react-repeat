import {actionsType} from "../constants";

const actions = {
    ADD: (item) => ({type: actionsType.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: actionsType.DELETE_BY_ID, payload: id}),
}

export {
    actions
}
