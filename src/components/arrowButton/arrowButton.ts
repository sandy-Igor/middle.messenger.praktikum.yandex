import arrow from "./arrowButton.hbs"
import "./arrowButton.scss"
import Block, {Props} from "../../block";


export default class ArrowButton extends Block {
    constructor(tagName: string, props: Props) {
        super(tagName, props);
    }
    addEvents(): void {
            this.element.querySelector("button")?.addEventListener("click", this.props.events.click);
    }

    render() {
        return this.compile(arrow, this.props);
    }
}
