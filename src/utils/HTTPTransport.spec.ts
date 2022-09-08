import { expect } from "chai";
import HTTPTransport from './HTTPTransport';


describe('request', () => {
    it('should makes request', () => {
        const req = new HTTPTransport()

       const status = req.request('').then((data: XMLHttpRequest) => {
           return data.status;
        })
        expect(status).to.eq(200);
    });
});
