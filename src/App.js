import './App.css';

import {Comments, Posts, Users} from "./components";

function App() {
    return (
        <div className={'wrapper'}>
            <div>
                <Users/>
                <hr/>
                <Posts/>
            </div>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;
