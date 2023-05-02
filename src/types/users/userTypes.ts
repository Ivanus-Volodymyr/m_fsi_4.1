export interface IUser {
    user_id?: number,
    user_email: string,
    user_firstname: string,
    user_lastname: string,
    user_avatar?: null | string,
    user_status?: null | string,
    user_city?: null | string,
    user_phone?: null | string | number,
    user_links?: null | string,
    is_superuser?: boolean
}

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
