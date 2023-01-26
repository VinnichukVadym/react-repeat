const Album = ({album:{userId, id,title}}) => {

    return (
        <div>
            <br/>
            <div>User ID: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export {
    Album
}