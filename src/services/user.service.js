import {apiService} from "./api.service";
import {urls} from "../constants";

const userService = {
    createUser: (user) => apiService.post(urls.users, user),
}

export {
    userService,
}