import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAPPDispatch, useAPPLocation, useAPPSelector} from "../../hooks";
import {carActions} from "../../redux";
import {ICar} from "../../interfaces";

const CarDetailsPage: FC = () => {

    const {id} = useParams<{ id: string }>();
    const {state} = useAPPLocation<ICar>();

    const dispatch = useAPPDispatch();
    const {carById} = useAPPSelector(({carReducer}) => carReducer);

    useEffect(() => {
        if (state) {
            dispatch(carActions.chooseCar(state));
        } else {
            dispatch(carActions.getById({id: id!}))
        }
    }, [state, id, dispatch])

    return (
        <div>
            {carById && carById.brand}
        </div>
    );
};

export {
    CarDetailsPage
}