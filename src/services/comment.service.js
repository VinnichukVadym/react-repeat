import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getAll: () => axiosService.get(urls.comments),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`),
}

export {
    commentService,
}