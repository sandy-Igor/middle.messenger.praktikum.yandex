import profileTpl from '../../components/profileTpl/profileTpl.hbs';
import '../../components/profileTpl/profileTpl.scss';
import Block, { Props } from '../../block';
import Connect from '../../store/Connect';
import InputLabel from '../../components/inputLabel/inputLabel';
import { inputBlur, inputFocus } from '../../utils/events';
import { AuthApi } from '../../api/auth-api';
import ArrowButton from '../../components/arrowButton/arrowButton';
import { router } from '../../router/router';
import Avatar from '../../components/avatar/avatar';
import avatarImage from '../../../static/images/avatar-png-icon.png';
import userController from '../../controllers/userController';
import Button from '../../components/button/button';
import { isEqual } from '../../utils/isEqual';

type ChangeProfileProps = Record<string, any>

class ChangeProfile extends Block<ChangeProfileProps> {
    constructor(tagName: string, props: ChangeProfileProps) {
        props.arrowButton = new ArrowButton(
            'div',
            {
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        router.go('/profilePage');
                    }
                }
            }
        );

        props.avatar = new Avatar(
            'label',
            {
                srcAvatar: avatarImage,
                events: {
                    submit: (e: Event) => {
                        e.preventDefault();
                        const form = this.element.querySelector('form');
                        userController.changeAvatar(form as HTMLFormElement);
                    },
                    change: () => {
                        (this.element.querySelector('input[type=submit]') as HTMLElement).click();
                    }
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
                events: {
                    focus: inputFocus,
                    blur: (e: Event) => {
                        inputBlur(e, props);
                    }
                }
            }
        );

        props.input_login = new InputLabel(
            'li',
            {
                label: 'Login',
                inputType: 'text',
                inputId: 'Sith',
                inputName: 'login',
                inputValue: props.login,
                events: {
                    focus: inputFocus,
                    blur: (e: Event) => {
                        inputBlur(e, props);
                    }
                }
            }
        );

        props.first_name = new InputLabel(
            'li',
            {
                label: 'Name',
                inputType: 'text',
                inputId: 'Lord',
                inputName: 'first_name',
                events: {
                    focus: inputFocus,
                    blur: (e: Event) => {
                        inputBlur(e, props);
                    }
                }
            }
        );

        props.second_name = new InputLabel('li',
            {
                label: 'Surname',
                inputType: 'text',
                inputId: 'Vader',
                inputName: 'second_name',
                inputValue: props.second_name,
                events: {
                    focus: inputFocus,
                    blur: (e: Event) => {
                        inputBlur(e, props);
                    }
                }
            });

        props.display_name = new InputLabel(
            'li',
            {
                label: 'Chat name',
                inputType: 'text',
                inputId: 'lordVaderSith',
                inputName: 'display_name',
                events: {
                    focus: inputFocus,
                    blur: (e: Event) => {
                        inputBlur(e, props);
                    }
                }
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
                events: {
                    focus: inputFocus,
                    blur: (e: Event) => {
                        inputBlur(e, props);

                    }
                }
            }
        );

        props.button = new Button(
            'div',
            {
                buttonType: 'button-save',
                btnValue: 'Save',
                events: {
                    click: () => {
                        console.log('Submit');
                    }
                },
                attr: {
                    class: 'box-profile-bottom'
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
        this.props.input_login.setProps({ inputValue: this.props.user?.login });
        window._props = props;
    }

    addEvents() {
        this.element.querySelector('#profile-data')
            ?.addEventListener('submit', this.props.events.submit);
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
        return state.user ?? {};
    }
);
