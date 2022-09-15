import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {PostDetails} from "../../components/PostDetails/PostDetails";
import {postsService} from "../../services";

const PostDetailsPage = () => {
    const {state} = useLocation();
    const [post,setPost] = useState(state);
    const {id} = useParams();

    useEffect(()=>{
        if (state){
            setPost(state)
        }else {
            postsService.getById(id).then(({data})=>setPost(data));
        }
    },[state, id])
    return (
        <div>
            {post && <PostDetails key={post.id} post={post}/>}
        </div>
    );
};

export {
    PostDetailsPage
};