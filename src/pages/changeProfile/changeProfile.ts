import profileTpl from '../../components/profileTpl/profileTpl.hbs';
import '../../components/profileTpl/profileTpl.scss';
import Block from '../../block';
import Connect from '../../store/Connect';
import store, { StoreEvents } from '../../store/Store';


type ChangeProfileProps = Record<string, any>

class ChangeProfile extends Block<ChangeProfileProps> {
    constructor(tagName: string, props: ChangeProfileProps) {
        super(tagName, props);
        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    addEvents() {
        this.element.querySelector('#profile-data')?.addEventListener('submit', this.props.events.submit);
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

export default Connect(
    ChangeProfile,
// @ts-ignore
    state => {
        return state.inputLabel ?? {};
    }
);
