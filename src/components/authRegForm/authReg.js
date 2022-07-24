import * as Handlebars from "handlebars";
import authReg from "./authReg.hbs"
import "./authReg.scss"

Handlebars.registerPartial("authReg", authReg)

export default (props) => {
    return authReg(props);
}