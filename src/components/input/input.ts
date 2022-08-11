import input from "./input.hbs";
import "./input.scss";
import Block from "../../block";

export default class Input extends Block {

    addEvents() {
        this.element.querySelectorAll("input").forEach(inp => {
            inp.addEventListener("keyup", this.props.events.keydown);
            inp.addEventListener("focus", this.props.events.focus)
            inp.addEventListener("blur", this.props.events.blur)
        })
    }


    addAttribute() {

        const {attr = {
                 class: "input-wrapper"
             }} = this.props;
        const _attr = attr as Record<string, any>

        if (attr) {
            Object.entries(_attr).forEach(([key, value]) => {
                this.element.setAttribute(key, value);
            });
        }
    }

    render() {

        return this.compile(input, this.props);
    }
}