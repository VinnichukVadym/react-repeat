import {useAppReducer} from "../../hooks";
import {Cat} from "../Cat/Cat";

const Cats = () => {

    const [cats] = useAppReducer((reducer) => reducer.catReducer);

    return (
        <div>
            {cats.map(cat=><Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export {
    Cats
}