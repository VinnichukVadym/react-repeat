import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import {carActions} from "../../redux";

const Form = () => {

    const {handleSubmit, register, setValue, formState: {errors, isValid}, reset}
        = useForm({mode: "all", resolver: joiResolver(carValidator)});

    const dispatch = useDispatch();
    const {selectedCar} = useSelector(({cars}) => cars);


    useEffect(() => {
        if (selectedCar) {
            setValue('brand', selectedCar.brand,{shouldValidate:true});
            setValue('price', selectedCar.price,{shouldValidate:true});
            setValue('year', selectedCar.year,{shouldValidate:true});
        }
    }, [selectedCar, setValue])

    const save = (car) => {
        dispatch(carActions.createCar({car}));
        reset();
    };

    const update = (car) => {
        dispatch(carActions.updateCar({id: selectedCar.id, car}));
        dispatch(carActions.selectCar(null));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(selectedCar ? update : save)}>

            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{selectedCar ? 'Update' : 'Create'}</button>

        </form>
    );
};

export {
    Form
}