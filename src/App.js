import {Users} from "./components";
import {Posts} from "./components/Posts/Posts";
import {useState} from "react";

function App() {
    const [idForGetPost, setIdForGetPost] = useState(null);

    return (
        <div>
            <Users setIdForGetPost={setIdForGetPost}/>
            <Posts idForGetPost={idForGetPost}/>
        </div>
    );
}

export default App;
