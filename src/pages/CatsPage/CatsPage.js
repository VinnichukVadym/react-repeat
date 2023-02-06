import {Cats, Form} from "../../components";
import {useAppReducer} from "../../hooks";

const CatsPage = () => {
    const [, dispatch] = useAppReducer(i => i.catReducer);

    return (
        <div>
            <Form dispatch={dispatch}/>
            <hr/>
            <Cats/>
        </div>
    );
};

export {
    CatsPage
}