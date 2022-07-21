import {useEffect, useState} from "react";
import {commentService} from "../../services";
import {Comment} from "./Comment";

const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getAllComments().then(value => setComments(value));
    }, [])
    return (
        <div>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export {
    Comments
};