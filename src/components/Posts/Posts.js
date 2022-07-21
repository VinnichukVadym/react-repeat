import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "./Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAllPosts().then(value => setPosts(value))
    }, [])

    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export {
    Posts
};