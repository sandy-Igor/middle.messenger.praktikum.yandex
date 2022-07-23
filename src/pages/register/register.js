import register from '../../components/authRegForm/authReg.hbs'
import '../../components/authRegForm/authReg.scss'
import input from "../../components/input/input.js";
import button from "../../components/button/button.js";


const data = {
    footerTitle: "Registration",
    buttons: {
        register:{
            buttonType: "buttonReady",
            btnValue: "Register"
        },
        scd:{
            buttonType: "buttonScd",
            btnValue: "Have an account? Sign in"
        }
    },
    inputs: {
        inputMail: {
            inputId: "text",
            inputPlaceholder: "e-mail",
        },
        inputLogin: {
            inputType: "text",
            inputPlaceholder: "login"
        },
        inputName: {
            inputType: "text",
            inputPlaceholder: "name"
        },
        inputScdName: {
            inputType: "text",
            inputPlaceholder: "surname"
        },
        inputPhone: {
            inputType: "tel",
            inputPlaceholder: "phone"
        },
        inputPassword: {
            inputType: "password",
            inputPlaceholder: "password"
        },
        inputPasswordScd: {
            inputType: "password",
            inputPlaceholder: "repeat"
        },
    }
}


const registerPage = () => {
    return register(data)
}

export default registerPage;