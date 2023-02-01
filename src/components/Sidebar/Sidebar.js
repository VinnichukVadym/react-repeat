import {NavLink, useNavigate} from "react-router-dom";

import css from './Sidebar.module.css';
import {RouterEndpoints} from "../../routes";
import {useAuthContext} from "../../hooks";

const Sidebar = () => {

    const {user, logOut} = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className={css.sidebar}>
            <NavLink to={RouterEndpoints.home}>Home</NavLink>
            <NavLink to={RouterEndpoints.users}>Users</NavLink>
            <NavLink to={RouterEndpoints.posts}>Posts</NavLink>
            <NavLink to={RouterEndpoints.comments}>Comments</NavLink>

            {
                user &&
                <div className={css.user}>
                    <h3>{user}</h3>
                    <button onClick={logOut}>LogOut</button>
                </div>
            }
            {
                !user &&
                <button className={css.btn_log_out} onClick={() => navigate(`/${RouterEndpoints.login}`)}>LogIn</button>
            }
        </div>
    );
};

export {
    Sidebar
}