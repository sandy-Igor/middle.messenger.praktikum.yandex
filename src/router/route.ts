import Block, { Props } from '../block';
import { isEqual } from '../utils/isEqual';
import { render } from '../utils/renderDOM';

export default class Route {
    private _pathname: string;
    private readonly _block: InstanceType<typeof Block>;
    private _props: Props;
    constructor(pathname: string, view: InstanceType<typeof Block>, props: Props) {
        this._pathname = pathname;
        this._block = view;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        render(this._props.rootQuery, this._block);
        this._block.show();
    }
}