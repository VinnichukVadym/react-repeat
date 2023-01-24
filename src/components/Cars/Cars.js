import {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCars, setUpdateCar, updatedCar}) => {

    let [cars, setCars] = useState([]);
    let [id, setId] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCars) {
            setCars(prevState => [...prevState, newCars])
        }
    }, [newCars])

    useEffect(() => {
        if (updatedCar) {
            let car = cars.find(value => value.id === updatedCar.id);
            Object.assign(car, updatedCar);
            setCars(prevState => [...prevState])

            setUpdateCar(null);
        }
    }, [updatedCar])

    useEffect(() => {
        if (id) {
            carService.delete(id).then();

            setCars(cars.filter(car => car.id !== id));
        }
    }, [id])

    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car} setId={setId} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export {
    Cars
}
