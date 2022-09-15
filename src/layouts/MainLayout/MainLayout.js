import {NavLink, Outlet} from "react-router-dom";

import css from './MainLaiout.module.css'

const MainLayout = () => {

    return (
        <div>
            <div className={css.wrapper}>
                <NavLink to="home">Home</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts">Posts</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
            <div>
                <hr/>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    MainLayout
};