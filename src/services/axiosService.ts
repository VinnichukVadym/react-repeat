import axios, {AxiosResponse} from "axios";

import {baseURL} from "../constants";

export type IRes<T>= Promise<AxiosResponse<T>>;
const axiosService = axios.create({baseURL});

export {
    axiosService,
}