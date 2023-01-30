const Comment = ({comment: {id, email}}) => {

    return (
        <div>
            <div>{id} -- {email}</div>
        </div>
    );
};

export {
    Comment
}