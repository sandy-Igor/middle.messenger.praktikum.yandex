import Block from '../../block';
import profileTpl from '../../components/profileTpl/profileTpl.hbs';

type ProfileProps = Record<string, any>
export default class Profile extends Block<ProfileProps> {
    constructor(props: ProfileProps) {
        super('div', props);
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

