import auth from '../../components/authRegForm/authReg.hbs'
import '../../components/authRegForm/authReg.scss'
import input from "../../components/input/input.js";
import button from "../../components/button/button.js";

const data = {
    footerTitle: "Authorization",
    buttons: {
        auth:{
            buttonType: "buttonReady",
            btnValue: "Sign in"
        },
        scd:{
            buttonType: "buttonScd",
            btnValue: "Haven't account?"
        }
    },
    inputs: {
        inputLogin: {
            inputType: "text",
            inputPlaceholder: "login"
        },
        inputPassword: {
            inputType: "password",
            inputPlaceholder: "password"
        }
    }
    }


const authPage = () => {
    return auth(data)
}

export default authPage;