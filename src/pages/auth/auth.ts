import Block from '../../block';
import auth from '../../components/authRegForm/authReg.tpl';
import '../../components/authRegForm/authReg.scss';

export type AuthPageProps = Record<string, any>

export default class AuthPage extends Block<AuthPageProps> {
    constructor(props: AuthPageProps) {
        super('div', props);
    }

    addEvents() {
        this.element.querySelectorAll('form')
            .forEach(form => {
                form.addEventListener('submit', this.props.events.submit);
            });
    }

    render() {
        return this.compile(auth, this.props);
    }
}
