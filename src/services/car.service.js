import {apiService} from "./api.service";
import {urls} from "../constants";

const carService = {
    getAll: (page = 1) => apiService.get(urls.carsUrls.cars, {params: {page}}),
    create: (data) => apiService.post(urls.carsUrls.cars, data),
    updateCar: (id, data) => apiService.put(urls.carsUrls.carsById(id), data),
    deleteCar: (id) => apiService.delete(urls.carsUrls.carsById(id)),
}

export {
    carService
}