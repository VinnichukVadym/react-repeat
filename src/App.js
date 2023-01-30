import {Route, Routes} from "react-router-dom";

import {RouterEndpoints} from "./routes";
import {MainLayout} from "./layouts/Main.layout/Main.layout";
import {
    CommentDetailsPage,
    CommentsPage,
    HomePage,
    NotFoundPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UsersPage
} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={RouterEndpoints.users} element={<UsersPage/>}>
                    <Route path={RouterEndpoints.userId} element={<UserDetailsPage/>}/>
                </Route>
                <Route path={RouterEndpoints.posts} element={<PostsPage/>}>
                    <Route path={RouterEndpoints.postId} element={<PostDetailsPage/>}/>
                </Route>
                <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
                    <Route path={RouterEndpoints.commentsId} element={<CommentDetailsPage/>}/>
                </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;