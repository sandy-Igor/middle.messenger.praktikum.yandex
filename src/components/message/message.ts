import message from "./message.hbs"
import "./message.scss"
import Block, {Props} from "../../block";


export default class Message extends Block {
    constructor(tagName: string, props: Props) {
        super(tagName, props);

    }

    addEvents() {
        this.element.querySelector("span")?.addEventListener("click", this.props.events.click);

    }

    addAttribute() {
        const {
            attr = {class: "message-item"}
        } = this.props;
        const _attr = attr as Record<string, any>
        if (attr) {
            Object.entries(_attr).forEach(([key, value]) => {
                this.element.setAttribute(key, value);
            });
        }
    }

    render() {
        return this.compile(message, this.props);
    }
}
