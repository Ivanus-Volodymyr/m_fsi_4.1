import {axiosService} from "./axiosService";

import {urls} from "../api/urls";
import {
    FormUpdateGeneralInfoValues,
    FormUpdatePasswordValues,
    IFetchOneUserResponse,
    IFetchUsersResponse,
    IRegistrationResponse,
    IUserDataAfterLoginResponse,
    IUserDataToLogin,
    RegistrationValues,
    UpdateGeneralInfoValuesResponse,
    UpdateUserAvatarResponse
} from "../types";


export const usersService = {
    createUser: (user: RegistrationValues) => axiosService.post<IRegistrationResponse>(urls.user, user),
    login: (loginData: IUserDataToLogin) => axiosService.post<IUserDataAfterLoginResponse>(urls.login, loginData),

    //get
    getUsers: (page: number = 1) => axiosService.get<IFetchUsersResponse>(urls.users, {
        params: {
            page_size: 10,
            page
        }
    }),
    getUserById: (userId: number) => axiosService.get<IFetchOneUserResponse>(urls.user + `${userId}`),

    //update
    userUpdateInfo: (
        userId: number,
        userData: FormUpdateGeneralInfoValues
    ) => axiosService.put<UpdateGeneralInfoValuesResponse>(urls.user_update_info + `${userId}/update_info`, userData),
    userUpdatePassword: (
        userId: number,
        userdata: FormUpdatePasswordValues
    ) => axiosService.put<UpdateGeneralInfoValuesResponse>(urls.user_update_password + `${userId}/update_password`, userdata),
    updateUserAvatar: (
        userId: number,
        formData: FormData
    ) => axiosService.put<UpdateUserAvatarResponse>(urls.user_update_avatar + `${userId}/update_avatar`, formData),

    //delete
    deleteUser: (userId: number) => axiosService.delete<UpdateUserAvatarResponse>(urls.user + `${userId}`)
}
