import {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";

import {UserDetails} from "../../components";

const UserDetailsPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);

    useEffect(() => {
        if (state) {
            setUser(state);
        }else{

        }
    }, [state])

    return (
        <div>
            {user && <UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {
    UserDetailsPage
};