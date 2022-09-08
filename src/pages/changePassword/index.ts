import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';
import Button from '../../components/button/button';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';
import { router } from '../../router/router';
import UserController from '../../controllers/userController';
import ChangePassword from './changePassword';
import { ChangePass } from '../../api/user-api';

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
            if(formData) {
                console.log('after valid');
                UserController.changePassword(formData as ChangePass);
            }
        }
    }
};

const changePassword = new ChangePassword(data);

export default changePassword;
