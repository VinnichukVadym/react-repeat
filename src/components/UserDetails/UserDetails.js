import React from 'react';

import css from './UserDetails.module.css'

const UserDetails = ({user}) => {
    return (
        <div className={css.userDetails}>
               <div>Id: {user.id}</div>
               <div>Name: {user.name}</div>
               <div>Username: {user.username}</div>
               <div>Email: {user.email}</div>
               <div>Phone: {user.phone}</div>
               <div>Website: {user.website}</div>
        </div>
    );
};

export {
    UserDetails
}
