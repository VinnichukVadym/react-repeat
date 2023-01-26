const Todo = ({todo: {userId, id, title, completed}}) => {

    return (
        <div>
            <br/>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed.toString()}</div>
        </div>
    );
};

export {
    Todo
}