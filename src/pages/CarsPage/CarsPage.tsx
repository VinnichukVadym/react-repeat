import {FC} from "react";
import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../../components";

const CarsPage: FC = () => {

    return (
        <div>
            <hr/>
            <CarForm/>
            <hr/>
            <Outlet/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {
    CarsPage
}