import css from './UserDetails.module.css'

const UserDetails = ({user:{id,name,username,email,phone,website},setUserIdForPosts}) => {
    return (
        <div className={css.userDetails}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <button className={css.btn} onClick={()=>setUserIdForPosts(id)}>Posts</button>
        </div>
    );
};

export {
    UserDetails
}
