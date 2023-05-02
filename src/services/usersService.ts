import {axiosService} from "./axiosService";

import {urls} from "../api/urls";
import {
    IFetchUsersResponse,
    IRegistrationResponse,
    IUserDataAfterLoginResponse,
    IUserDataToLogin,
    RegistrationValues
} from "../types";

export const usersService = {
    getUsers: () => axiosService.get<IFetchUsersResponse>(urls.users),
    createUser: (user: RegistrationValues) => axiosService.post<IRegistrationResponse>(urls.user, user),
    login: (loginData: IUserDataToLogin) => axiosService.post<IUserDataAfterLoginResponse>(urls.login, loginData),
}
