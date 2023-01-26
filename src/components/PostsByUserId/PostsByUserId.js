import {useEffect, useState} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";
import css from './PostsByUserId.module.css';

const PostsByUserId = ({userId}) => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        if (userId) {
            postService.getByUserId(userId).then(({data}) => setPosts(data))
        }
    }, [userId])

    return (
        <div id={'posts'} className={css.posts}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    PostsByUserId
}