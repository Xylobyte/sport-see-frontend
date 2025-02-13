import {USE_MOCK} from "./SportSeeAPI.ts";

export type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const ROOT_URL = USE_MOCK ? "/mocks/" : 'http://localhost:3000/';

export class HttpError extends Error {
    code: Number;
    text: String;

    constructor(public statusCode: number, public statusText: string = '', message: string = '') {
        super(message);
        this.code = statusCode;
        this.text = statusText;
        this.message = message;
    }
}

const createHeaders = (contentType: string = 'application/json'): Headers => {
    const headers = new Headers();
    headers.set('accept', 'application/json');
    if (contentType) headers.set('Content-Type', contentType);
    return headers;
};

const createRequestInit = (method: string, body?: Object): RequestInit => ({
    method,
    headers: createHeaders(body ? 'application/json' : undefined),
    mode: 'cors',
    cache: 'no-store',
    ...(body && {body: JSON.stringify(body)})
});

const handleResponse = async (response: Response): Promise<any> => {
    if (response.ok) return response.status === 204 ? true : response.json();
    throw new HttpError(response.status, response.statusText, await response.text());
};

export const apiRequest = async (endpoint: string, method: ApiMethod, body?: Object): Promise<any> => {
    const request = new Request(`${ROOT_URL}${endpoint}${USE_MOCK ? ".json" : ""}`, createRequestInit(method, body));
    const response = await fetch(request);
    return handleResponse(response);
};
