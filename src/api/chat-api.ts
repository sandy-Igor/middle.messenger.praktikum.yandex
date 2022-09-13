import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI } from './base-api';
import { HOST } from './host';

export type ChatName = {
    title: string
}

export type ChatId = {
    chatId: string
}

export type UserToChat = {
    users: Array<number>,
    chatId: number
}

export type UserSearch = {
    login: string
}

export class ChatApi extends BaseAPI {
    private chatAPIInstance: HTTPTransport;
    constructor() {
        super();
        this.chatAPIInstance = new HTTPTransport();
    }

    getChats() {
        return this.chatAPIInstance.get(`${HOST}api/v2/chats`)
    }

    createChat(data: ChatName) {
        return this.chatAPIInstance.post(`${HOST}api/v2/chats`, {
            data,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    deleteChat(data: ChatId) {
        return this.chatAPIInstance.delete(`${HOST}api/v2/chats`, {
        data,
        headers: {
            'content-type': 'application/json',
        },
    })
    }

    addUserToChat(data: UserToChat) {
        return this.chatAPIInstance.put(`${HOST}api/v2/chats/users`, {
            data,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    getUserByLogin(data: UserSearch) {
        return this.chatAPIInstance.post(`${HOST}api/v2/user/search`, {
            data,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    getUsersInChat (data: number) {
        return this.chatAPIInstance.get(`${HOST}api/v2/chats/${data}/users`)
    }

    deleteUserFromChat (data: UserToChat) {
        return this.chatAPIInstance.delete(`${HOST}api/v2/chats/users`, {
            data,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    getNewMessages (id: number) {
        return this.chatAPIInstance.get(`${HOST}api/v2/chats/new/${id}`)
    }

    getChatToken(id: number) {
        return this.chatAPIInstance.post(`${HOST}api/v2/chats/token/${id}`)
    }
}