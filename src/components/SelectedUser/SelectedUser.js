import {useSelector} from "react-redux";

const SelectedUser = () => {

    const {selectedUser, loading} = useSelector((value) => value.users);

    return (
        <div>
            {loading && <h2>loading......</h2>}
            {selectedUser && <div>{selectedUser.id} -- {selectedUser.name}</div>}
        </div>
    );
};

export {
    SelectedUser
}