import span from "./span.hbs"
import "./span.scss"
import Block from "../../block";



export default class Span extends Block {
    addEvents() {
        this.element.querySelectorAll("span").forEach(span => {
            span.addEventListener("click", this.props.events.click);
        })
    }

    addAttribute() {
        const {
            attr = {class: "span-wrapper"}
        } = this.props;
        const _attr = attr as Record<string, any>

        Object.entries(_attr).forEach(([key, value]) => {
            this.element.setAttribute(key, value);
        });
    }

    render() {
        return this.compile(span, this.props);
    }
}
