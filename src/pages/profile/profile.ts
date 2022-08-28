import Block from '../../block';
import profileTpl from '../../components/profileTpl/profileTpl.hbs';
import Connect from '../../store/Connect';
import store, { StoreEvents } from '../../store/Store';

type ProfileProps = Record<string, any>
class Profile extends Block<ProfileProps> {
    constructor(tagName: string ,props: ProfileProps) {
        super(tagName, props);

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    addAttribute() {
        const {
            attr
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

export default Connect (
    Profile,
// @ts-ignore
    state => {
        return state.inputLabel ?? {};
    }
)
