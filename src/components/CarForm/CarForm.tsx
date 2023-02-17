import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAPPDispatch, useAPPSelector} from "../../hooks";
import {carActions} from "../../redux";

const CarForm: FC = () => {

    const {register, handleSubmit, reset, setValue} = useForm<ICar>();
    const {carForUpdate} = useAPPSelector(({carReducer}) => carReducer);
    const dispatch = useAPPDispatch();

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.createCar({car}));
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        if (carForUpdate) {
            await dispatch(carActions.updateCar({id: carForUpdate.id.toString(), car}))
        }
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue])

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {
    CarForm
}