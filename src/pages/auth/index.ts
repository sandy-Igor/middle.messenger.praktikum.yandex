import AuthPage from './auth';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';
import { router } from '../../router/router';
import { AuthApi, Signin } from '../../api/auth-api';

const goButton = new Button(
    'div',
    {
        buttonType: 'button-ready',
        btnValue: 'Sign in',
        events: {}
    });
const altBtn = new Button(
    'div',
    {
        buttonType: 'button-scd',
        btnValue: 'Haven\'t account?',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                router.go('/register');
            }
        }
    });

const login = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'login',
        inputName: 'login',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    });

const password = new Input(
    'li',
    {
        inputType: 'password',
        inputPlaceholder: 'password',
        inputName: 'password',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    });

const data = {
    auth: true,
    footerTitle: 'Authorization',
    goButton,
    altBtn,
    login,
    password,
    events: {
        submit: (e: Event) => {
            const formData = formSubmitEvent(e, data);
            const auth = new AuthApi();
            auth.signin(formData as Signin)
                .then(res => {
                    console.log(res);
                    return res;
                })
                .then(() => {
                   auth.getUser()
                        .then(r => r)
                        .then(data => {
                            console.log('user', data);
                        });
                })
        }
    }
};
    const auth = new AuthPage(data);

    export
    default auth;

