import {env} from "../config/config";

const API: string = env.API_URL_TEST
// const API: string = env.API_URL
export default API;

export const urls = {
    checkServer: '/',
    users:'/users'
}
