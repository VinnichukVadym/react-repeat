import {useDispatch} from "react-redux";

import {usersActions} from "../../redux";

const User = ({user, user: {id, name, username, email}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => dispatch(usersActions.selectUser(user))}>Select User</button>
            <button onClick={() => dispatch(usersActions.getByIdAsync({id}))}>Select User by Id</button>
        </div>
    );
};

export {
    User
}
