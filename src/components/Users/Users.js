import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = ({setIdForGetPost}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])


    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setUser={setUser} setIdForGetPost={setIdForGetPost}/>)}
            {user && <UserDetails keu={user.id} user={user} setIdForGetPost={setIdForGetPost}/>}
        </div>
    );
};

export {
    Users
};