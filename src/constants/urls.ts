const baseURL: string | undefined = process.env.REACT_APP_API;

const cars = '/cars';

const urls = {
    cars: {
        base: cars,
        byId: (id: string): string => `${cars}/${id}`
    }
}

export {
    baseURL,
    urls
}