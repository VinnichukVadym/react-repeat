import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css';
import {userActions} from "../../redux";
import {authService} from "../../services";

const Header = () => {

    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        dispatch(userActions.userNotAuth());
        authService.deleteTokens();
        navigate('/login')
    };

    return (
        <div className={css.header}>
            <div className={css.header__links_data}>
                <NavLink to={'home'}>Home</NavLink>
                <NavLink to={'cars'}>Cars</NavLink>
            </div>
            {!user && <div className={css.header__links_auth}>
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'register'}>Register</NavLink>
            </div>}
            {user && <div className={css.user}>
                <NavLink to={'user'}>{user.username}</NavLink>
                <button onClick={() => logOut()}>LogOut</button>
            </div>}
        </div>
    );
};

export {
    Header
}