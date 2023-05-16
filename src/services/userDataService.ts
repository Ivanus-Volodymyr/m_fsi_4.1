import {axiosService} from "./axiosService";

import {urls} from "../api/urls";

import {UserDataResponse} from "../types";

export const userDataService = {
    companiesList: (userId: number) => axiosService.get<UserDataResponse>(urls.user + `${userId}/companies_list/`),
    invitesList: (userId: number) => axiosService.get<UserDataResponse>(urls.user + `${userId}/invites_list`),
    requestsList: (userId: number) => axiosService.get<UserDataResponse>(urls.user + `${userId}/requests_list`)
}
