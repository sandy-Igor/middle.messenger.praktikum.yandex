import input from './input.hbs';
import './input.scss';
import Block from '../../block';

export type InputProps = {
    inputType: string
    inputPlaceholder?: string
    inputName?: string
    inputAutocomplete?: string
    inputClass?: string
    inputValue?: string
    inputInvalid?: string
    autofocus?: string
    events: Record<string, Function>
    attr?: Record<string, string>
}
export default class Input extends Block<InputProps> {
    constructor(tagName: string, props: InputProps) {
        super(tagName, props);
    }

    addEvents() {
        this.element.querySelectorAll('input')
            .forEach(inp => {
                inp.addEventListener('blur', this.props.events.blur);
                inp.addEventListener('focus', this.props.events.focus);
            });
    }

    addAttribute() {
        const {
            attr = {
                class: 'input-wrapper'
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
        return this.compile(input, this.props);
    }
}
