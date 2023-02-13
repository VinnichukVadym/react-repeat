import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carActions} from "../../redux";
import {carValidator} from "../../validators";

const Form = () => {

    const {handleSubmit, reset, register, setValue, formState: {errors}} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {carForUpdate, totalPages} = useSelector(state => state.cars);


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true});
            setValue('price', carForUpdate.price, {shouldValidate:true});
            setValue('year', carForUpdate.year, {shouldValidate:true});
        }
    }, [carForUpdate, setValue])

    const create = async (car) => {
        await dispatch(carActions.createCar({car}))
        navigate(`/cars?page=${totalPages}`)
        reset();
    };

    const update = async (car) => {
        await dispatch(carActions.updateCar({id: carForUpdate.id, car}))
        dispatch(carActions.carForUpdate(null));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
            <div>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <span>{errors.brand.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                {errors.year && <span>{errors.year.message}</span>}
            </div>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {
    Form
}