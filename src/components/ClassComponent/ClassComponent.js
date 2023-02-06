import {Component} from "react";

import {Comments, Posts} from "../index";

class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: [], comment: []}
    }

    render() {
        return (
            <div style={{display:"flex"}}>
                <Posts/>
                <hr/>
                <Comments/>
            </div>
        )
    }
}

export {
    ClassComponent,
}