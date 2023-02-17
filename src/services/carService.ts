import {axiosService, IRes} from "./axiosService";
import {ICar} from "../interfaces";
import {urls} from "../constants";

const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars.base),
    getById: (id: string): IRes<ICar> => axiosService.get(urls.cars.byId(id)),
    createCar: (car: ICar): IRes<ICar> => axiosService.post(urls.cars.base, car),
    updateCar: (id:string, car: ICar): IRes<ICar> => axiosService.put(urls.cars.byId(id), car),
    deleteCar: (id:string): IRes<ICar> => axiosService.delete(urls.cars.byId(id))
}

export {
    carService,
}