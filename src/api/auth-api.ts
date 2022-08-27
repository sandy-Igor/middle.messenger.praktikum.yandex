import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './base-api';
import { HOST } from './host';

export type Signin = {
    login: string;
    password: string;
}

export type Signup = {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
    passwordScd: string;
}

export class AuthApi extends BaseAPI {
    private authAPIInstance: HTTPTransport;

    constructor() {
        super();
        this.authAPIInstance = new HTTPTransport();
    }

    signup(data: Signup) {
        return this.authAPIInstance.post(`${HOST}api/v2/auth/signup`, {
            data,
            headers: {
                'content-type': 'application/json',

            },
        });
    }

    signin(data: Signin) {
        return this.authAPIInstance.post(`${HOST}api/v2/auth/signin`, {
            data,
            headers: {
                'content-type': 'application/json',
            },
        });
    }

    getUser() {
        return this.authAPIInstance.get(`${HOST}api/v2/auth/user`)
    }

    logout() {
        return this.authAPIInstance.post(`${HOST}api/v2/auth/logout`);
    }

}