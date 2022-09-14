const baseURL = process.env.REACT_APP_API;


const urls = {
    cars: '/cars',
}

const modelRegex = /^[a-zA-ZА-яёЁіІїЇ]{1,20}$/;

export default baseURL;

export {
    urls,
    modelRegex,
}