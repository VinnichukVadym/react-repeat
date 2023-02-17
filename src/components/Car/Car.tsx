import {FC, ReactNode} from "react";
import {useNavigate} from "react-router-dom";

import {ICar} from "../../interfaces";
import {useAPPDispatch} from "../../hooks";
import {carActions} from "../../redux";

interface IProps {
    car: ICar,
    children?: ReactNode,

}

const Car: FC<IProps> = ({car, car: {id, brand, price, year}}) => {

    const navigate = useNavigate();
    const dispatch = useAPPDispatch();
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => navigate(id.toString(), {state: car})}>GetDetails</button>

            <button onClick={() => dispatch(carActions.deleteCar({id: id.toString()}))}>Delete</button>
            <button onClick={() => dispatch(carActions.carForUpdate(car))}>Update</button>
            <br/>
        </div>
    );
};

export {
    Car
}