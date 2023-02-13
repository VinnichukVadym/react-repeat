import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {Header} from "../../components";


const MainLayout = () => {


    const {errors} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!errors) {
            dispatch(userActions.me());
        }
    }, [dispatch, errors])

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
}
