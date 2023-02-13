const baseURL = process.env.REACT_APP_API;

const cars = '/cars';
const auth = '/auth';

const urls = {
    carsUrls: {
        cars,
        carsById: (id) => `${cars}/${id}`,
        carsPhoto: (id) => `${cars}/${id}/photo`,
    },
    authorization: {
        auth,
        me: `${auth}/me`,
        refresh: `${auth}/refresh`
    },
    users: '/users',

}

export {
    baseURL,
    urls,
}