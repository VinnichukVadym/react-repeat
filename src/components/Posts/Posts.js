import {Button} from "../Button/Button";

const Posts = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            {id} -- {title} <Button to={id.toString()} state={post}>Get Details</Button>
        </div>
    );
};

export {
    Posts
};