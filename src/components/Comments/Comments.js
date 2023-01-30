import {useEffect, useState} from "react";

import {Comment} from "../Comment/Comment";
import {commentService} from "../../servicess";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {
    Comments
}