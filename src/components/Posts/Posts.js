import {Component} from "react";

import {postService} from "../../services";

class Posts extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {posts: []}
    }

    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({posts: [...data]}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => {
                    return (
                        <div key={post.id}>
                            <div>ID: {post.id}</div>
                            <div>User ID: {post.userId}</div>
                            <div>Title: {post.title}</div>
                            <div>Body: {post.body}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export {
    Posts,
}