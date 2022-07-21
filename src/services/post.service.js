import {apiUrl} from "../constants";

const postService = {
    getAllPosts: () => fetch(apiUrl + '/posts').then(value => value.json())
}

export {
    postService
}