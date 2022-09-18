import * as clip from '../../static/clip.png';
import chat from './chat.tpl';
import Block from '../../block';
import './chat.scss';
import ChatRoomItem from '../../components/chatRoomItem/chatRoomItem';
import * as createChatImage from '../../static/pngegg.png';
import { chatRoomClick } from '../../utils/events';
import Connect from '../../store/Connect';
import Input from '../../components/input/input';
import ArrowButton from '../../components/arrowButton/arrowButton';
import InputSearch from '../../components/inputSearch/inputSearch';
import { router } from '../../router/router';
import Message from '../../components/message/message';
import ChatControl from '../../components/ChatControl/Common/ChatControl';
import ChatControlElem from '../../components/ChatControl/ChatControlElem/ChatControlElem';
import Button from '../../components/button/button';
import ChatController from '../../controllers/chatController';
import { setScrollBottom } from '../../utils/setScrollBottom';
import ChatRoomFooter from '../../components/chatRoomItem/chatRoomFooter/chatRoomFooter';

type ChatProps = Record<string, any>

class ChatPage extends Block<ChatProps> {
  constructor(tagName: string, props: ChatProps = {}) {
    props.clip = clip;
    props.inputSearch = new InputSearch(
      'div',
      {
        spanValue: 'Profile',
        inputPlaceholder: 'Search',
        inputName: 'inputSearch',
        events: {
          input: (e: Event) => {
            console.log((e.target as HTMLInputElement).value);
          },
          click: (e: Event) => {
            e.preventDefault();
            router.go('/profilePage');
          },
        },
      },
    );

    props.chatRooms = new ChatRoomItem(
      'ul',
      {
        events: {
          click: chatRoomClick,
        },
        attr: {
          class: 'chat-list-box',
        },
      },
    );
    props.activeChat = new ChatRoomFooter(
      'ul',
      {
        events: {
          optClick: () => {
            props.chatControl.element.classList.toggle('display');
          },
        },
      },
    );

    props.chatControl = new ChatControl(
      'form',
      {
        operation: [
          {
            operationImage: createChatImage,
            operationDesc: 'Create new chat',
          },
          {
            operationImage: createChatImage,
            operationDesc: 'Delete chat',
            rotation: 'rotation',
          },
          {
            operationImage: createChatImage,
            operationDesc: 'Add user to chat',
          },
          {
            operationImage: createChatImage,
            operationDesc: 'Delete user from chat',
            rotation: 'rotation',
          },
        ],
        events: {
          click: (e: Event) => {
            if ((e.target as HTMLDivElement).textContent === 'Create new chat') {
              props.newChat.element.classList.add('display-elem');
            }
            if ((e.target as HTMLDivElement).textContent === 'Delete chat') {
              props.deleteChat.element.classList.add('display-elem');
            }
            if ((e.target as HTMLDivElement).textContent === 'Add user to chat') {
              props.addUser.element.classList.add('display-elem');
            }
            if ((e.target as HTMLDivElement).textContent === 'Delete user from chat') {
              props.deleteUser.element.classList.add('display-elem');
            }
            props.chatControl.element.classList.remove('display');
          },
        },
      },
    );

    props.newChat = new ChatControlElem(
      'form',
      {
        description: 'Create new chat',
        value: new Input(
          'div',
          {
            inputType: 'text',
            inputClass: 'chat-input__new-chat',
            inputName: 'reqBody',
            inputPlaceholder: 'chat name',
            inputAutocomplete: 'off',
            events: {},
          },
        ),
        sendReq: new Button(
          'div',
          {
            buttonType: 'button-ready',
            btnValue: 'Create new chat',
            events: {},
          },
        ),
        events: {
          submit: (e: Event) => {
            e.preventDefault();
            const title = {
              title: props.newChat.element.querySelector('.chat-input__new-chat').value,
            };
            ChatController.createChat(title);
            props.newChat.element.classList.remove('display-elem');
          },
          click: () => {
            props.newChat.element.classList.remove('display-elem');
          },
        },

      },
    );

    props.deleteChat = new ChatControlElem(
      'form',
      {
        description: 'Delete chat',
        chatTitle: 'Select chat to delete',
        sendReq: new Button(
          'div',
          {
            buttonType: 'button-ready',
            btnValue: 'Delete chat',
            events: {},
          },
        ),
        events: {
          submit: (e: Event) => {
            e.preventDefault();
            const chatId = { chatId: this.props.activeChat?.id.toString() };
            ChatController.deleteChat(chatId);
            props.deleteChat.element.classList.remove('display-elem');
          },
          click: () => {
            props.deleteChat.element.classList.remove('display-elem');
          },
        },

      },
    );
    props.addUser = new ChatControlElem(
      'form',
      {
        description: 'Add user to chat',
        value: new Input(
          'div',
          {
            inputType: 'text',
            inputClass: 'chat-input__add-user',
            inputName: 'reqBody',
            inputPlaceholder: 'user login',
            inputAutocomplete: 'off',
            events: {},
          },
        ),
        sendReq: new Button(
          'div',
          {
            buttonType: 'button-ready',
            btnValue: 'Add user to chat',
            events: {},
          },
        ),
        events: {
          submit: (e: Event) => {
            e.preventDefault();
            const user = {
              login: props.addUser.element.querySelector('.chat-input__add-user').value,
            };
            ChatController.getUserByLogin(user)
              .then((data) => {
                const prep = {
                  users: [] as Array<number>,
                  chatId: this.props.activeChat?.id,
                };
                data.forEach((el: { id: number }) => {
                  prep.users.push(el.id);
                });
                ChatController.addUserToChat(prep);
              });
            props.addUser.element.classList.remove('display-elem');
          },
          click: () => {
            props.addUser.element.classList.remove('display-elem');
          },
        },

      },
    );

    props.deleteUser = new ChatControlElem(
      'form',
      {
        description: 'Delete user',
        sendReq: new Button(
          'div',
          {
            buttonType: 'button-ready',
            btnValue: 'Delete user',
            events: {},
          },
        ),
        events: {
          submit: (e: Event) => {
            e.preventDefault();
            const userName = props.deleteUser.element.querySelector('.select-user').value;
            const prep = {
              users: [] as Array<number>,
              chatId: this.props.activeChat?.id,
            };
            Object.values(this.props.usersInActiveChat)
              .forEach((el: { login: string, id: number }) => {
                const {
                  login,
                  id,
                } = el;
                if (login === userName) {
                  prep.users.push(id);
                }
              });
            ChatController.deleteUserFromChat(prep)
              .then(() => {
                ChatController.getUsersInChat(prep.chatId);
              });
            props.deleteUser.element.classList.remove('display-elem');
          },
          click: () => {
            props.deleteUser.element.classList.remove('display-elem');
          },
        },

      },
    );

    props.messages = new Message(
      'div',
      {
        events: {},
        attr: {
          class: 'messages-container',
        },
      },
    );

    props.messageArea = new Input(
      'div',
      {
        inputType: 'text',
        inputClass: 'message chat-input__msg',
        inputName: 'messageArea',
        inputPlaceholder: 'message',
        inputAutocomplete: 'off',
        autofocus: 'autofocus',
        events: {},
      },
    );

    props.arrowButton = new ArrowButton(
      'div',
      {
        events: {
          click: (e: Event) => {
            e.preventDefault();
            const { value } = props.messageArea.element.querySelector('input');
            props.messageArea.setProps({ inputValue: value });
            if (value) ChatController.sendMessage(value);
            props.messageArea.setProps({ inputValue: '' });
          },
        },
        attr: {
          class: 'directionRight blue-edit',
        },
      },
    );
    super(tagName, props);
    this.initChilds();
    this.getNewMessages();
  }

