import arrow from "./arrowButton.hbs"
import "./arrowButton.scss"
import Block from "../../block";


export default class ArrowButton extends Block {
    addEvents(): void {
            this.element.querySelector("button")?.addEventListener("click", this.props.events.click);
    }

    render() {
        return this.compile(arrow, this.props);
    }
}
