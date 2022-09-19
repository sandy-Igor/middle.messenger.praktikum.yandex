import Route from './route';
import Block from '../block';

export class Router {
    static __instance: any;
    routes: Route[];
    history: History;
    private _currentRoute: Route | null | undefined;
    private readonly _rootQuery: string;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: Block) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = event => {
            this._onRoute((event.currentTarget as Document)?.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route?.render();
    }

    go(pathname: string | URL | null | undefined) {
        this.history.pushState({}, '', pathname);
        window.onpopstate = event => {
            this._onRoute((event.currentTarget as Document)?.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    back() {
        history.back();
    }

    forward() {
        history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}

export const router = new Router('.app');
