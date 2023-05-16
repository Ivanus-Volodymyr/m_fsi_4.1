import {axiosService} from "./axiosService";

import {urls} from "../api/urls";

import {ICompanyDataResponse} from "../types";

export const companyDataService = {
    membersList: (companyId: number) => axiosService.get<ICompanyDataResponse>(urls.company + `${companyId}/members_list/`),
    invitesList: (companyId: number) => axiosService.get<ICompanyDataResponse>(urls.company + `${companyId}/invites_list`),
    requestList: (companyId: number) => axiosService.get<ICompanyDataResponse>(urls.company + `${companyId}/requests_list`),
    blockedUsersList: (companyId: number) => axiosService.get<ICompanyDataResponse>(urls.company + `${companyId}/blocked_list`),
}
