import inputSearch from './inputSearch.hbs';
import './inputSearch.scss';
import Block from '../../block';

export interface InputSearchProps {
    spanValue: string;
    inputPlaceholder: string;
    inputName: string;
    events: Record<string, Function>;
}

export default class InputSearch extends Block<InputSearchProps> {
    constructor(tagName: string, props: InputSearchProps) {
        super(tagName, props);
    }

    addEvents() {
        this.element.querySelectorAll('input')
            .forEach(inp => {
                inp.addEventListener('input', this.props.events.input);
            });
        this.element.querySelectorAll('span')
            .forEach(spn => {
                spn.addEventListener('click', this.props.events.click)
            })
    }

    addAttribute() {
        const {
            attr = {
                class: 'input-search-wrapper'
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
        return this.compile(inputSearch, this.props);
    }
}
