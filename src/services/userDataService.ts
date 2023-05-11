import {axiosService} from "./axiosService";
import {urls} from "../api/urls";

export const userDataService = {
    companiesList: (userId: number) => axiosService.get(urls.user + `${userId}/companies_list/`),
    invitesList: (userId: number) => axiosService.get(urls.user + `${userId}/invites_list`),
    requestList: (userId: number) => axiosService.get(urls.user + `${userId}/request_list`)
}
