import Block from '../block';

export function render(query: string, block: Block<unknown>) {
    const root = document.querySelector(query);

    root?.appendChild(block.getContent());

    block.dispatchComponentDidMount();

    return root;
}

