import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {

    const {cars, loading} = useSelector(({cars}) => cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch])

    useEffect(() => {
    }, [cars])

    return (
        <div>
            {loading && <h2>Loading.........</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
}