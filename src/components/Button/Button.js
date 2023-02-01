import {Link} from "react-router-dom";

import css from './Button.module.css';

const Button = ({children, to, state, ...arg}) => {

    return (
        <Link to={to} state={state}>
            <button className={css.btn} {...arg}>{children}</button>
        </Link>
    );
};

export {
    Button
}