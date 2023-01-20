import {useState} from "react";

import {Launches, PostsByUserId, Users} from "./components";

const App = () => {
    let [userIdForPosts, setUserIdForPosts] = useState(null);

    return (
        <div>
            <Users setUserIdForPosts={setUserIdForPosts}/>
            { userIdForPosts && <PostsByUserId userId={userIdForPosts}/>}
            <Launches/>
        </div>
    );
};

export default App;