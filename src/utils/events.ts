import { Props } from '../block';
import store from '../store/Store';
import validation from './validation';
import chatController from '../controllers/chatController';

export function formSubmitEvent(e: Event, props: Props) {
    e.preventDefault();
    const requestData: Record<string, string> = {};
    const inputs = (e.target as HTMLFormElement)?.querySelectorAll('input');
    inputs.forEach(inp => {
        if (validation(inp, props)) {
            requestData[inp.name] = inp.value;
        }
    });
    if (Object.keys(requestData).length !== inputs.length) return false
    return requestData;
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

export const chatRoomClick: (e: Event) => void = (e: Event) => {
    if (chatController.socket) chatController.closeSocket()
    const target = (e.currentTarget as HTMLElement);
    const targetValue = target.querySelector('.chatName span')?.textContent;
    const chatsInStore: any = store.getState().chats;
    for (let chat of chatsInStore) {
        chat.selected = '';
        if (chat.title === targetValue) {
            chatController.getActiveChat(chat);
            chatController.getChatToken();
            chatController.getUsersInChat(chat.id);
            chatController.initSocket();
        }
    }
    store.set('activeChat.unread_count', 0);
};

