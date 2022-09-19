import Block from '../../../block';
import chatControl from './ChatControl.tpl';
import './ChatControl.scss';

type Operation = {
    operationImage: File
    operationDesc: string
    rotation?: string
    imgDsc?: string
}

type ChatControlProps = {
    operation: Array<Operation>,
    events?: Record<string, Function>
    attr?: string
}

export default class ChatControl extends Block<ChatControlProps> {
    constructor(tagName: string, props: ChatControlProps) {
        super(tagName, props);

    }

    addEvents() {
        this.element.querySelectorAll('.chat-operation-elem')
            .forEach(inp => {
                inp.addEventListener('click', this.props.events.click);
            });
    }

    addAttribute() {
        const {
            attr = {
                class: 'chat-operate-box'
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
        return this.compile(chatControl, this.props);
    }
}
