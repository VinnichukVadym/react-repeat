import {Link} from "react-router-dom";

import css from './Comment.module.css'

const Comment = ({comment: {postId, id, name, email, body}}) => {

    return (
        <div className={css.comment}>
            <Link to={postId.toString()}
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
                <div>postId: {postId}</div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </Link>
        </div>
    );
};

export {
    Comment
}