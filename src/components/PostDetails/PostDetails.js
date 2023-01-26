const PostDetails = ({post:{userId,id,title,body}}) => {

    return (
        <div>
            <h2>Post</h2>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {
    PostDetails
}