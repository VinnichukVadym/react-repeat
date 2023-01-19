const placeholderURL = process.env.REACT_APP_API_PLACEHOLDER;
const spaceX_URL = process.env.REACT_APP_API_SPACEX;

const urls = {
    users: `${placeholderURL}/users`,
    launches: `${spaceX_URL}/launches`
}


export {
    placeholderURL,
    spaceX_URL,
    urls,
}