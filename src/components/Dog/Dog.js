import {useAppReducer} from "../../hooks";
import {actions} from "../../reducers";

const Dog = ({dog: {id, name, age}}) => {

    const [, dispatch] = useAppReducer(reducer => reducer.dogReducer);

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <button onClick={() => dispatch(actions.DELETE_BY_ID(id))}>delete</button>
        </div>
    );
};

export {
    Dog
}