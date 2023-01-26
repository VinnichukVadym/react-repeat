import {axiosService} from "./axios.service";
import {urls} from "../constants";

const albumsService = {
    getAll:()=> axiosService.get(urls.albums),
}

export {
    albumsService,
}