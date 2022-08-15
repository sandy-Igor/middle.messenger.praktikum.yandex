import Button from '../../components/button/button';
import RegisterPage from './register';
import Input from '../../components/input/input';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';

const goButton = new Button(
    'div',
    {
        buttonType: 'button-ready',
        btnValue: 'Register',
        events:
            {
                click: () => {
                    console.log('Submit');
                }
            }
    });
const altBtn = new Button(
    'div',
    {
        buttonType: 'button-scd',
        btnValue: 'Have an account? Sign in!',
        events: {
            click: () => {
                console.log('to auth');
            }
        }
    });

const inputMail = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'e-mail',
        inputName: 'inputMail',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

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
    }
);

const inputName = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'name',
        inputName: 'inputName',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const inputScdName = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'surname',
        inputName: 'inputScdName',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const inputPhone = new Input(
    'li',
    {
        inputType: 'tel',
        inputPlaceholder: 'phone',
        inputName: 'inputPhone',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

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
    }
);

const inputPasswordScd = new Input(
    'li',
    {
        inputType: 'password',
        inputPlaceholder: 'repeat password',
        inputName: 'inputPasswordScd',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const data = {
    register: true,
    footerTitle: 'Registration',
    goButton,
    altBtn,
    inputMail,
    inputLogin,
    inputName,
    inputScdName,
    inputPhone,
    inputPassword,
    inputPasswordScd,
    events: {
        submit: (e: Event) => {
            formSubmitEvent(e, data);
        }
    }
};

const register = new RegisterPage(data);

export default register;

