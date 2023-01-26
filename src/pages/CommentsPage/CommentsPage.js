import {Comments} from "../../components";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {

    return (
        <div  style={{display:"flex", justifyContent:"space-around"}}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {
    CommentsPage
}