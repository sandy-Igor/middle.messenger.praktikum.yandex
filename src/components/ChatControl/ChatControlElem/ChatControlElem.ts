import Block from '../../../block';
import Input from '../../input/input';
import ChatControlEl from './ChatControlElem.hbs'
import Button from '../../button/button';
import './ChatControlElem.scss'


type ChatControlElemProps = {
    description: string
    chatTitle?: string
    users?: Array<string>
    value?: Input
    sendReq: Button
    events?: {}
}

export default class ChatControlElem extends Block<ChatControlElemProps> {
    constructor(tagName: string, props: ChatControlElemProps) {
        super(tagName, props);
    }

    addEvents() {
        this.element.addEventListener('submit', this.props.events?.submit);
        this.element.querySelector('.cross-elem')
            ?.addEventListener('click', this.props.events?.click);
    }

    addAttribute() {
        const {
            attr = {
                class: 'control-container'
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
        return this.compile(ChatControlEl, this.props);
    }
}
