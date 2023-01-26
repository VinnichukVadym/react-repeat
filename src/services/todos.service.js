import {axiosService} from "./axios.service";
import {urls} from "../constants";

const todosService = {
    getAll:()=> axiosService.get(urls.todos),
}

export {
    todosService,
}