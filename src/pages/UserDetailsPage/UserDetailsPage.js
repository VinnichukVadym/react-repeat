import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {UserDetails} from "../../components";
import {userService} from "../../servicess";

const UserDetailsPage = () => {
    const [user, setUser] = useState(null);

    const {userId} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
        } else {
            userService.getById(userId).then(({data}) => setUser({...data}))
        }
    }, [state, userId]);
    return (
        <div>
            {user && <UserDetails key={user.id} user={user}/>}
        </div>
    );
};

export {
    UserDetailsPage
}