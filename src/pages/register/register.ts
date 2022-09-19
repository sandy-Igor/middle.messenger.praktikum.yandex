import Block, { Props } from '../../block';
import register from '../../components/authRegForm/authReg.tpl';
import '../../components/authRegForm/authReg.scss';

type RegisterPageProps = Record<string, any>
export default class RegisterPage extends Block<RegisterPageProps> {
  constructor(props: Props) {
    super('div', props);
  }

  addEvents() {
    this.element.querySelectorAll('form')
      .forEach((form) => {
        form.addEventListener('submit', this.props.events.submit);
      });
  }

  render() {
    return this.compile(register, this.props);
  }
}
