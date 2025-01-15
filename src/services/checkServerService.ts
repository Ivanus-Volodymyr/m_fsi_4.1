import {axiosService} from "./axiosService";

import {urls} from "../api/urls";

export const checkServerService = {
    checkServer: () => axiosService.get<any>(urls.checkServer),
}
