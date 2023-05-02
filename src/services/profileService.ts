import {axiosService} from "./axiosService";
import {IGetProfileResponse} from "../types";
import {urls} from "../api/urls";

export const profileService = {
    getProfile: () => axiosService.get<IGetProfileResponse>(urls.profile),
}
