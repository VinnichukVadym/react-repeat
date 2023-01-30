import {Users} from "../../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {

    return (
        <div className={'df'}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {
    UsersPage
}