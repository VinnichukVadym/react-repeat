import {NavLink} from "react-router-dom";

import {RouterEndpoints} from "../../routes";
import css from './Sidebar.module.css';

const Sidebar = () => {

    return (
        <div className={css.sidebar}>
            <NavLink to={RouterEndpoints.index}>Home</NavLink>
            <NavLink to={RouterEndpoints.users}>Users</NavLink>
            <NavLink to={RouterEndpoints.posts}>Posts</NavLink>
            <NavLink to={RouterEndpoints.comments}>Comments</NavLink>
        </div>
    );
};

export {
    Sidebar
}