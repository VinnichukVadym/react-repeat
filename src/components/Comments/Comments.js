import {Component} from "react";

import {commentService} from "../../services";

class Comments extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {comments: []}
    }

    componentDidMount() {
        commentService.getAll().then(({data}) => this.setState({comments: [...data]}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <div>ID: {comment.id}</div>
                            <div>Post ID: {comment.postId}</div>
                            <div>Email: {comment.email}</div>
                            <div>name : {comment.name}</div>
                            <div>Body: {comment.body}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export {
    Comments,
}