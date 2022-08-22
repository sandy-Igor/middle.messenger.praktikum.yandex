import arrow from './arrowButton.hbs';
import './arrowButton.scss';
import Block from '../../block';

type ArrowButtonProps = {
    events: Record<string, Function>
    attr?: Record<string, string>
}

export default class ArrowButton extends Block<ArrowButtonProps> {
    addEvents(): void {
        this.element.querySelector('button')
            ?.addEventListener('click', this.props.events.click);
    }

    render() {
        return this.compile(arrow, this.props);
    }
}

