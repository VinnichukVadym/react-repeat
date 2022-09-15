import {Button} from "../Button/Button";

const UserDetails = ({user: {id, name, username, email, phone, website}}) => {

        return (
            <div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
                <div>Website: {website}</div>
                <div>User posts: <Button to={'user_posts'}>Posts</Button>
                </div>
            </div>
        );
    }
;

export {
    UserDetails
};