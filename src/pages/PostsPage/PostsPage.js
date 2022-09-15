import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postsService} from "../../services";
import {Posts} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div style={{display: "flex"}}>
            <div>
                {posts && posts.map((post) => <Posts key={post.id} post={post}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {
    PostsPage
};