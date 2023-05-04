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


export type FormUpdateGeneralInfoValues = {
    user_firstname: string;
    user_lastname: string;
    user_city: string;
    user_phone: string;
};

export type FormUpdatePasswordValues = {
    user_password: string;
    user_password_repeat: string;
};

export type FormUpdateAvatarValues = {
    file: FileList;
};

//update user response interfaces
export interface UpdateGeneralInfoValuesResponse {
    status_code: number,
    detail: string,
    result: {
        user_id: number
    }
}

export interface UpdateUserAvatarResponse {
    status_code: number,
    detail: string,
    result: string
}

