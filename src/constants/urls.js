import {RouterEndpoints} from "../routes";

const baseURL = process.env.REACT_APP_API;

const urls = {
    users: RouterEndpoints.users,
    posts: RouterEndpoints.posts,
    comments: RouterEndpoints.comments,
}

export {
    baseURL,
    urls,
}