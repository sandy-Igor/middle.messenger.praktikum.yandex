import Button from '../../components/button/button';
import RegisterPage from './register';
import Input from '../../components/input/input';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';
import { router } from '../../router/router';
import { Signup } from '../../api/auth-api';
import AuthController from '../../controllers/authController';
import UserController from '../../controllers/userController';
import ChatController from '../../controllers/chatController';

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
            click: (e: Event) => {
                e.preventDefault();
                router.go('/');
            }
        }
    });

const email = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'e-mail',
        inputName: 'email',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

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
    }
);

const first_name = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'name',
        inputName: 'first_name',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const second_name = new Input(
    'li',
    {
        inputType: 'text',
        inputPlaceholder: 'surname',
        inputName: 'second_name',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

const phone = new Input(
    'li',
    {
        inputType: 'tel',
        inputPlaceholder: 'phone',
        inputName: 'phone',
        events: {
            focus: inputFocus,
            blur: (e: Event) => {
                inputBlur(e, data);
            }
        }
    }
);

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
    }
);

const passwordScd = new Input(
    'li',
    {
        inputType: 'password',
        inputPlaceholder: 'repeat password',
        inputName: 'passwordScd',
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
    email,
    login,
    first_name,
    second_name,
    phone,
    password,
    passwordScd,
    events: {
        submit: (e: Event) => {
            const formData = formSubmitEvent(e, data);
            AuthController.signup(formData as Signup)
                .then(() => {
                    UserController.getUser();
                })
                .then(() => {
                    ChatController.getChats();
                });
        }
    }
};

const register = new RegisterPage(data);
export default register;

