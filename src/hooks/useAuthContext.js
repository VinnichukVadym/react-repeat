import {useContext} from "react";

import {AuthContext} from "../hoc";

const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
}
