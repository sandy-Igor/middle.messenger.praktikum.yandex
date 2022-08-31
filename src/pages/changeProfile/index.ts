import ChangeProfile from './changeProfile';
import { AuthApi } from '../../api/auth-api';
import { Props } from '../../block';
import Avatar from '../../components/avatar/avatar';
import { formSubmitEvent } from '../../utils/events';
import userController from '../../controllers/userController';
import { ChangeUser } from '../../api/user-api';
const userData = new AuthApi();
userData.getUser()
    .then(r => {
        return r as XMLHttpRequest;
    })
    .then(data => {
        return (JSON.parse(data.response as string));
    })
    .then(val => {
        Object.entries(val)
            .forEach(([key, val]) => {
                if (data.hasOwnProperty(key)) {
                    if (data[key] instanceof Avatar) {
                        data[key].setProps({ srcAvatar: `https://ya-praktikum.tech/api/v2/resources${val}` });
                    } else {
                        // data[key].setProps({ inputValue: val });
                    }
                }
            });
    });

const data: Props = {
    profile: true,
    buttons: true,
    events: {
        submit: (e: Event) => {
            const data = formSubmitEvent(e, changeProfilePage.children);
            userController.changeProfile(data as ChangeUser);
        }
    }
};

const changeProfilePage = new ChangeProfile(data);
export default changeProfilePage;
