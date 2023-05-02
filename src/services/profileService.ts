import {axiosService} from "./axiosService";
import {IGetProfileResponse} from "../types";
import {urls} from "../api/urls";

export const profileService = {
    getProfile: (access_token: string) => axiosService.get<IGetProfileResponse>(urls.profile, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
}
