import style from './User.module.css';

const User = ({id, name, setUserId}) => {
    return (
        <div className={style.user}>
            <div>{id} -- {name} </div>
            <button className={style.btn} onClick={() => setUserId(id)}>Details</button>
        </div>
    );
};

export {
    User
}
