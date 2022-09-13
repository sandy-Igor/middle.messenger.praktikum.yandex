import Block from '../../block';
import './avatar.scss';
import avatar from './avatar.hbs';
import store, { StoreEvents } from '../../store/Store';

type AvatarProps = {
    srcAvatar?: string;
    events?: Record<string, Function>;
    disabled?: string;
}

export default class Avatar extends Block<AvatarProps> {

    constructor(tagName: string, props: AvatarProps) {
        super(tagName, props);
        store.on(StoreEvents.Updated, () => {
            return this.setProps(store.getState());
        });
    }

    addEvents() {
        this.element.querySelectorAll('form')
            .forEach(el => {
                el.addEventListener('submit', this.props.events.submit);
            });
        this.element.querySelectorAll('input')
            .forEach(inp => {
                inp.addEventListener('change', this.props.events.change);
            });
    }

    addAttribute() {
        const {
            attr = {
                class: 'box-avatar-changer'
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
        return this.compile(avatar, this.props);
    }

}