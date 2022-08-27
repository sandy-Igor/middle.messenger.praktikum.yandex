import { AuthApi } from '../api/auth-api';
import store from '../store/Store';
import { ChangeAvatar, ChangeUser, UserApi } from '../api/user-api';

const user = new AuthApi();
const userApi = new UserApi();

class UserController {
    public getUser() {
        user.getUser()
            .then(data => store.set('user', data));
    }

    public changeProfile(data: ChangeUser) {
        return userApi.changeProfile(data).then((data) => {
            store.set('user', data);
            store.set('user.avatar', (data as ChangeAvatar).avatar);
        });
    }

    public changeAvatar(data: HTMLFormElement) {
        const formData = new FormData(data);
        return userApi.changeAvatar(formData as unknown as ChangeAvatar)
            .then(data => store.set('user.avatar', (data as ChangeAvatar).avatar));

    }
}

export default new UserController()
