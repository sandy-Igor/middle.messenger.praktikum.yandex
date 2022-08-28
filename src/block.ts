import EventBus from './event-bus';
import { v4 as makeUUID } from 'uuid';

export type Props = Record<string, any>
type Children = Record<string, Block<Props>>

export default class Block<T> {
    private readonly EVENTS: Record<string, string> = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };
    /** JSDoc
     * @param {string} tagName
     * @param {Object} propsAndChildren
     *
     * @returns {void}
     */

    public element: HTMLElement;
    public props: Props;
    private readonly _id: string | null = null;
    private readonly children: Children;
    private readonly eventBus: EventBus;
    private readonly tagName: string;
    private _setUpdate = false;

    constructor(tagName: string = 'div', propsAndChildren: T) {
        const {
            children,
            props
        } = this._getChildren(propsAndChildren) as Record<string, any>;
        this.tagName = tagName;

        this._id = makeUUID();
        this.children = this._makePropsProxy(children);
        this.props = this._makePropsProxy({
            ...props,
            __id: this._id
        });

        this.eventBus = new EventBus();

        this._registerEvents();
        this.eventBus.emit(this.EVENTS.INIT);
    }

    private _getChildren(propsAndChildren: T): {} {
        const children: Children = {};
        const props: Props = {};
        Object.entries(propsAndChildren)
            .forEach(([key, value]) => {
                if (value instanceof Block) {
                    children[key] = value;
                } else {
                    props[key] = value;
                }
            });
        return {
            children,
            props
        };
    }

    public compile(template: Function, props: any) {
        if (typeof (props) === 'undefined') {
            props = this.props;
        }

        const propsAndStubs: Record<string, string> = { ...props };

        Object.entries(this.children)
            .forEach(([key, child]) => {
                propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
            });

        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
        fragment.innerHTML = template(propsAndStubs);

        Object.values(this.children)
            .forEach(child => {
                const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

                if (stub != null) {
                    (stub as HTMLElement).replaceWith(child.getContent());
                }
            });
        return fragment.content;
    }

    private _registerEvents(): void {
        this.eventBus.on(this.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources(): void {
        this.element = this._createDocumentElement(this.tagName);
    }

    private init(): void {
        this._createResources();
        this.eventBus.emit(this.EVENTS.FLOW_RENDER);
    }

    private _componentDidMount(): void {

        Object.values(this.children).forEach(child => {
                child.dispatchComponentDidMount();
            });
    }

    public dispatchComponentDidMount(): void {
        this.eventBus.emit(this.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps: Props, newProps: Props) {
        const isReRender = this.componentDidUpdate(oldProps, newProps);
        if (isReRender) {
            this.eventBus.emit(this.EVENTS.FLOW_RENDER);
        }
    }

    public componentDidUpdate(oldProps: Props, newProps: Props) {
        return oldProps !== newProps;
    }

    public addEvents() {
        const { events = {} } = this.props;
        if (events) {
            Object.keys(events).forEach(eventName => {
                    this.element.addEventListener(eventName, events[eventName]);
                });
        }
    }

    public addAttribute() {
        const { attr }: Record<string, string> | undefined = this.props;
        if (attr === undefined) return;
        Object.entries(attr).forEach(([key, value]) => {
                this.element.setAttribute(key, value);
            });
    }

    public removeEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
                this.element.removeEventListener(eventName, events[eventName]);
            });
    }

    public setProps = (nextProps: T) => {
        if (!nextProps) {
            return;
        }

        this._setUpdate = false;
        const oldValue = { ...this.props };

        const {
            children,
            props
        } = this._getChildren(nextProps) as Record<string, any>;
        if (Object.values(children).length > 0) {
            Object.assign(this.children, children);
        }

        if (Object.values(props).length > 0) {
            Object.assign(this.props, props);
        }

        if (this._setUpdate) {
            this.eventBus.emit(this.EVENTS.FLOW_CDU, oldValue, this.props);
            this._setUpdate = false;
        }
    };

    public getContent(): HTMLElement {
        return this.element;
    }

    private _render() {
        const block = this.render();
        this.removeEvents();
        this.element.innerHTML = '';
        this.element.appendChild(block);
        this.addEvents();
        this.addAttribute();
    }

    public render(): DocumentFragment {
        return new DocumentFragment();
    }

    private _makePropsProxy(props: Props): Props {

        const handler = {
            get: (target: Props, prop: string): unknown => {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },

            set: (target: Props, prop: string, value: unknown): boolean => {
                if (target[prop] !== value) {
                    target[prop] = value;
                    this._setUpdate = true;
                }
                return true;
            },

            deleteProperty(): boolean {
                throw new Error('Нет доступа');
            }
        };
        return new Proxy(props, handler);
    }

    private _createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName);
    }

    public show() {
        this.getContent().style.display = 'block';
    }

    public hide() {
        this.getContent().style.display = 'none';
    }
}