  setProps(nextProps: ChatProps) {
    super.setProps(nextProps);
    this.initChilds();
  }

  initChilds() {
    const activeChatTitle = this.props.activeChat?.title;
    const usersInActiveChat: string[] = [];
    if (this.props.usersInActiveChat) {
      Object.values(this.props.usersInActiveChat)
        .forEach((el: { login: string }) => {
          usersInActiveChat.push(el.login);
        });
    }
    this.children.chatRooms.setProps({
      chat: { ...this.props.chats },
    });
    this.children.deleteChat.setProps({
      chatTitle: activeChatTitle
        ? `Chat ${activeChatTitle} will be deleted. Are you sure`
        : 'Return and select chat to delete',
    });
    this.children.deleteUser.setProps({
      chatTitle: this.props.usersInActiveChat ? '' : 'Return and select chat',
      users: usersInActiveChat,
    });
    this.children.addUser.setProps({
      chatTitle: activeChatTitle
        ? `User will be added to chat ${activeChatTitle}.`
        : 'Return and select chat to add user',
    });
    if (this.props.activeChat) {
      this.children.activeChat.setProps({ chat: Array.of(this.props.activeChat) });
    }
    this.children.messages.setProps({ messages: { ...this.props.activeChatMessages } });
    setScrollBottom(this.children.messages.element);
  }

  getNewMessages() {
    setInterval(() => {
      this.props.chats.forEach((chat: { id: number }, index: number) => {
        ChatController.getNewMessages(chat.id, index);
        ChatController.getLastMessage(index);
      });
    }, 10000);
  }

  addAttribute() {
    const {
      attr,
    } = this.props;
    const _attr = attr as Record<string, any>;

    if (attr) {
      Object.entries(_attr)
        .forEach(([key, value]) => {
          this.element.setAttribute(key, value);
        });
    }
  }

  render() {
    return this.compile(chat, this.props);
  }
}

export default Connect(
  ChatPage,
  (state) => ('chats' in state ? {
    chats: state.chats,
    activeChat: state.activeChat,
    usersInActiveChat: state.usersInActiveChat,
    activeChatMessages: state.activeChatMessages,
  } : {
    chats: {},
    activeChat: {},
    usersInActiveChat: {},
    activeChatMessages: {},
  }),
);
