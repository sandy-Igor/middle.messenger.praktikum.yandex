import chatRoom from './chatRoomFooter.hbs';
import '../chatRoomItem.scss';
import Block from '../../../block';


export type ChatPropsInArray = {
    avatar: File
    title?: string
    userMsg?: boolean
    last_message?: { content: string, id: number, time: string, user: Record<string, any> }
    messageTime?: string
    messageDate?: string
    unread_count?: number
}
export type ChatRoomItemProps = {
    activeChat?: boolean
    altAvatar?: File
    chat?: Array<ChatPropsInArray>,
    events?: Record<string, Function>
    attr?: Record<string, string>
}
export default class ChatRoomFooter extends Block<ChatRoomItemProps> {
    constructor(tagName: string, props: ChatRoomItemProps) {
        super(tagName, props);
    }

    addEvents() {
        this.element.querySelectorAll('.room-box')
            .forEach(box => {
                box.addEventListener('click', this.props.events?.click);
            });
        this.element?.querySelector('.footer-chat-options')
            ?.addEventListener('click', this.props.events?.optClick);
    }

    addAttribute() {
        const {
            attr = {
                class: 'chat-list-box'
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
