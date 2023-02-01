import {Outlet} from "react-router-dom";

import css from './Main.layouts.module.css';
import {Sidebar} from "../../components";

const MainLayout = () => {
    return (
        <div className={css.main}>
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
}