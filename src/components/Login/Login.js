import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {userValidator} from "../../validators";
import {carActions, userActions} from "../../redux";

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "all",
        resolver: joiResolver(userValidator)
    });


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logIn = async (credentials) => {
        const {payload} = await dispatch(userActions.loginUser({cred: credentials}));
        if (!payload) {
            await dispatch(carActions.clearErrors());
            navigate('/cars');
        }
    };

    return (
        <form onSubmit={handleSubmit(logIn)}>
            <div>
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'password'} {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button>LogIn</button>
        </form>
    );
};

export {
    Login
}