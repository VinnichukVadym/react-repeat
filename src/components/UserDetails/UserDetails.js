const UserDetails = ({user: {id, name, username, email, phone, website}, setIdForGetPost}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <button onClick={()=>setIdForGetPost(id)}>Get Posts</button>
        </div>
    );
};

export {
    UserDetails
};

