import {useAppReducer} from "../../hooks";
import {actions} from "../../reducers";

const Cat = ({cat: {id, name, age}}) => {

    const [,dispatch] = useAppReducer(reducer => reducer.catReducer);

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <button onClick={()=>dispatch(actions.DELETE_BY_ID(id))}>delete</button>
        </div>
    );
};

export {
    Cat
}