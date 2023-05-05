import {env} from "../config/config";

// const API: string = env.API_URL_TEST
const API: string = env.API_URL
export default API;

export const urls = {
    checkServer: '/',
    users: '/users',

    //auth and login
    user: '/user/',
    login: '/auth/login/',

    //profile
    profile: '/auth/me/',

    //update user data
    user_update_info: '/user/',
    user_update_password: '/user/',
    user_update_avatar: '/user/',

    //companies
    companies:'/companies/'

}
