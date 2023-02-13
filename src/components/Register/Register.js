import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators";
import {userActions} from "../../redux";

const Register = () => {

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {errors: userErrors} = useSelector(state => state.user);

    const registerUser = async (cred) => {

        const {payload} = await dispatch(userActions.registerUser({cred}));

        if (payload.created) {
            navigate('/login');
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <div>
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div>
                <input type="text" placeholder={'password'} {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button>Register</button>
            {userErrors && <div>{userErrors.username[0]}</div>}
        </form>
    );
};

export {
    Register
}