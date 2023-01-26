import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from './Post.module.css';
import {postService} from "../../services";
import {PostDetails} from "../PostDetails/PostDetails";

const Post = () => {

    const {postId} = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        if (postId) {
            postService.getById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])

    return (
        <div className={css.post}>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {
    Post
}