import {Dogs, Form} from "../../components";
import {useAppReducer} from "../../hooks";

const DogsPage = () => {

    const [, dispatch] = useAppReducer(i => i.dogReducer);

    return (
        <div>
            <Form dispatch={dispatch}/>
            <hr/>
            <Dogs/>
        </div>
    );
};

export {
    DogsPage
}