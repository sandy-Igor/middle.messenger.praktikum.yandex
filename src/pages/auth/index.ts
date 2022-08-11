import AuthPage from "./auth";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import validation from "../../utils/validation";

const goButton = new Button(
    'div',
    {
        buttonType: "button-ready",
        btnValue: "Sign in",
        events:
            {
                click: () => {
                    console.log("asdasfwefwe")
                },
            },
    })
const altBtn = new Button(
    'div',
    {
        buttonType: "button-scd",
        btnValue: "Haven't account?",
        events: {
            click: (e: Event) => {
                e.preventDefault()
                console.log("asdasdasacqcw")
            }
        }
    })

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

const inputPassword = new Input(
    'li',
    {
        inputType: "password",
        inputPlaceholder: "password",
        inputName: "inputPassword",
        events: {
            keydown: (e: Event) => {
                goButton.setProps({btnValue: (e.target as HTMLTextAreaElement).value})
            },
            focus: (e: Event) => {
                (e.target as HTMLInputElement).classList.add("focus")
                console.log("focus")
            },
            blur: () => {
                console.log("blur")
            }
        },
    }
)


const data = {
    auth: true,
    footerTitle: "Authorization",
    goButton: goButton,
    altBtn: altBtn,
    inputLogin: inputLogin,
    inputPassword: inputPassword,
    events: {
        submit: (e: Event) => {
            e.preventDefault()
            document.querySelectorAll("input").forEach(inp => {
                console.log(validation(inp, data));
            })
        },
        blur: () => {
            console.log("form blur")
        }
    }

}
const auth = new AuthPage(data)


export default auth;