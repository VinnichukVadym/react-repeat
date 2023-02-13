import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../constants";
import {authService} from "./auth.service";

const history = createBrowserHistory();
const apiService = axios.create({baseURL});

apiService.interceptors.request.use(config => {
    if (authService.isAuthenticated()) {
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
})

let isRefreshing = false;

apiService.interceptors.response.use(config => {
        return config;
    },
    async error => {

        const refreshToken = authService.getRefreshToken();

        if (error.response?.status === 401 && !isRefreshing && refreshToken) {
            isRefreshing = true;

            try {
                await authService.refreshToken(refreshToken);
            } catch (e) {
                authService.deleteTokens();
                history.replace('/login?expSession=true')
            }

            isRefreshing = false;
            return apiService(error.config);
        }

        return Promise.reject(error);
    })


export {
    apiService,
    history,
}