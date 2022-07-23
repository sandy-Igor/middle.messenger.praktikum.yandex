import * as Handlebars from "handlebars";
import arrow from "./arrowButton.hbs"

import "./arrowButton.scss"

Handlebars.registerPartial("arrowButton", arrow)

export default (props) => {
    return arrow(props);
}