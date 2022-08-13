import chat from "./chat.hbs"
import Block, { Props } from "../../block";
import "./chat.scss"


export default class ChatPage extends Block {

    constructor(props: Props) {
        super("div", props);
    }

    addEvents() {
        this.element.querySelectorAll("form").forEach(form => {
            form.addEventListener("submit", this.props.events.submit)
        })
    }

    addAttribute() {
        const {
            attr = {class: "chat-page-box"}
        } = this.props;
        const _attr = attr as Record<string, any>

        Object.entries(_attr).forEach(([key, value]) => {
            this.element.setAttribute(key, value);
        });
    }

    render() {
        return this.compile(chat, this.props);
    }

}
