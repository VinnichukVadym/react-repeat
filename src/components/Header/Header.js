import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {

    return (
        <div className={css.header}>
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'cats'}>Cats</NavLink>
            <NavLink to={'dogs'}>Dogs</NavLink>
            <NavLink to={'class-component'}>Class Component</NavLink>
        </div>
    );
};

export {
    Header
}