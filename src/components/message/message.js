import * as Handlebars from "handlebars";
import message from "./message.hbs"
import "./message.scss"

Handlebars.registerPartial("message", message)

export default (props) => {
    return message(props);
}