import { expect } from "chai";
import Block from "./block";
import { JSDOM } from 'jsdom';

class BlockTest extends Block<{ name: string }> {
    constructor(tagName: string, props: { name: string }) {
        super(tagName, props);
    }

    render() {
        return this.compile(() => '<div>{{name}}</div>', {
            name: this.props.name,
        });
    }
}
describe('.setProps', () => {
    before(async function () {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`, { url: 'https://localhost:1234' });
        (global as any).window = dom.window;
        (global as any).document = dom.window.document;
    })
    it('should makes props changed', () => {
        const block = new BlockTest('div',
            {
            name: 'nameOfBlock',
        });

        block.setProps({
            name: 'changedNameOfBlock',
        });
        expect(block.props.name).to.eq('changedNameOfBlock');
    });
});

