import {apiService} from "./api.service";
import {urls} from "../constants";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'

const authService = {
    login: async (cred) => {
        const response = await apiService.post(urls.authorization.auth, cred);

        if (response.status === 200) {
            authService.setTokens(response.data.access, response.data.refresh);
        }

    },
    refreshToken: async (refresh) => {
        const response = await apiService.post(urls.authorization.refresh, {refresh});

        if (response.status === 200) {
            authService.setTokens(response.data.access, response.data.refresh);
        }
    },
    me: () => apiService.get(urls.authorization.me),

    setTokens: (access, refresh) => {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },
    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),
    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    },
    isAuthenticated: () => !!localStorage.getItem(accessTokenKey),

}

export {
    authService,
}