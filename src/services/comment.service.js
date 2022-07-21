import {apiUrl} from "../constants";

const commentService = {
    getAllComments: () => fetch(apiUrl + '/comments').then(value => value.json())
}

export {
    commentService
}