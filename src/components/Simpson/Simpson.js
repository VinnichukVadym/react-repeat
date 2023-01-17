import React from 'react';
import './Simpson.css';

export const Simpson = ({name, age, gender, img, description}) => {
    return (
        <div className='simpson'>
            <div>
                <img src={img} alt={name}/>
            </div>
            <div className='txt'>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Gender: {gender}</div>
                <div>Description: {description}</div>
            </div>
        </div>
    );
};
