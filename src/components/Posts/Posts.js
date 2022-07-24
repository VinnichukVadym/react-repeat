import {Post} from "../Post/Post";
import {useEffect, useState} from "react";

import {postService} from "../../services";

const Posts = ({idForGetPost}) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        if (idForGetPost) {
            postService.getPost(idForGetPost).then(({data}) => setPosts(data))
        }
    }, [idForGetPost])

    return (
        <div>
            {idForGetPost && posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts
};