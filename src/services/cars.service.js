import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: () => axiosService.get(urls.cars),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    createNewCar: (newCar) => axiosService.post(urls.cars, newCar),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
}

export {
    carsService,
}