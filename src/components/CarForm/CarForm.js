import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, updateCar, setUpdatedCar, setUpdateCar}) => {
    // const [errors, setErrors] = useState({});

    const {handleSubmit, reset, register, setValue, formState: {errors}} = useForm(
        {
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    }
    );

    useEffect(() => {
        if (updateCar) {
            const {model, price, year} = updateCar;

            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [updateCar, setValue])

    async function mySubmit(car) {
        try {
            if (updateCar) {
                const {data} = await carsService.updateById(updateCar.id, car);
                setUpdatedCar(data);
                setUpdateCar(null);
            } else {
                const {data} = await carsService.createNewCar(car);
                setNewCar(data);
            }
            reset();

        } catch (e) {
            // setErrors(e.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {/*{errors.model && <span>{errors.model[0]}</span>}*/}
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {/*{errors.price && <span>{errors.price[0]}</span>}*/}
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {/*{errors.year && <span>{errors.year[0]}</span>}*/}
            {errors.year && <span>{errors.year.message}</span>}
            <button>{updateCar ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {
    CarForm
};