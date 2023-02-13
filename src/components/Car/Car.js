import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car,car:{id,brand,price,year}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.carForUpdate(car))}>Update</button>
            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {
    Car
}