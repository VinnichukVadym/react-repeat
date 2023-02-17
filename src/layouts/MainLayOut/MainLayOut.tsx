import {FC} from "react";
import {Outlet} from "react-router-dom";

const MainLayOut: FC = () => {

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {
    MainLayOut
}