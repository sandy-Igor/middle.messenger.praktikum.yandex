import textArea from "./textArea.hbs"
import "./textArea.scss";
import Block from "../../block";

export default class TextArea extends Block {

    addEvents() {
        this.element.addEventListener("focus", this.props.events.focus)
        this.element.addEventListener("blur", this.props.events.blur)

    }

    addAttribute() {

        const {attr = {
                 class: "textarea-wrapper"
             }} = this.props;
        const _attr = attr as Record<string, any>

        if (attr) {
            Object.entries(_attr).forEach(([key, value]) => {
                this.element.setAttribute(key, value);
            });
        }
    }

    render() {

        return this.compile(textArea, this.props);
    }
}