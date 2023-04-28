import {axiosService} from "./axiosService";
import {urls} from "../api/urls";

export const usersService = {
    getUsers: () => axiosService.get<any>(urls.users),
}
