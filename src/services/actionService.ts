import {axiosService} from "./axiosService";
import {urls} from "../api/urls";

export const actionService = {
    createFromUserToCompany: (
        companyId: number
    ) => axiosService.get(urls.action + `create_from_user/company/${companyId}`),
    createFromCompanyToUser: (
        companyId: number,
        userId: number,
    ) => axiosService.get(urls.action + `create_from_company/${companyId}/user/${userId}`),
    acceptInvite: (actionId: number) => axiosService.get(urls.action + `${actionId}/accept_invite/`),
    acceptRequest: (actionId: number) => axiosService.get(urls.action + `${actionId}/accept_request/`),
    declineAction: (actionId: number) => axiosService.get(urls.action + `${actionId}/decline_action/`),
    addToAdmin: (actionId: number) => axiosService.get(urls.action + `${actionId}/add_to_admin/`),
    removeFromAdmin: (actionId: number) => axiosService.get(urls.action + `${actionId}/remove_from_admin/`),
    addToBlock:(actionId: number) => axiosService.get(urls.action + `${actionId}/add_to_block/`),
    removeFromBlock:(actionId: number) => axiosService.get(urls.action + `${actionId}/remove_from_block/`),
    leaveFromBlock:(actionId: number) => axiosService.get(urls.action + `${actionId}/leave_company/`),
}
