import style from './User.module.css';

const User = ({id, name, setUserId, setUserIdForPosts}) => {

    const userDetails = () => {
        setUserId(id)
        setUserIdForPosts(null)
    }

    return (
        <div className={style.user}>
            <div>{id} -- {name} </div>
            <button className={style.btn} onClick={() => userDetails()}>Details</button>
        </div>
    );
};

export {
    User
}
