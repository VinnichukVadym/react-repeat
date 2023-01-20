import css from './Post.module.css';

const Post = ({post}) => {
    let {id, userId, title, body} = post;

    return (
        <div className={css.post}>
            <div>ID: {id}</div>
            <div>User ID: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {
    Post
}