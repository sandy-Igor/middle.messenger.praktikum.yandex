import labelInput from './inputLabel.hbs';
import './inputLabel.scss';
import Block from '../../block';
import store, { StoreEvents } from '../../store/Store';
import Connect from '../../store/Connect';

export type InputLabelProps = {
    label?: string
    inputType?: string
    inputId?: string
    inputValue?: string
    inputName?: string
    disabled?: string
    events?: Record<string, Function>
    attr?: Record<string, string>
}
 class InputLabel extends Block<InputLabelProps> {

    constructor(tagName: string, props: InputLabelProps) {
        super(tagName, props);
        store.on(StoreEvents.Updated, () => {
            return this.setProps(store.getState());
        });
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

export default Connect(
    InputLabel,
// @ts-ignore
    state => state.inputValue ?? {}
)
