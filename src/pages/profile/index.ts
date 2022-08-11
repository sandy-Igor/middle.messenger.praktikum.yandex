import avatarIcon from '../../../static/images/avatar-png-icon.png';
import Profile from './profile';
import Span from '../../components/span/span';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';

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

const changeData = new Span(
    'li',
    {
        spanClass: 'spanBlue',
        spanVal: 'Change data',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log(changeData);
                console.log(e.target)
            },
            attr: {
                class: 'span-wrapper',
            },
        },
    },
);

const changePassword = new Span(
    'li',
    {
        spanClass: 'spanBlue',
        spanVal: 'Change password',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log(changePassword);
                console.log(e.target)
            },
            attr: {
                class: 'span-wrapper',
            },
        },
    },
);

const exit = new Span(
    'li',
    {
        spanClass: 'spanRed',
        spanVal: 'Exit',
        events: {
            click: (e: Event) => {
                e.preventDefault();
            },
            attr: {
                class: 'span-wrapper',
            },
        },
    },
);

const inputMail = new InputLabel(
    'li',
    {
        label: 'Mail',
        inputType: 'text',
        inputId: 'dvader@deathstar.ru',
        disabled: "disabled",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target)
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
        disabled: "disabled",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target)
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
        disabled: "disabled",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target)
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
        disabled: "disabled",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target)
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
        disabled: "disabled",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target)
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
        disabled: "disabled",
        events:
            {
                keydown: (e: Event) => {
                    console.log(e.target);
                },
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
    changeData: changeData,
    changePassword: changePassword,
    exit: exit,
};

const profilePage = new Profile(data);

export default profilePage;
