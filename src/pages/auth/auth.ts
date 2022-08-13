import Block, { Props } from "../../block";
import auth from '../../components/authRegForm/authReg.hbs'
import '../../components/authRegForm/authReg.scss'

export default class AuthPage extends Block {
    constructor(props: Props) {
        super("div", props);

    }

    addEvents() {
        this.element.querySelectorAll("form").forEach(form => {
            form.addEventListener("submit", this.props.events.submit)
        })
    }

    render() {
        return this.compile(auth, this.props);
    }
}