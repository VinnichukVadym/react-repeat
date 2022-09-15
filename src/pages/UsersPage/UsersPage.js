import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {usersService} from "../../services";
import {User} from "../../components";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {users.map((user) => <User key={user.id} user={user}/>)}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {
    UsersPage
};