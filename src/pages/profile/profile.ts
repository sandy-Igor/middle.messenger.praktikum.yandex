import avatarImage from '../../../static/images/avatar-png-icon.png';
import Block from '../../block';
import profileTpl from '../../components/profileTpl/profileTpl.hbs';
import ArrowButton from '../../components/arrowButton/arrowButton';
import Avatar from '../../components/avatar/avatar';
import InputLabel from '../../components/inputLabel/inputLabel';
import Span from '../../components/span/span';
import Connect from '../../store/Connect';
import { router } from '../../router/router';
import { AuthApi } from '../../api/auth-api';
import UserController from '../../controllers/userController'
import store, { StoreEvents } from '../../store/Store';

export type ProfileProps = Record<string, any>
class Profile extends Block<ProfileProps> {
    constructor(tagName: string, props: ProfileProps) {
        props.profile = true
        props.arrowButton = new ArrowButton(
            'div',
            {
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        router.go('/chatPage');
                    }
                }
            }
        );

        props.avatar = new Avatar(
            'label',
            {
                srcAvatar: avatarImage,
                events: {

                }
            }
        );

        props.email = new InputLabel(
            'li',
            {
                label: 'Mail',
                inputType: 'text',
                inputName: 'email',
                inputId: 'dvader@deathstar.ru',
                disabled: 'disabled',
                events: {}
            }
        );
        //
        // props.login = new InputLabel(
        //     'li',
        //     {
        //         label: 'Login',
        //         inputType: 'text',
        //         inputId: 'Sith',
        //         inputName: 'login',
        //         inputValue: props.login,
        //         disabled: 'disabled',
        //         events: {}
        //     }
        // );

        props.first_name = new InputLabel(
            'li',
            {
                label: 'Name',
                inputType: 'text',
                inputId: 'Lord',
                inputName: 'first_name',
                disabled: 'disabled',
                events: {}
            }
        );

        props.second_name = new InputLabel('li', {
            label: 'Surname',
            inputType: 'text',
            inputId: 'Vader',
            inputName: 'second_name',
            inputValue: props.second_name,
            disabled: 'disabled',
            events: {}
        });

        props.display_name = new InputLabel(
            'li',
            {
                label: 'Chat name',
                inputType: 'text',
                inputId: 'lordVaderSith',
                inputName: 'display_name',
                disabled: 'disabled',
                events: {}
            }
        );

        props.phone = new InputLabel(
            'li',
            {
                label: 'Phone',
                inputType: 'text',
                inputId: '+7-909-09-09-090',
                inputName: 'phone',
                inputValue: '',
                disabled: 'disabled',
                events: {}
            }
        );

        props.changeData = new Span(
            'li',
            {
                spanClass: 'spanBlue',
                spanVal: 'Change data',
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        router.go('/changeProfilePage');
                    }
                }
            }
        );

        props.changePassword = new Span(
            'li',
            {
                spanClass: 'spanBlue',
                spanVal: 'Change password',
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        router.go('/changePassPage');
                    }
                }
            }
        );

        props.exit = new Span(
            'li',
            {
                spanClass: 'spanRed',
                spanVal: 'Exit',
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        const auth = new AuthApi();
                        auth.logout()
                            .then(r => r)
                        router.go('/');
                    }
                }
            }
        );

        super(tagName, props);
        // const userData = new AuthApi();
        // userData.getUser()
        //     .then(r => {
        //         return r as XMLHttpRequest;
        //     })
        //     .then(data => {
        //         return (JSON.parse(data.response as string));
        //     })
        //     .then(val => {
        //         console.log(val);
        //         Object.entries(val).forEach(([key, value]) => {
        //             if (props.hasOwnProperty(key)) {
        //                 props[key].setProps({ inputValue: value })
        //             }
        //
        //         })
        //     });
        UserController.getUser()
        store.on(StoreEvents.Updated, () => {
            // вызываем обновление компонента, передав данные из хранилища
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
        return state.user ?? {};
    }
)
