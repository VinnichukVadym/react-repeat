import {useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import css from './LoginPage.module.css';
import {useAuthContext} from "../../hooks";
import {RouterEndpoints} from "../../routes";

const LoginPage = () => {

    const {logIn} = useAuthContext();
    const loginUser = useRef();
    const navigate = useNavigate();
    const {state} = useLocation();


    const login = (e) => {
        e.preventDefault();
        logIn(loginUser.current.value);
        navigate(state || RouterEndpoints.index, {replace: true})

    };

    return (
        <div className={css.login}>
            <form className={css.content} onSubmit={(e) => login(e)}>
                <input className={css.username} type="text" placeholder={'Enter Username'} ref={loginUser}/>
                <button className={css.btn}>Login</button>
            </form>
        </div>
    );
};

export {
    LoginPage
}