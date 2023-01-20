import {useEffect, useState} from 'react';

import {User, UserDetails} from "../index.js";
import {userService} from "../../services";
import css from './Users.module.css';

const Users = ({setUserIdForPosts}) => {
    let [users, setUsers] = useState([]);
    let [userId, setUserId] = useState(null);
    let [user, setUser] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, [])

    useEffect(() => {
        if (userId) {
            userService.getById(userId).then(({data}) => setUser(data));
        }
    }, [userId])


    return (
        <div className={css.placeholder}>
            <div className={css.users}>
                {users.map(user => <User key={user.id} id={user.id} name={user.name} setUserId={setUserId}
                                         setUserIdForPosts={setUserIdForPosts}/>)}
            </div>

            {user && <UserDetails user={user} setUserIdForPosts={setUserIdForPosts}/>}
        </div>
    );
};

export {
    Users
}