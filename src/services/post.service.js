import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getById:(id)=> axiosService.get(`${urls.posts}/${id}`),
}

export {
    postService,
}