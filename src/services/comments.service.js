import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`),
    getByPostId: (id) => axiosService.get(`${urls.comments}?postId=${id}`),
}

export {
    commentsService,
}