import store from '../store/Store';
import { MessagePropsInArray } from '../components/message/message';
import { parseDate } from '../utils/parseDate';

class Socket {
    socket: WebSocket;
    messages: Array<MessagePropsInArray> = [];

    constructor(user: number, chat: number, token: string) {
        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${user}/${chat}/${token}`);
        this.socketOpen();
        this.socketMessage();
        this.socketClose();
        this.socketError();
        this.ping();
    }

    socketOpen() {
        this.socket.addEventListener('open', () => {
            this.socket.send(JSON.stringify({
                content: '0',
                type: 'get old',
            }));
        });
    }

    closeSocket() {
        this.socket?.close();
    }

    socketSend(value: string) {
        this.socket.send(JSON.stringify({
            content: value,
            type: 'message',
        }));
    }

    socketClose() {
        this.socket.addEventListener('close', (event: CloseEvent) => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }
        });
    }

    socketMessage() {
        this.socket.addEventListener('message', (event: MessageEvent) => {

            const message = JSON.parse(event.data);
            if (Array.isArray(message)) {
                message
                    .forEach((mess: MessagePropsInArray) => {
                        parseDate(mess);
                        if (mess.user_id === (store.getState().user as { id: number }).id) {
                            mess.sentMsg = 'sent-msg';
                        }
                        this.messages.push(mess);
                    });
            } else {
                parseDate(message);
                if (JSON.parse(event.data).user_id === (store.getState().user as { id: number }).id) {
                    message.sentMsg = 'sent-msg';
                }
                if (JSON.parse(event.data).type === 'message') {
                    this.messages.push(message);
                }
            }
            this.messages.sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
            store.set('activeChatMessages', this.messages);
        });
    }

    socketError() {

        this.socket.addEventListener('error', (event: ErrorEvent) => {
            console.log('Ошибка', event.message);
        });
    }

    ping() {
        setInterval(() => {
            this.socket.send(JSON.stringify({
                type: 'ping'
            }));
        }, 30000);
    }
}

export default Socket;