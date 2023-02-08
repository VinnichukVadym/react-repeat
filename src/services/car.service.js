import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(urls.carById(id)),
    create: (car) => axiosService.post(urls.cars, car),
    update: (id, car) => axiosService.put(urls.carById(id), car),
    delete: (id) => axiosService.delete(urls.carById(id)),
}

export {
    carService,
}