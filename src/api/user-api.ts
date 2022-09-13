import { BaseAPI } from './base-api';
import HTTPTransport from '../utils/HTTPTransport';
import { HOST } from './host';

export type ChangeUser = {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
    passwordScd: string;
    avatar?: string
}

export type ChangePass = {
    oldPassword: string;
    newPassword: string;
}

export type ChangeAvatar = {
    avatar: File;
}

export class UserApi extends BaseAPI {
    private userAPIInstance: HTTPTransport;

    constructor() {
        super();
        this.userAPIInstance = new HTTPTransport();
    }

    changeProfile(data: ChangeUser) {
        return this.userAPIInstance.put(`${HOST}api/v2/user/profile`, {
            data,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    changePassword(data: ChangePass) {
        return this.userAPIInstance.put(`${HOST}api/v2/user/password`, {
            data,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    changeAvatar(data: ChangeAvatar) {
        return this.userAPIInstance.put(`${HOST}api/v2/user/profile/avatar`, {
            data,
        })
    }

}