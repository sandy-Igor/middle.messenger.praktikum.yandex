import { Props } from '../block';
import validation from './validation';

export function formSubmitEvent(e: Event, props: Props) {
    e.preventDefault();
    const inputs: Record<string, string> = {};
    (e.target as HTMLFormElement)?.querySelectorAll('input')
        .forEach(inp => {
            console.log(inp.files);
            if (validation(inp, props)) {
                inputs[inp.name] = inp.value;
            }
        });
    console.log(inputs);
    return inputs;
}

export function inputFocus(e: Event) {
    (e.target as HTMLInputElement).classList.remove('error');
}

export function inputBlur(e: Event, props: Props) {
    if (!validation(e.target as HTMLInputElement, props)) {
        (e.target as HTMLInputElement).classList.add('error');
    }
    e.preventDefault();
}

