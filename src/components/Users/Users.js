import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import {usersActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const {users} = useSelector(({users}) => users);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(usersActions.getAllAsync());

    }, [dispatch])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {
    Users
}