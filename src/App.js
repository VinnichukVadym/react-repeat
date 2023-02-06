import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CatsPage, ClassComponentsPage, DogsPage, HomePage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index path={'home'} element={<HomePage/>}/>
                    <Route path={'cats'} element={<CatsPage/>}/>
                    <Route path={'dogs'} element={<DogsPage/>}/>
                    <Route path={'class-component'} element={<ClassComponentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;