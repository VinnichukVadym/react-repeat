import {Button} from "../Button/Button";

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div>
            {id} -- {name} <Button to={id.toString()} state={user}>User details</Button>
        </div>
    );
};

export {
    User
};