import profileTpl from '../../components/profileTpl/profileTpl.hbs';
import '../../components/profileTpl/profileTpl.scss';
import Block, {Props} from '../../block';

export default class ChangeProfile extends Block {
  constructor(props: Props) {
    super("div", props);
  }

  addAttribute() {

    const {attr = {
      class: "profilePage-box"
    }} = this.props;
    const _attr = attr as Record<string, any>

    if (attr) {
      Object.entries(_attr).forEach(([key, value]) => {
        this.element.setAttribute(key, value);
      });
    }
  }

  render() {
    return this.compile(profileTpl, this.props);
  }
}
