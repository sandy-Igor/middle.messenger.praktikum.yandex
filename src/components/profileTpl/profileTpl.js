import * as Handlebars from "handlebars";
import profile from './profileTpl.hbs'
import './profileTpl.scss'
import button from "../button/button";
import labelInput from "../inputLabel/inputLabel"
import arrow from "../arrowButton/arrowButton"
import span from "../span/span"


Handlebars.registerPartial("profileTpl", profile)

export default (props) => {
    return profile(props)
}
