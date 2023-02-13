const User = ({user}) => {

    return (
        <div>
            <div>ID: {user.id}</div>
            <div>Username: {user.username}</div>
        </div>
    );
};

export {
    User
}