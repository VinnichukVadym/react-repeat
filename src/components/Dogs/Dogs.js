import {useAppReducer} from "../../hooks";
import {Dog} from "../Dog/Dog";

const Dogs = () => {

    const [dogs] = useAppReducer(reducer=>reducer.dogReducer);

    return (
        <div>
            {dogs.map(dog=> <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {
    Dogs
}