import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    update: (id, updatedCar) => axiosService.put(`${urls.cars}/${id}`, updatedCar),
    delete: (id) => axiosService.delete(`${urls.cars}/${id}`),
}

export {
    carService,
}