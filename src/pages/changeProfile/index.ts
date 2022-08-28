import avatarImage from '../../../static/images/avatar-png-icon.png';
import ChangeProfile from './changeProfile';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';
import Button from '../../components/button/button';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';
import { router } from '../../router/router';
import { ChangeUser } from '../../api/user-api';
import { AuthApi } from '../../api/auth-api';
import { Props } from '../../block';
import Avatar from '../../components/avatar/avatar';

import userController from '../../controllers/userController';

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
                        data[key].setProps({ inputValue: val });
                    }
                }
            });
    });

// userController.getUser();
const arrowButton = new ArrowButton(
    'div',
    {
        events: {
            click: (e: Event) => {
                e.preventDefault();
                router.go('/profilePage');
            }
        }
    }
);

const avatar = new Avatar(
        'label',
        {
            srcAvatar: avatarImage,
            events: {
                submit: (e: Event) => {
                    e.preventDefault();
                    const form = avatar.element.querySelector('form');
                    userController.changeAvatar(form as HTMLFormElement);
                },
                change: () => {
                    (avatar.element.querySelector('input[type=submit]') as HTMLElement).click();
                }
            }
        }
    );

const email = new InputLabel(
    // 'li',
    {
        label: 'Mail',
        inputType: 'text',
        inputName: 'email',
        inputId: 'dvader@deathstar.ru',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const login = new InputLabel(
    // 'li',
    {
        label: 'Login',
        inputType: 'text',
        inputId: 'Sith',
        inputName: 'login',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const first_name = new InputLabel(
    // 'li',
    {
        label: 'Name',
        inputType: 'text',
        inputId: 'Darth',
        inputName: 'first_name',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const second_name = new InputLabel(
    // 'li',
    {
        label: 'Surname',
        inputType: 'text',
        inputId: 'Vader',
        inputName: 'second_name',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const display_name = new InputLabel(
    // 'li',
    {
        label: 'Chat name',
        inputType: 'text',
        inputId: 'lordVaderSith',
        inputName: 'display_name',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const phone = new InputLabel(
    // 'li',
    {
        label: 'Phone',
        inputType: 'text',
        inputId: '+7-909-09-09-090',
        inputName: 'phone',
        inputValue: '',
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

const data: Props = {
    avatar: avatar,
    arrowButton,
    profile: true,
    email,
    login,
    first_name,
    second_name,
    display_name,
    phone,
    buttons: true,
    button: buttonSave,
    events: {
        submit: (e: Event) => {
            console.log(data);
            const formData = formSubmitEvent(e, data);
            userController.changeProfile(formData as ChangeUser);
        }
    }
};

const changeProfilePage = new ChangeProfile(data);

export default changeProfilePage;
