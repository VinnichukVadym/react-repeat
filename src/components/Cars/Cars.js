import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setUpdateCar, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, SetDeletedCarId] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data));
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
            // setCars([...cars, newCar])
        }
    }, [newCar])

    useEffect(() => {

        if (deletedCarId) {
            setCars(cars.filter((car) => car.id !== deletedCarId))
        }

        if (updatedCar) {
            const car = cars.find(car => car.id === updatedCar.id)
            Object.assign(car, updatedCar)
            setCars([...cars])
        }
    }, [updatedCar, deletedCarId])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} SetDeletedCar={SetDeletedCarId} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export {
    Cars
};