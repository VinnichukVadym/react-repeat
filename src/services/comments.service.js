import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentsService = {
    getAll:()=> axiosService.get(urls.comments),
}

export {
    commentsService,
}