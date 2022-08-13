import avatarIcon from '../../../static/images/avatar-png-icon.png';
import ChangeProfile from './changeProfile';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';
import Button from '../../components/button/button';
import {formSubmitEvent, inputBlur, inputFocus} from "../../utils/events";

const arrowButton = new ArrowButton(
    'div',
    {
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log('arrBtn');
            },
        },
    },
);

const inputMail = new InputLabel(
    'li',
    {
        label: 'Mail',
        inputType: 'text',
        inputName: "inputMail",
        inputId: 'dvader@deathstar.ru',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data)
            }
        }
    },
);

const inputLogin = new InputLabel(
    'li',
    {
        label: 'Login',
        inputType: 'text',
        inputId: 'Sith',
        inputName: "inputLogin",
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data)
            }
        }
    },
);

const inputName = new InputLabel(
    'li',
    {
        label: 'Name',
        inputType: 'text',
        inputId: 'Darth',
        inputName: "inputName",
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data)
            }
        }
    },
);

const inputScdName = new InputLabel(
    'li',
    {
        label: 'Surname',
        inputType: 'text',
        inputId: 'Vader',
        inputName: "inputScdName",
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data)
            }
        }
    },
);

const inputNick = new InputLabel(
    'li',
    {
        label: 'Chat name',
        inputType: 'text',
        inputId: 'lordVaderSith',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data)
            }
        }
    },
);

const inputPhone = new InputLabel(
    'li',
    {
        label: 'Phone',
        inputType: 'text',
        inputId: '+7-909-09-09-090',
        inputName: "inputPhone",
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data)
            }
        }
    },
);

const buttonSave = new Button(
    'div',
    {
        buttonType: 'button-save',
        btnValue: 'Save',
        events: {
            click: () => {
                console.log('Submit');
            },
        },
        attr: {
            class: 'box-profile-bottom',
        },
    },
);

const data = {
    avatarIcon: avatarIcon,
    arrowButton: arrowButton,
    profile: true,
    inputMail: inputMail,
    inputLogin: inputLogin,
    inputName: inputName,
    inputScdName: inputScdName,
    inputNick: inputNick,
    inputPhone: inputPhone,
    buttons: true,
    button: buttonSave,
    events: {
        submit: (e: Event) => {
            formSubmitEvent(e, data)
        }
    }
};

const changeProfilePage = new ChangeProfile(data);

export default changeProfilePage;
