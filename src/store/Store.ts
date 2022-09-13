import EventBus from '../event-bus';
import set, { Indexed } from '../utils/set';

export enum StoreEvents {
    Updated = 'updated',
}

class Store extends EventBus {
    private state: Indexed = {};

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        set(this.state, path, value);
        this.emit(StoreEvents.Updated);
    }
}

const store = new Store();

// @ts-ignore
window._store = store;
export default store;