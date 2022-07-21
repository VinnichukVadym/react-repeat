import {apiUrl} from "../constants";

const userService = {
    getAllUsers: () => fetch(apiUrl + '/users').then(value => value.json()),
}

export {
    userService
}