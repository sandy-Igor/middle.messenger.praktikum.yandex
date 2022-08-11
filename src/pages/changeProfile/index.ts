import avatarIcon from '../../../static/images/avatar-png-icon.png';
import ChangeProfile from './changeProfile';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';
import Button from '../../components/button/button';

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
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const inputLogin = new InputLabel(
    'li',
    {
        label: 'Login',
        inputType: 'text',
        inputId: 'Sith',
        inputName: "inputLogin",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const inputName = new InputLabel(
    'li',
    {
        label: 'Name',
        inputType: 'text',
        inputId: 'Darth',
        inputName: "inputName",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const inputScdName = new InputLabel(
    'li',
    {
        label: 'Surname',
        inputType: 'text',
        inputId: 'Vader',
        inputName: "inputScdName",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const inputNick = new InputLabel(
    'li',
    {
        label: 'Chat name',
        inputType: 'text',
        inputId: 'lordVaderSith',
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const inputPhone = new InputLabel(
    'li',
    {
        label: 'Phone',
        inputType: 'text',
        inputId: '+7-909-09-09-090',
        inputName: "inputPhone",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
            },
    },
);

const buttonSave = new Button(
    'div',
    {
        buttonType: 'button-save',
        btnValue: 'Save',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log('savedata');
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
};

const changeProfilePage = new ChangeProfile(data);

export default changeProfilePage;
