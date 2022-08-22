import AuthPage from './auth';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';

const goButton = new Button(
    'div',
    {
        buttonType: 'button-ready',
        btnValue: 'Sign in',
        events:
            {
                click: () => {
                    console.log('asdasfwefwe');
                }
            }
    });
const altBtn = new Button(
    'div',
    {
        buttonType: 'button-scd',
        btnValue: 'Haven\'t account?',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                console.log('asdasdasacqcw');
            }
        }
    });

const inputLogin = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'login',
        inputName: 'inputLogin',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    });

const inputPassword = new Input(
    'li',
    {
        inputType: 'password',
        inputPlaceholder: 'password',
        inputName: 'inputPassword',
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
    inputLogin,
    inputPassword,
    events: {
        submit: (e: Event) => {
            formSubmitEvent(e, data);
        }
    }
};
const auth = new AuthPage(data);

export default auth;

