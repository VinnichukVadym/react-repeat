import React from 'react';

import './Character.css';


export const Character = ({id, name, status, species, gender, image}) => {

    return (
        <div className={'card'}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Gender: {gender}</div>
            <div>
                <img src={image} alt={name}/>
            </div>
        </div>
    );
};
