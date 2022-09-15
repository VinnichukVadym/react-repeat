import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UserDetailsPage, UserPostsPage, UsersPage} from "./pages";
import {PostDetailsPage} from "./pages/PostDetailsPage/PostDetailsPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'user_posts'} element={<UserPostsPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
