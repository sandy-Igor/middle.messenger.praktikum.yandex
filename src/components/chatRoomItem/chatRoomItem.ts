import chatRoom from './chatRoomItem.hbs';
import './chatRoomItem.scss';
import Block from '../../block';

type ChatRoomItemProps = {
    avatarImage: File
    chatName: string
    userMsg?: boolean
    lastMsg?: string
    dateMsg?: string
    newMsg?: number
    events?: Record<string, Function>
    attr?: Record<string, string>
}
export default class ChatRoomItem extends Block<ChatRoomItemProps> {
    constructor(tagName: string, props: ChatRoomItemProps) {
        super(tagName, props);
    }

    addEvents() {
        this.element?.addEventListener('click', this.props.events.click);
        this.element?.querySelector('.footer-chat-options')?.addEventListener('click', this.props.events.optClick)
    }

    addAttribute() {
        const {
            attr = {
                class: 'room-box'
            }
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
        return this.compile(chatRoom, this.props);
    }
}
