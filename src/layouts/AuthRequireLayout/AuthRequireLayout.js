import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../redux";

const AuthRequireLayout = () => {

    const dispatch = useDispatch();
    const {errors} = useSelector(state => state.cars);
    const navigate = useNavigate();


    useEffect(() => {
        if (errors) {
            navigate('/login');
            dispatch(userActions.userNotAuth());
            alert('You not authorization! Please Log In');
        }

    }, [dispatch, navigate, errors])

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {
    AuthRequireLayout
}