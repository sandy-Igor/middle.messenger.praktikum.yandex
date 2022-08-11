import labelInput from "./inputLabel.hbs"
import "./inputLabel.scss"
import Block from "../../block";


export default class InputLabel extends Block {
    addEvents() {
        this.element.querySelectorAll("input").forEach(inp => {
            inp.addEventListener("keydown", this.props.events.keydown);
        })
    }

    addAttribute() {

        const {
            attr = {
                class: "inputLabel-wrapper"
            }
        } = this.props;
        const _attr = attr as Record<string, any>

        if (attr) {

            Object.entries(_attr).forEach(([key, value]) => {
                this.element.setAttribute(key, value);
            });
        }
    }

    render() {
        return this.compile(labelInput, this.props);
    }
}

