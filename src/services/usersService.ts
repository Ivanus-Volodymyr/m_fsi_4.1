import {axiosService} from "./axiosService";

import {urls} from "../api/urls";
import {
    IFetchOneUserResponse,
    IFetchUsersResponse,
    IRegistrationResponse,
    IUserDataAfterLoginResponse,
    IUserDataToLogin,
    RegistrationValues
} from "../types";

export const usersService = {
    createUser: (user: RegistrationValues) => axiosService.post<IRegistrationResponse>(urls.user, user),
    login: (loginData: IUserDataToLogin) => axiosService.post<IUserDataAfterLoginResponse>(urls.login, loginData),

    getUsers: () => axiosService.get<IFetchUsersResponse>(urls.users),
    getUserById: (userId: number) => axiosService.get<IFetchOneUserResponse>(urls.user + `${userId}`),
}
