import {carsService} from "../../services";

const Car = ({car, SetDeletedCar, setUpdateCar}) => {
    const {id, model, price, year} = car

    async function deleteById() {
        await carsService.deleteById(id);
        SetDeletedCar(id);
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>Model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div>
            <button onClick={deleteById}>delete</button>
            <button onClick={() => setUpdateCar(car)}>update</button>
            </div>
            <br/>
        </div>
    );
};

export {
    Car
};