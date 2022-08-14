import button from "./button.hbs";
import "./button.scss"
import Block, {Props} from "../../block";


export default class Button extends Block {

    constructor(tagName: string, props: Props) {
        super(tagName, props);
    }

    addEvents() {
            this.element.querySelectorAll("button").forEach(btn => {
                btn.addEventListener("click", this.props.events.click);
            })

    }

    render() {
        return this.compile(button, this.props);
    }
}