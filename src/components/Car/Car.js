import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car, car: {id, brand, price, year}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>Delete</button>
            <button onClick={() => dispatch(carActions.selectCar(car))}>Update</button>
        </div>
    );
};

export {
    Car
}