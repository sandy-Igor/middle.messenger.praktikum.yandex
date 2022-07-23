import * as Handlebars from "handlebars";
import button from "./button.hbs";
import "./button.scss"

Handlebars.registerPartial("button", button)


export default (props) => {
    return button(props)
}