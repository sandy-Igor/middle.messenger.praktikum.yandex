import * as avatarImage from '../../static/avatar-png-icon.png';
import Block from '../../block';
import profileTpl from '../../components/profileTpl/profileTpl.tpl';
import ArrowButton from '../../components/arrowButton/arrowButton';
import Avatar from '../../components/avatar/avatar';
import InputLabel from '../../components/inputLabel/inputLabel';
import Span from '../../components/span/span';
import Connect from '../../store/Connect';
import { router } from '../../router/router';
import { AuthApi } from '../../api/auth-api';

export type ProfileProps = Record<string, any>

class Profile extends Block<ProfileProps> {
    constructor(tagName: string, props: ProfileProps) {
        props.profile = true;
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
                disabled: 'disabled',
                events: {}
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

        props.login = new InputLabel(
            'li',
            {
                label: 'Login',
                inputType: 'text',
                inputId: 'Sith',
                inputName: 'login',
                inputValue: props.login,
                disabled: 'disabled',
                events: {}
            }
        );

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
                            .then(r => r);
                        router.go('/');
                    }
                }
            }
        );

        super(tagName, props);
        // this.initChilds();
    }

    setProps(nextProps: ProfileProps) {
        super.setProps(nextProps);
        this.initChilds();
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
    Profile,
    state => {
        return 'user' in state ? {
            user: state.user
        } : {
            user: {}
        };
    })
