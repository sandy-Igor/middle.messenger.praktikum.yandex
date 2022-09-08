import message from './message.hbs';
import './message.scss';
import Block from '../../block';


export type MessagePropsInArray = {
    image?: boolean
    id?: number
    messageTime?: string
    messageDate?: string
    time: string
    content?: string
    sentMsg?: string
    chat_id?: string
    user_id?: number
    is_read?: boolean
    file?: File | null
    type?: string
}
type MessageProps = {
    messages?: Array<MessagePropsInArray>
    events?: Record<string, Function>
    attr?: Record<string, any>
}
export default class Message extends Block<MessageProps> {
    constructor(tagName: string, props: MessageProps) {
        super(tagName, props);
    }

    addEvents() {
        this.element.querySelectorAll('span').forEach(spn => {
            spn.addEventListener('click', this.props.events.click);
        })
    }

    addAttribute() {
        const {
            attr
        } = this.props;
        const _attr = attr as Record<string, any>;
        if (attr) {
            Object.entries(_attr)
                .forEach(([key, value]) => {
                    this.element.setAttribute(key, value);
                });
        }
    }

    render() {
        return this.compile(message, this.props);
    }
}
