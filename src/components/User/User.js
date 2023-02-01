import css from './User.module.css';
import {Button} from "../Button/Button";

const User = ({user, user: {id, name}}) => {

    return (
        <div className={css.user}>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <Button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} to={id.toString()}
                    state={user}>Details</Button>
        </div>
    );
};

export {
    User
}