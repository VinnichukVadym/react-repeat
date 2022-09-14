import {useForm} from "react-hook-form";

import {carsService} from "../../services";
import {useEffect, useState} from "react";

const CarForm = ({setNewCar, updateCar, setUpdatedCar, setUpdateCar}) => {
    const [error, setError] = useState([]);

    const {handleSubmit, reset, register, setValue} = useForm();

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
            setError(e.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {error.model && <span>{error.model[0]}</span>}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {error.price && <span>{error.price[0]}</span>}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {error.year && <span>{error.year[0]}</span>}
            <button>{updateCar?'Update':'Create'}</button>
        </form>
    );
};

export {
    CarForm
};