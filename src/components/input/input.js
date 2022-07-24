import * as Handlebars from "handlebars";
import input from "./input.hbs";
import "./input.scss";

Handlebars.registerPartial("input", input);

export default (props) => {
    return input(props);
}
