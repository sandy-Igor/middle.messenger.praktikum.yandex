import * as avatar from '../static/avatar-chat.png';
import {
  ChatApi, ChatId, ChatName, UserSearch, UserToChat,
} from '../api/chat-api';
import Socket from '../api/WebSocket';
import store from '../store/Store';
import { parseDate } from '../utils/parseDate';
import { ChatPropsInArray } from '../components/chatRoomItem/chatRoomItem';
import { cutString } from '../utils/cutString';

const chatApi = new ChatApi();

class ChatController {
  socket: Socket;

  public getChats() {
    return chatApi.getChats()
      .then((data: XMLHttpRequest) => (JSON.parse(data.response as string)))
      .then((data) => {
        data.forEach((el: ChatPropsInArray) => {
          if (el.avatar === null) el.avatar = avatar;
          if (el.last_message) {
            parseDate(el.last_message);
                        el.last_message!.content = cutString((el.last_message?.content as string));
                        if (el.last_message?.user.login === (store.getState().user as { login: string }).login) {
                          el.userMsg = true;
                        }
          }
        });
        store.set('chats', data);
        store.set('activeChat', {
          avatar,
        });
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public getActiveChat(chat: ChatPropsInArray) {
    chat.selected = 'selected';
    store.set('activeChat', chat);
  }

  public createChat(title: ChatName) {
    return chatApi.createChat(title)
      .then((data: XMLHttpRequest) => (JSON.parse(data.response as string)))
      .then((data) => data)
      .then(() => {
        this.getChats();
      });
  }

  public deleteChat(ChatId: ChatId) {
    return chatApi.deleteChat(ChatId)
      .then((data: XMLHttpRequest) => (JSON.parse(data.response as string)))
      .then((data) => data)
      .then(() => {
        this.getChats();
      });
  }

  public addUserToChat(addUserToChat: UserToChat) {
    return chatApi.addUserToChat(addUserToChat)
      .then((data: XMLHttpRequest) => data.response)
      .then((data) => data)
      .then(() => {
        this.getChats();
      });
  }

  public getUserByLogin(userLogin: UserSearch) {
    return chatApi.getUserByLogin(userLogin)
      .then((data: XMLHttpRequest) => (JSON.parse(data.response as string)))
      .then((data) => {
        this.getChats();
        return data;
      });
  }

  public getUsersInChat(data: number) {
    return chatApi.getUsersInChat(data)
      .then((data: XMLHttpRequest) => (JSON.parse(data.response as string)))
      .then((data) => {
        store.set('usersInActiveChat', data);
        return data;
      });
  }

  public deleteUserFromChat(daleteUserFromChat: UserToChat) {
    return chatApi.deleteUserFromChat(daleteUserFromChat)
      .then((data: XMLHttpRequest) => data.response)
      .then((data) => data)
      .then(() => {
        this.getChats();
      });
  }

  public getNewMessages(id: number, chat: {}) {
    return chatApi.getNewMessages(id)
      .then((data: XMLHttpRequest) => {
        store.set(`chats.${chat}.unread_count`, JSON.parse(data.response).unread_count);
      });
  }

  public getLastMessage(chat: number) {
    return chatApi.getChats()
      .then((data: XMLHttpRequest) => {
        store.set(`chats.${chat}.last_message.content`, JSON.parse(data.response)[chat].last_message?.content);
      });
  }

  public getChatToken() {
    const { id } = store.getState().activeChat as { id: number };
    return chatApi.getChatToken(id)
      .then((data: XMLHttpRequest) => JSON.parse(data.response))
      .then((data) => {
        const { token } = data;
        return token;
      });
  }

  public initSocket() {
    const {
      user,
      activeChat,
    } = store.getState();
    return this.getChatToken()
      .then((token) => {
        this.socket = new Socket((user as { id: number }).id, (activeChat as { id: number }).id, token);
      });
  }

  public closeSocket() {
    this.socket.closeSocket();
  }

  public sendMessage(value: string) {
    this.socket.socketSend(value);
  }
}

export default new ChatController();
