import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getByUserId: (id)=> axiosService.get(`${urls.users}/${id}/posts`),
}

export {
    postService
}