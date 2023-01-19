import React, {useEffect, useState} from 'react';

import {spaceXService} from "../../services/spaceX.service";
import {Launch} from "../Launch/Launch";
import style from "./Launches.module.css";

const Launches = () => {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        spaceXService.getAll().then(({data}) => setLaunches(data))
    }, [])

    let newLaunches = launches.filter(value => value.launch_year !== '2020');

    return (
        <div className={style.spaceX}>
            {newLaunches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {
    Launches
}