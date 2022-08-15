import labelInput from './inputLabel.hbs';
import './inputLabel.scss';
import Block from '../../block';

type InputLabelProps = {
    label: string
    inputType: string
    inputId: string
    inputName?: string
    disabled?: string
    events: Record<string, Function>
    attr?: Record<string, string>
}
export default class InputLabel extends Block<InputLabelProps> {
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
                class: 'inputLabel-wrapper'
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
        return this.compile(labelInput, this.props);
    }
}
