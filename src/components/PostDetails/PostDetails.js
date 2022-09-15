const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {
    PostDetails
};