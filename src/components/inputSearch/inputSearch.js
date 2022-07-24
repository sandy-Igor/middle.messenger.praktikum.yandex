import * as Handlebars from "handlebars";
import inputSearch from "./inputSearch.hbs"
import "./inputSearch.scss"

Handlebars.registerPartial("inputSearch", inputSearch)

export default (props) => {
    return inputSearch(props)
}