import clip from "../../../static/images/clip.png";
import avatar from "../../../static/images/avatar-chat.png";
import chatImage from "../../../static/images/Kenobi-why-obi-wan.webp";
import ChatPage from "./chat";
import InputSearch from "../../components/inputSearch/inputSearch";
import ChatRoomItem from "../../components/chatRoomItem/chatRoomItem";
import Message from "../../components/message/message";
import ArrowButton from "../../components/arrowButton/arrowButton";
import Input from "../../components/input/input";
import {formSubmitEvent} from "../../utils/events";


const cutString = (str: string) => {
    if (str.length < 54) {
        return str;
    }
    return str.substring(0, 51) + '...';
}

const chatRoomClick: (e: Event) => void = (e: Event) => {
    document.querySelectorAll(".room-box").forEach((chatRoom) => {
        chatRoom.classList.remove("selected");
    });

    (e.currentTarget as HTMLElement).classList.add("selected")
}

const inputSearch = new InputSearch(
    'div',
    {
        spanValue: "Profile",
        inputPlaceholder: "Search",
        inputName: "inputSearch",
        events: {
            input: (e: Event) => {
                console.log((e.target as HTMLInputElement).value)
            }
        }
    }
)

const chatLuke = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Luke",
        userMsg: true,
        lastMsg: cutString("May the force be with you"),
        dateMsg: "11:25",
        events: {
            click: chatRoomClick
        }
    }
)

const chatDarthVader = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Darth Vader",
        userMsg: true,
        lastMsg: cutString("I’ve been waiting for you, Obi-Wan. We meet again. We meet again. We meet again."),
        dateMsg: "10:55",
        events: {
            click: chatRoomClick
        },
        attr: {
            class: "room-box selected"
        }
    }
)

const chatObiWan = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Obi-Wan",
        userMsg: true,
        lastMsg: cutString("What have you become"),
        dateMsg: "12:38",
        newMsg: 5,
        events: {
            click: chatRoomClick
        }
    }
)

const chatHanSolo = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Han Solo",
        userMsg: true,
        lastMsg: cutString("Women always figure out the truth"),
        dateMsg: "10:55",
        events: {
            click: chatRoomClick
        }
    }
)

const chatYoda = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Yoda",
        userMsg: false,
        lastMsg: cutString("Judge me by my size, do you?"),
        dateMsg: "10:55",
        events: {
            click: chatRoomClick
        }
    }
)

const chatC3PO = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "C-3PO",
        userMsg: false,
        lastMsg: cutString("We seem to be made to suffer. It's our lot in life."),
        dateMsg: "10:55",
        newMsg: 2,
        events: {
            click: chatRoomClick
        }
    }
)

const chatLeia = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Princess Leia",
        userMsg: false,
        lastMsg: cutString("Help me, Obi-Wan Kenobi. You’re my only hope"),
        dateMsg: "10:55",
        newMsg: 3,
        events: {
            click: chatRoomClick
        }
    }
)

const chatSkywalker = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Anakin Skywalker",
        userMsg: false,
        lastMsg: cutString("Someday I will be the most powerful Jedi ever"),
        dateMsg: "10:55",
        events: {
            click: chatRoomClick
        }
    }
)

const chatPadme = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Padmé",
        userMsg: false,
        lastMsg: cutString("So this is how liberty dies...with thunderous applause"),
        dateMsg: "10:55",
        newMsg: 5,
        events: {
            click: chatRoomClick
        }
    }
)

const chatJinn = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Qui-Gon Jinn",
        userMsg: true,
        lastMsg: cutString("Remember, Your focus determines your reality"),
        dateMsg: "18:12",
        events: {
            click: chatRoomClick
        }
    }
)

const chatDooku = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Count Dooku",
        userMsg: true,
        lastMsg: cutString("I sense great fear in you, Skywalker. You have hate. You have anger."),
        dateMsg: "12:38",
        events: {
            click: chatRoomClick
        }
    }
)

const openedChat = new ChatRoomItem(
    'div',
    {
        avatarImage: avatar,
        chatName: "Darth Vader",
        events: {
            click: (e: Event) => {
                console.log(e)
            }
        }
    }
)


const recMess1 = new Message(
    'div',
    {
        messageContent: "Have you come to destroy me Obi-Wan?",
        messageOwner: "",
        messageTime: "22:47",
        events: {
            click: (e: Event) => {
                e.preventDefault()
                console.log("recMess1")
            }
        }
    }
)


const sentMess1 = new Message(
    'div',
    {
        messageContent: "I will do what I must",
        messageTime: "22:48",
        events: {
            click: (e: Event) => {
                e.preventDefault()
                console.log("sentMess1")
            }
        },
        attr: {
            class: "message-item sent-msg"
        }
    }
)

const recMess2 = new Message(
    'div',
    {
        image: true,
        imgSource: chatImage,
        messageTime: "22:50",
        events: {
            click: (e: Event) => {
                e.preventDefault()
                console.log("recMess2")
            }
        }
    }
)


const messageArea = new Input(
    'div',
    {
        inputType: "text",
        inputClass: "message chat-input__msg",
        inputName: "messageArea",
        inputPlaceholder: "message",
        inputAutocomplete: "off",
        events: {
        }
    })

const arrowButton = new ArrowButton(
    'div',
    {
        events: {
            click: () => {
            }
        },
        attr: {
            class: "directionRight blue-edit"
        }
    }
)

const data = {
    inputSearch: inputSearch,
    chatLuke: chatLuke,
    chatDarthVader: chatDarthVader,
    chatObiWan: chatObiWan,
    chatHanSolo: chatHanSolo,
    chatYoda: chatYoda,
    chatC3PO: chatC3PO,
    chatLeia: chatLeia,
    chatSkywalker: chatSkywalker,
    chatPadme: chatPadme,
    chatJinn: chatJinn,
    chatDooku: chatDooku,
    openedChat: openedChat,
    recMess1: recMess1,
    sentMess1: sentMess1,
    recMess2: recMess2,
    clip: clip,
    messageArea: messageArea,
    arrowButton: arrowButton,
    avatarImage: avatar,
    chatName: "Darth Vader",
    events: {
        submit: (e: Event) => {
            formSubmitEvent(e, data)
        }
    }
}

const chat = new ChatPage(data)

export default chat;