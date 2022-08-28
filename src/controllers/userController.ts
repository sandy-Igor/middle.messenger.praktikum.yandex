import { AuthApi } from '../api/auth-api';
import store from '../store/Store';
import { ChangeAvatar, ChangeUser, UserApi } from '../api/user-api';

const user = new AuthApi();
const userApi = new UserApi();

class UserController {
    public getUser() {
        user.getUser()
            .then(r => {
                return r as XMLHttpRequest;
            })
            .then(data => {
                return (JSON.parse(data.response as string))
            })
            .then(data => {
                store.set('srcAvatar', `https://ya-praktikum.tech/api/v2/resources${data.avatar}`);
                store.set('inputValue', { ...data });
            });
    }

    public changeProfile(data: ChangeUser) {
        return userApi.changeProfile(data)
            .then(r => {
                return r as XMLHttpRequest;
            })
            .then(data => {
                return (JSON.parse(data.response as string))
            })
            .then((data) => {
                store.set(`inputValue`, data);
            });
    }

    public changeAvatar(data: HTMLFormElement) {
        const formData = new FormData(data);
        return userApi.changeAvatar(formData as unknown as ChangeAvatar)
            .then(r => {
                return r as XMLHttpRequest;
            })
            .then(data => {
                return JSON.parse(data.response as string)
            })
            .then(data => store.set('srcAvatar', `https://ya-praktikum.tech/api/v2/resources${data.avatar}`));
    }
}
export default new UserController();
