import avatarIcon from '../../../static/images/avatar-png-icon.png';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';
import Button from '../../components/button/button';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';
import { router } from '../../router/router';
import { ChangePass, UserApi } from '../../api/user-api';
import ChangePassword from './changePassword';

const arrowButton = new ArrowButton(
    'div',
    {
        events: {
            click: (e: Event) => {
                e.preventDefault();
                router.back();
            }
        }
    }
);

const oldPassword = new InputLabel(
    'li',
    {
        label: 'previous password',
        inputType: 'password',
        inputId: 'old',
        inputName: 'oldPassword',
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                }
            }
    }
);

const newPassword = new InputLabel(
    'li',
    {
        label: 'new password',
        inputType: 'password',
        inputId: 'new',
        inputName: 'newPassword',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const passwordScd = new InputLabel(
    'li',
    {
        label: 'repeat password',
        inputType: 'password',
        inputId: 'repeat',
        inputName: 'passwordScd',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const buttonSave = new Button(
    'div',
    {
        buttonType: 'button-save',
        btnValue: 'Save',
        events: {
            click: () => {
                console.log('Submit');
            }
        },
        attr: {
            class: 'box-profile-bottom'
        }
    }
);

const data = {
    avatarIcon,
    arrowButton,
    profile: false,
    oldPassword,
    newPassword,
    passwordScd,
    buttons: true,
    button: buttonSave,
    events: {
        submit: (e: Event) => {
            const formData = formSubmitEvent(e, data);
            const userApi = new UserApi();
            userApi.changePassword(formData as ChangePass).then(data => console.log(data))
        }
    }
};

const changePassword = new ChangePassword(data);

export default changePassword;
