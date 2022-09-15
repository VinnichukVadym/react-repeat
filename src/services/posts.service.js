import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`),
}

export {
    postsService,
}