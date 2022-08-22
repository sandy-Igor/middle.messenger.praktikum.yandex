import chat from './chat.hbs';
import Block from '../../block';
import './chat.scss';

type ChatProps = Record<string, any>
export default class ChatPage extends Block<ChatProps> {
    constructor(props: ChatProps) {
        super('div', props);
    }

    addEvents() {
        this.element.querySelectorAll('form')
            .forEach(form => {
                form.addEventListener('submit', this.props.events.submit);
            });
    }

    addAttribute() {
        const {
            attr = { class: 'chat-page-box' }
        } = this.props;
        const _attr = attr as Record<string, any>;

        Object.entries(_attr)
            .forEach(([key, value]) => {
                this.element.setAttribute(key, value);
            });
    }

    render() {
        return this.compile(chat, this.props);
    }
}

