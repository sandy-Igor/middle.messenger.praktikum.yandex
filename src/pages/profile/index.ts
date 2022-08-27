import avatarIcon from '../../../static/images/avatar-png-icon.png';
import Profile from './profile';
import Span from '../../components/span/span';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputLabel from '../../components/inputLabel/inputLabel';
import { router } from '../../router/router';
import { AuthApi } from '../../api/auth-api';
import { Props } from '../../block';
import Avatar from '../../components/avatar/avatar';
import store from '../../store/Store';

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
                    if(data[key] instanceof Avatar) {
                        data[key].setProps({ inputValue: `https://ya-praktikum.tech/api/v2/resources${val}` })
                    } else {
                        data[key].setProps({ inputValue: val });
                    }
                }
            });
    });

const arrowButton = new ArrowButton(
    'div',
    {
        events: {
            click: (e: Event) => {
                e.preventDefault();
                router.back();
                console.log(store.getState());
            }
        }
    }
);

const avatar = new Avatar(
    'label',
    {
        inputValue: avatarIcon,
        disabled: 'disabled',
        events: {

        }
    }
)

const changeData = new Span(
    'li',
    {
        spanClass: 'spanBlue',
        spanVal: 'Change data',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                router.go('/changeProfilePage');
            }
        }
    }
);

const changePassword = new Span(
    'li',
    {
        spanClass: 'spanBlue',
        spanVal: 'Change password',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                router.go('/changePassPage');
            }
        }
    }
);

const exit = new Span(
    'li',
    {
        spanClass: 'spanRed',
        spanVal: 'Exit',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                const auth = new AuthApi();
                auth.logout()
                     .then(r => r)
                router.go('/');
            }
        }
    }
);

const email = new InputLabel(
    'li',
    {
        inputValue: '',
        label: 'Mail',
        inputType: 'text',
        inputName: 'email',
        inputId: 'dvader@deathstar.ru',
        disabled: 'disabled',
        events: {}
    }
);

const login = new InputLabel(
    'li',
    {
        label: 'Login',
        inputType: 'text',
        inputId: 'Sith',
        inputName: 'login',
        disabled: 'disabled',
        events: {}
    }
);

const first_name = new InputLabel(
    'li',
    {
        label: 'Name',
        inputType: 'text',
        inputId: 'Darth',
        inputName: 'first_name',
        disabled: 'disabled',
        events: {}
    }
);

const second_name = new InputLabel(
    'li',
    {
        label: 'Surname',
        inputType: 'text',
        inputId: 'Vader',
        inputName: 'second_name',
        disabled: 'disabled',
        events: {}
    }
);

const display_name = new InputLabel(
    'li',
    {
        label: 'Chat name',
        inputType: 'text',
        inputId: 'lordVaderSith',
        inputName: 'display_name',
        disabled: 'disabled',
        events: {}
    }
);

const phone = new InputLabel(
    'li',
    {
        label: 'Phone',
        inputType: 'text',
        inputId: '+7-909-09-09-090',
        inputName: 'phone',
        disabled: 'disabled',
        events: {}
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
    phone,
    display_name,
    changeData,
    changePassword,
    exit
};

const profilePage = new Profile(data);

export default profilePage


