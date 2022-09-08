import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { Router } from './router';
let myRouter: Router;
describe('Проверяем переходы у Роута', () => {
    before(async function () {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`, { url: 'https://localhost:1234' });
        (global as any).window = dom.window;
        (global as any).document = dom.window.document;
        const { router } = await import('./router');
        myRouter = router;
    });

    it('Переход на новую страницу должен менять состояние сущности history', () => {
        myRouter.go('/changeProfilePage');
        expect(window.location.pathname).to.eq('/changeProfilePage');
    });

});
