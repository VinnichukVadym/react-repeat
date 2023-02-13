import {Navigate, Route, Routes} from "react-router-dom";

import {AuthRequireLayout, MainLayout} from "./layouts";
import {CarsPage, HomePage, LoginPage, RegisterPage, UserPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'user'} element={<UserPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;