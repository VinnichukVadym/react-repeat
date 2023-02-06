import {useForm} from "react-hook-form";

import {actions} from "../../reducers";

const Form = ({dispatch}) => {

    const {register, reset, handleSubmit} = useForm();


    const save = (data) => {
        dispatch(actions.ADD(data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
            <button>Save</button>
        </form>
    );
};

export {
    Form
}