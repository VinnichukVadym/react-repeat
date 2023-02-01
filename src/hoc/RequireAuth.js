import {Navigate, useLocation} from "react-router-dom";

import {useAuthContext} from "../hooks";
import {RouterEndpoints} from "../routes";

const RequireAuth = ({children}) => {

    const {user} = useAuthContext();
    const {pathname} = useLocation();

    console.log(user)
    if (!user) {
        return <Navigate to={`/${RouterEndpoints.login}`} state={pathname}/> ;
    }

    return children;
};

export {
    RequireAuth
}