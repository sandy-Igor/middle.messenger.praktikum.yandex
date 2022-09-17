import { AuthApi } from '../api/auth-api';
import store from '../store/Store';
import { ChangeAvatar, ChangePass, ChangeUser, UserApi } from '../api/user-api';
import * as avatarImage from '../static/avatar-png-icon.png';
import { router } from '../router/router';

const user = new AuthApi();
const userApi = new UserApi();

class UserController {
    public getUser() {
        return user.getUser()
            .then((r: XMLHttpRequest) => {
                if(r.status === 200 && document.location.pathname !== '/chatPage') {
                    router.go('/chatPage');
                }
                return JSON.parse(r?.response as string)
            })
            .then(data => {
                store.set(`user`, data);
                if (data.avatar) {
                    store.set('user.avatar', `https://ya-praktikum.tech/api/v2/resources${data.avatar}`);
                } else {
                    store.set('user.avatar', avatarImage);
                }
                return data;
            })
            .catch((err) => {
                console.log(err)
            })
    }

    public changeProfile(data: ChangeUser) {
        return userApi.changeProfile(data)
            .then(r => {
                return r as XMLHttpRequest;
            })
            .then(data => {
                return (JSON.parse(data.response as string));
            })
            .then((data) => {
                store.set(`user`, data);
                if (data.avatar) {
                    store.set('user.avatar', `https://ya-praktikum.tech/api/v2/resources${data.avatar}`);
                } else {
                    store.set('user.avatar', avatarImage);
                }
            });
    }

    public changeAvatar(data: HTMLFormElement) {
        const formData = new FormData(data);
        console.log(formData);
        return userApi.changeAvatar(formData as unknown as ChangeAvatar)
            .then(r => {
                return r as XMLHttpRequest;
            })
            .then(data => {
                return JSON.parse(data.response as string);
            })
            .then(data => {
                store.set('user.avatar', `https://ya-praktikum.tech/api/v2/resources${data.avatar}`)
                return
            });
    }

    public changePassword (data: ChangePass) {
        return userApi.changePassword(data)
    }
}

export default new UserController();


