import React from 'react';
import style from "./Launch.module.css";



const Launch = ({launch}) => {
    let {flight_number, mission_name,launch_year,links:{mission_patch_small}} = launch;

    return (
        <div className={style.card}>
            <div>{flight_number}</div>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {
    Launch
}