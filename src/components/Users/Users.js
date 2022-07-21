import {useEffect, useState} from "react";

import {User} from "./User";
import {userService} from "../../services";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAllUsers().then(value => {
        setUsers(value)
        })
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};