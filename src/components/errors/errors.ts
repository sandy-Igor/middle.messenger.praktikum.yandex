import Block from "../../block";
import error from "./errors.hbs"

export default class Errors extends Block {

    addEvents() {
        this.element.querySelector(".button-return")?.addEventListener("click", this.props.events.click);

    }

    render() {
        return this.compile(error, this.props)
    }
}