import {useSelector} from "react-redux";

import {User} from "../../components";

const UserPage = () => {

    const {user} = useSelector(state => state.user);

    return (
        <div>
            {user && <User user={user}/>}
        </div>
    );
};

export {
    UserPage
}