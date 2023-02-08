const baseURL = process.env.REACT_APP_API;

const cars = '/cars';

const urls = {
    cars: cars,
    carById: (id) => `${cars}/${id}`,
}

export {
    baseURL,
    urls,
}