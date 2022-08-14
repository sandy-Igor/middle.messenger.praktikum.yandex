import chatRoom from "./chatRoomItem.hbs"
import "./chatRoomItem.scss"
import Block, {Props} from "../../block";


export default class ChatRoomItem extends Block {
    constructor(tagName: string, props: Props) {
        super(tagName, props);
    }

    addEvents() {
       this.element?.addEventListener("click", this.props.events.click);
    }

    addAttribute() {
        const {attr = {
            class: "room-box"
        }} = this.props;
        const _attr = attr as Record<string, any>
        if (attr) {

        Object.entries(_attr).forEach(([key, value]) => {
            this.element.setAttribute(key, value);
        });
        }
    }

    render() {
        return this.compile(chatRoom, this.props);
    }
}

