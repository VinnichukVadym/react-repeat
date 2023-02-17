import {FC, useEffect} from "react";
import {useAPPDispatch, useAPPSelector} from "../../hooks";
import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars: FC = () => {

    const {cars} = useAPPSelector(state => state.carReducer);
    const dispatch = useAPPDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch])
    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export {
    Cars
}