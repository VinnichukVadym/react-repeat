import {Navigate, Route, Routes} from "react-router-dom";

import {RouterEndpoints} from "./routes";
import {MainLayout} from "./layouts/Main.layout/Main.layout";
import {
    CommentDetailsPage,
    CommentsPage,
    HomePage,
    LoginPage,
    NotFoundPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UsersPage
} from "./pages";
import {RequireAuth} from "./hoc";


const App = () => {
    return (
        <Routes>
            <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                <Route index element={<Navigate to={RouterEndpoints.home}/>}/>
                <Route path={RouterEndpoints.home} element={<HomePage/>}/>
                <Route path={RouterEndpoints.users} element={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }>
                    <Route path={RouterEndpoints.userId} element={<UserDetailsPage/>}/>
                </Route>
                <Route path={RouterEndpoints.posts} element={
                    <RequireAuth>
                        <PostsPage/>
                    </RequireAuth>
                }>
                    <Route path={RouterEndpoints.postId} element={<PostDetailsPage/>}/>
                </Route>
                <Route path={RouterEndpoints.comments} element={
                    <RequireAuth>
                        <CommentsPage/>
                    </RequireAuth>
                }>
                    <Route path={RouterEndpoints.commentsId} element={<CommentDetailsPage/>}/>
                </Route>
                <Route path={RouterEndpoints.login} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;