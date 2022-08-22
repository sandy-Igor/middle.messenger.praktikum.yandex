import Block from '../../block';
import profileTpl from '../../components/profileTpl/profileTpl.hbs';

type ChangePasswordProps = Record<string, any>
export default class ChangePassword extends Block<ChangePasswordProps> {
    constructor(props: ChangePasswordProps) {
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
            attr = {
                class: 'profilePage-box'
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
        return this.compile(profileTpl, this.props);
    }
}

