import profileTpl from '../../components/profileTpl/profileTpl.hbs';
import '../../components/profileTpl/profileTpl.scss';
import Block from '../../block';
import Connect from '../../store/Connect';
import InputLabel from '../../components/inputLabel/inputLabel';
import { formSubmitEvent, inputBlur, inputFocus } from '../../utils/events';
import ArrowButton from '../../components/arrowButton/arrowButton';
import { router } from '../../router/router';
import Avatar from '../../components/avatar/avatar';
import avatarImage from '../../../static/images/avatar-png-icon.png';
import UserController from '../../controllers/userController';
import Button from '../../components/button/button';
import { ChangeUser } from '../../api/user-api';
import changeProfilePage from './index';

type ChangeProfileProps = Record<string, any>

class ChangeProfile extends Block<ChangeProfileProps> {
    constructor(tagName: string, props: ChangeProfileProps) {
        props.profile = true;
        props.buttons = true;
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
                        UserController.changeAvatar(form as HTMLFormElement);
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
        props.login = new InputLabel(
            'li',
            {
                label: 'Login',
                inputType: 'text',
                inputId: 'Sith',
                inputName: 'login',
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
        this.initChilds()
    }

    setProps(nextProps: ChangeProfileProps) {
        super.setProps(nextProps);
        this.initChilds()
    }

    initChilds() {
        this.children.avatar.setProps({ srcAvatar: this.props.user.avatar });
        this.children.email.setProps({ inputValue: this.props.user.email });
        this.children.login.setProps({ inputValue: this.props.user.login });
        this.children.first_name.setProps({ inputValue: this.props.user.first_name });
        this.children.second_name.setProps({ inputValue: this.props.user.second_name });
        this.children.display_name.setProps({ inputValue: this.props.user.display_name });
        this.children.phone.setProps({ inputValue: this.props.user.phone });
    }

    addEvents() {
        this.element.querySelector('#profile-data')
            ?.addEventListener('submit', (e: Event) => {
                const data = formSubmitEvent(e, changeProfilePage.children);
               if(data) UserController.changeProfile(data as ChangeUser);
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

export default Connect(
    ChangeProfile,
    state => {
        return 'user' in state ? {
            user: state.user
        } : {
            user: {}
        };
    })

