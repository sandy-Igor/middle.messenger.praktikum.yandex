import * as Handlebars from "handlebars";
import span from "./span.hbs"
import "./span.scss"

Handlebars.registerPartial("span", span)

export default (props) => {
    return span(props)
}