import {IProfile} from "../profile/profileTypes";

export interface IUserDataToLogin {
    user_email: string;
    user_password: string;
}

export interface IUserDataAfterLoginResponse {
    status_code: number;
    detail: string;
    result: {
        access_token: string;
        token_type: string;
    }
}

export interface IFetchOneUserResponse {
    status_code: number;
    detail: string;
    result: IProfile;
}
