import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService(`${urls.posts}/${id}`)
}

export {
    postService,
}