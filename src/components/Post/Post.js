const Post = ({post: {id, title}}) => {

    return (
        <div>
            {id} === {title}
        </div>
    );
};

export {
    Post
};