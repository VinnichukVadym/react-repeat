import axios from "axios";

import {placeholderURL, spaceX_URL} from "../constants";

const axiosService = axios.create({baseURL:placeholderURL});
const axiosServiceSpaceX_URL = axios.create({baseURL:spaceX_URL});

export {
    axiosService,
    axiosServiceSpaceX_URL,
}