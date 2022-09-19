import button from './button.tpl';
import './button.scss';
import Block from '../../block';

type ButtonProps = {
    buttonType: string
    btnValue: string
    events: Record<string, Function>
    attr?: Record<string, string>
}
export default class Button extends Block<ButtonProps> {
    constructor(tagName: string, props: ButtonProps) {
        super(tagName, props);
    }

    addEvents() {
        this.element.querySelectorAll('button')
            .forEach(btn => {
                btn.addEventListener('click', this.props.events.click);
            });
    }

    render() {
        return this.compile(button, this.props);
    }
}
