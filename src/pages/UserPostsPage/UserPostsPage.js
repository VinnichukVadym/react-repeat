import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {UserPosts} from "../../components";
import {postsService} from "../../services";

const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {pathname} = useLocation();

    useEffect(() => {
        const strings = pathname.split('/');

        postsService.getByUserId(strings[2]).then(({data})=>setPosts(data))
    }, [pathname])
    return (
        <div>
            {posts && posts.map((value) => <UserPosts key={value.id} post={value}/>)}
        </div>
    );
};

export {
    UserPostsPage
};