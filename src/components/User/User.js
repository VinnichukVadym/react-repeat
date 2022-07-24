const User = ({user, user: {id, name}, setUser, setIdForGetPost}) => {
    const click = () => {
        setIdForGetPost(false)
        setUser(user);
    }
    return (
        <div>
            {id} --- {name} &nbsp;{/*spase*/}
            <button onClick={() => click()}>Details</button>
        </div>
    );
};

export {
    User
};