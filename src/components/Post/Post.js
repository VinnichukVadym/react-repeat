const Post = ({post: {id, title}}) => {

    return (
        <div>
            <div>{id} -- {title}</div>
        </div>
    );
};

export {
    Post
}