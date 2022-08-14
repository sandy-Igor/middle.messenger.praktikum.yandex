import Block, {Props} from "../../block";
import error from "./errors.hbs"

export default class Errors extends Block {
    constructor(tagName: string, props: Props) {
        super(tagName, props);
    }

    addEvents() {
        this.element.querySelector(".button-return")?.addEventListener("click", this.props.events.click);

    }

    render() {
        return this.compile(error, this.props)
    }
}