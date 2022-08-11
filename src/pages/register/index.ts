import Button from "../../components/button/button";
import RegisterPage from "./register";
import Input from "../../components/input/input";
import validation from "../../utils/validation";
import {formSubmitEvent} from "../../utils/events";

const goButton = new Button(
    'div',
    {
        buttonType: "button-ready",
        btnValue: "Register",
        events:
            {
                click: () => {
                    console.log("asdas1233446")
                },
            },
    })
const altBtn = new Button(
    'div',
    {
        buttonType: "button-scd",
        btnValue: "Have an account? Sign in!",
        events: {
            click: (e: Event) => {
                e.preventDefault()
                console.log("asdasdasacqcw11111232")
            }
        }
    })

const inputMail = new Input(
    'li',
    {
        inputType: "text",
        inputPlaceholder: "e-mail",
        inputName: "inputMail",
        events: {
            keydown: (e: Event) => {
                console.log(e.target)
            }
        },
        attr: {
            class: "input-wrapper"
        }
    }
)

const inputLogin = new Input(
    'li',
    {
        inputType: "text",
        inputPlaceholder: "login",
        inputName: "inputLogin",
        events: {
            keydown: (e: Event) => {
                console.log(e.target)
            }
        },
        attr: {
            class: "input-wrapper"
        }
    }
)

const inputName = new Input(
    'li',
    {
        inputType: "text",
        inputPlaceholder: "name",
        inputName: "inputName",
        events: {
            keydown: (e: Event) => {
                console.log(e.target)
            }
        },
        attr: {
            class: "input-wrapper"
        }
    }
)

const inputScdName = new Input(
    'li',
    {
        inputType: "text",
        inputPlaceholder: "surname",
        inputName: "inputScdName",
        events: {
            keydown: (e: Event) => {
                console.log(e.target)
            }
        },
        attr: {
            class: "input-wrapper"
        }
    }
)

const inputPhone = new Input(
    'li',
    {
        inputType: "tel",
        inputPlaceholder: "phone",
        inputName: "inputPhone",
        events: {
            keydown: (e: Event) => {
                console.log(e.target)
            }
        },
        attr: {
            class: "input-wrapper"
        }
    }
)

const inputPassword = new Input(
    'li',
    {
        inputType: "password",
        inputPlaceholder: "password",
        inputName: "inputPassword",
        events: {
            keydown: (e: Event) => {
                console.log(e.target)
            }
        },
        attr: {
            class: "input-wrapper"
        }
    }
)

const inputPasswordScd = new Input(
    'li',
    {
        inputType: "password",
        inputPlaceholder: "repeat password",
        inputName: "inputPasswordScd",
        events: {
            keydown: (e: Event) => {
                if (validation(e.target as HTMLInputElement, data)) {
                    (e.target as HTMLInputElement).classList.remove("error")
                }
            },
                blur: (e: Event) => {
                    console.log((validation(e.target as HTMLInputElement, data)))
                    if (!validation(e.target as HTMLInputElement, data)) {
                        (e.target as HTMLInputElement).classList.add("error")
                    }
                }
            },
            attr: {
                class: "input-wrapper"
            }
        }
)

const data = {
    register: true,
    footerTitle: "Registration",
    goButton: goButton,
    altBtn: altBtn,
    inputMail: inputMail,
    inputLogin: inputLogin,
    inputName: inputName,
    inputScdName: inputScdName,
    inputPhone: inputPhone,
    inputPassword: inputPassword,
    inputPasswordScd: inputPasswordScd,
    events: {
        submit: (e: Event) => {
            formSubmitEvent(e, data)
        }
    }
}

const register = new RegisterPage(data);

export default register
