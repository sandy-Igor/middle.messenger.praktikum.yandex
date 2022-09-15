import Block, { Props } from '../block';
import { Indexed } from "../utils/set";
import store, { StoreEvents } from "./Store";

export default function connect(Component: typeof Block<Props>, mapStateToProps: (state: Indexed) => Indexed) {
    return class extends Component {
        constructor(props: Props = {}) {
            super('div',{...props, ...mapStateToProps(store.getState())});

            store.on(StoreEvents.Updated, () => {
                this.setProps({...mapStateToProps(store.getState())});
            });
        }
    }
}
