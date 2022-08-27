enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export interface Options {
    timeout?: number;
    method?: Methods;
    headers?: Record<string, string>;
    data?: Object;
}

function queryStringify(data: Record<string, any>) {
    if (!data) return;
    const keys = Object.keys(data);
    return keys.reduce((result: string, key: string, index: number) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}

export default class HTTPTransport {

    get = async (url: string, options: Options = {}) => {
        return await this.request(url, {
            ...options,
            method: Methods.GET
        }, options.timeout);
    };

    post = async (url: string, options: Options = {}) => {
        return await this.request(url, {
            ...options,
            method: Methods.POST
        }, options.timeout);
    };

    put = async (url: string, options: Options = {}) => {
        return await this.request(url, {
            ...options,
            method: Methods.PUT
        }, options.timeout);
    };

    delete = async (url: string, options: Options = {}) => {
        return await this.request(url, {
            ...options,
            method: Methods.DELETE
        }, options.timeout);
    };

    request = async (url: string, options: Options, timeout = 5000) => {
        const {
            headers = {},
            method,
            data
        } = options;

        return await new Promise(function (resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === Methods.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url
            );
            xhr.withCredentials = true;
            Object.keys(headers)
                .forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;
            if (isGet || !data) {
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

