import {useLocation,Location} from "react-router-dom";

interface IState<T> extends Location {
    state: T
}

const useAPPLocation = <State>(): IState<State> => useLocation();

export {
    useAPPLocation,
}