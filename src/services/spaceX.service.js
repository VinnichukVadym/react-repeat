import {axiosServiceSpaceX_URL} from "./axiosService";
import {urls} from "../constants";

const spaceXService = {
    getAll: () => axiosServiceSpaceX_URL.get(urls.launches),
}

export {
    spaceXService,
}
