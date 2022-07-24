import {axiosService} from "./axios.service";

import {urls} from "../constants";

const postService = {
    getPost: (id) => axiosService.get(`${urls.posts}/?userId=${id}`)
}

export {
    postService,
}
