import {axiosService} from "./axiosService";

import {urls} from "../api/urls";
import {ICheckServerResponse} from "../types";

export const checkServerService = {
    checkServer: () => axiosService.get<ICheckServerResponse>(urls.checkServer),
}
