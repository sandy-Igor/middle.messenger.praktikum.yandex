import * as Handlebars from "handlebars";
import labelInput from "./inputLabel.hbs"
import "./inputLabel.scss"

Handlebars.registerPartial("labelInput", labelInput);

export default (props = {}) => {
    return labelInput(props);
}
