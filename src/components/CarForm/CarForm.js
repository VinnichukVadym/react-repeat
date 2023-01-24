import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCars, updateCar, setUpdatedCar}) => {

    let {register, setValue, handleSubmit, formState: {errors, isValid}, reset} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    const submit = async (car) => {
        if (updateCar) {
            let {data: newCar} = await carService.update(updateCar.id, car);
            setUpdatedCar(newCar);
        } else {
            let {data: newCar} = await carService.create(car);
            setNewCars(newCar);
        }
        reset();
    };

    useEffect(() => {
        if (updateCar) {
            const {brand, price, year} = updateCar

            setValue('brand', brand);
            setValue('price', price);
            setValue('year', year);
        }
    }, [updateCar, setValue])


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {
    CarForm
}